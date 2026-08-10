from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path

from PIL import Image, ImageChops

SIZE = 1254
MASTER_ROOT = Path(r"E:\OneDrive\OD-2018 US\2026 vibe coding web design\9. Games\Find the Cat 圖片\AI生成圖片\next20")
ROOT = Path(__file__).resolve().parents[2]
WEB_ROOT = ROOT / "assets" / "levels"
APP_PATH = ROOT / "app.js"
CONFIG_PATH = Path(__file__).with_name("levels.json")
BACKGROUND_SHA256 = {
    "01": "a8061f423760fb790e79dc6af8e15e5fe16a3aeb7c9cef61b32faa2c57ceb77b",
    "02": "597ef74c73d769cbe22304c7c8f00aadb35dbdd7fdd7735257edf3ce66e8fd35",
    "03": "fd6617afa79b56e692bccc3889d7910ad059269d96ae0626f9e92d12ea7c3064",
    "04": "5ac3e0974e9f532515e9577f5172e2cbd1b4ac77f4538f4589ad87093ad7d774",
    "05": "e6b75188d526843edddc247e9e3fc343edfbfc76cbf1da2063944525cc129843",
    "06": "504952bd7065263121d78ab778009bf16483c2872baa71ec07798e3f36ef5bac",
    "07": "9a074e75f80d95348d3a0c543ffbdcb1e6b999e3bfae381b3a811362269b281b",
    "08": "3ae0cfbcc23370135bb1e3a3829396ecd9cfabdf614da0ae2b71e4f01376e29b",
    "09": "9e6fcb219bb6a55f0af3c5467a4c3433a78b2d2b5689e0fac8ce636d47b77cae",
    "10": "0e0a75f914a542e86afc379903f076079a06fb04d8d24b1ff73fbcc437f1a926",
    "11": "83c6482ca48d3678d4c8d36ed925dc2e3a2be1d4d5b345ced305e21ae933702c",
    "12": "334d2f3b5e9b4720c23207d35f4ea9be5eb190f765e3b96d5768d315a3df2117",
    "13": "34ca4219d7eef1fea905a6e0ca76dfc26218e4c2018e63cd364e81318cb3391f",
    "14": "2575acc36e8abf7ccb76de513eeaf942b79f76cb575494af9fa98a16ba2bc87d",
    "15": "861a9986012e5a0084345f08697f6d678cbde316eee9703b6dfc3b69915b638f",
    "16": "bc8dba3d799ebdb9eb59863e726135a92b24ed4434261a7654d862895b7e488b",
    "17": "abdd1846c27c5db1fe82b076b49f7827cf3c60f63075f511c984ab4adcf438df",
    "18": "ccdb54f5425fb18a37b41823aba499fa384275bd02c842c6119a11d0275d3689",
    "19": "92a5bc9906bb8e1d9db9bce52d308f435aa15202ce279913a1d2783b03d5408a",
    "20": "7c3f28c578dcf51a681124f2b58cd80631a39dee3f92530f806f925beabac37a",
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def parse_app_level(app_source: str, file_name: str) -> list[dict[str, float]]:
    match = re.search(
        rf'file: "{re.escape(file_name)}".*?cats: \[\s*(.*?)\]\s*\}}',
        app_source,
        re.DOTALL,
    )
    if not match:
        raise AssertionError(f"app.js is missing {file_name}")
    records = []
    for body in re.findall(r"\{([^{}]+)\}", match.group(1)):
        values = {key: float(value) for key, value in re.findall(r"(x|y|hitX|hitY|clipX|clipY):([.]?\d+)", body)}
        records.append(values)
    return records


def validate_level(level: dict, app_source: str) -> None:
    level_id = level["id"]
    cats = level["cats"]
    if len(cats) != 10:
        raise AssertionError(f"{level_id}: configured cat count is {len(cats)}, expected 10")
    if any(not 0.045 <= cat["size"] <= 0.060 for cat in cats):
        raise AssertionError(f"{level_id}: cat size outside 4.5%-6.0%")
    for cat in cats:
        if cat["kind"] in {"face", "side", "sit"} and not 0.050 <= cat["size"] <= 0.060:
            raise AssertionError(f"{level_id}: {cat['kind']} size is outside 5.0%-6.0%")
        if cat["kind"] in {"ears", "eyes", "peek"} and not 0.045 <= cat["size"] <= 0.055:
            raise AssertionError(f"{level_id}: {cat['kind']} size is outside 4.5%-5.5%")

    background_path = MASTER_ROOT / f"{level_id}-background.png"
    if sha256(background_path) != BACKGROUND_SHA256[level_id]:
        raise AssertionError(f"{level_id}: source background hash changed")
    if Image.open(background_path).size != (SIZE, SIZE):
        raise AssertionError(f"{level_id}: source background size mismatch")

    player_layer = Image.open(MASTER_ROOT / f"{level_id}-cats-player.png").convert("RGBA")
    answer_layer = Image.open(MASTER_ROOT / f"{level_id}-cats-answer.png").convert("RGBA")
    if player_layer.size != (SIZE, SIZE) or answer_layer.size != (SIZE, SIZE):
        raise AssertionError(f"{level_id}: layer size mismatch")
    if ImageChops.difference(player_layer.getchannel("A"), answer_layer.getchannel("A")).getbbox():
        raise AssertionError(f"{level_id}: player/answer alpha geometry differs")

    alpha = answer_layer.getchannel("A")
    allowed = Image.new("1", (SIZE, SIZE), 0)
    allowed_pixels = allowed.load()
    alpha_pixels = alpha.load()
    for index, cat in enumerate(cats, start=1):
        cx, cy = round(cat["x"] * SIZE), round(cat["y"] * SIZE)
        radius = round(cat["size"] * SIZE * 0.9)
        crop = alpha.crop((max(0, cx-radius), max(0, cy-radius), min(SIZE, cx+radius+1), min(SIZE, cy+radius+1)))
        bounds = crop.getbbox()
        if bounds is None:
            raise AssertionError(f"{level_id}: cat {index} has no alpha geometry")
        visible_height = bounds[3] - bounds[1]
        expected_height = round(cat["size"] * SIZE)
        if abs(visible_height - expected_height) > 2:
            raise AssertionError(f"{level_id}: cat {index} rendered height {visible_height}, expected {expected_height}")
        for y in range(max(0, cy-radius), min(SIZE, cy+radius+1)):
            for x in range(max(0, cx-radius), min(SIZE, cx+radius+1)):
                allowed_pixels[x, y] = 1
    for y in range(SIZE):
        for x in range(SIZE):
            if alpha_pixels[x, y] > 16 and not allowed_pixels[x, y]:
                raise AssertionError(f"{level_id}: overlay pixels exist outside the ten cat regions")

    for variant in ("player", "answer"):
        png_path = MASTER_ROOT / f"{level_id}-{variant}.png"
        if Image.open(png_path).size != (SIZE, SIZE):
            raise AssertionError(f"{level_id}: {variant} PNG size mismatch")
    for suffix in (".webp", "-answer.webp"):
        web_path = WEB_ROOT / f"{level['file']}{suffix}"
        if not web_path.exists() or Image.open(web_path).size != (SIZE, SIZE):
            raise AssertionError(f"{level_id}: missing or invalid {web_path.name}")

    app_cats = parse_app_level(app_source, level["file"])
    if len(app_cats) != 10:
        raise AssertionError(f"{level_id}: app.js cat count is not 10")
    for index, (configured, integrated) in enumerate(zip(cats, app_cats), start=1):
        if integrated["x"] != configured["x"] or integrated["y"] != configured["y"]:
            raise AssertionError(f"{level_id}: app.js coordinates differ for cat {index}")
        if not 0.035 <= integrated["hitX"] <= 0.050 or not 0.035 <= integrated["hitY"] <= 0.050:
            raise AssertionError(f"{level_id}: app.js hit area outside 0.035-0.050")
        if integrated["clipX"] < configured["size"] / 2 or integrated["clipY"] < configured["size"] / 2:
            raise AssertionError(f"{level_id}: answer clip is smaller than the cat")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ids", nargs="*", default=[])
    args = parser.parse_args()
    levels = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    if len(levels) != 20 or sum(len(level["cats"]) for level in levels) != 200:
        raise AssertionError("configuration must contain 20 levels and 200 cats")
    if sum(not level["color"] for level in levels) != 10 or sum(level["color"] for level in levels) != 10:
        raise AssertionError("configuration must contain 10 monochrome and 10 color levels")
    app_source = APP_PATH.read_text(encoding="utf-8")
    if app_source.count('file: "tiny-') != 20:
        raise AssertionError("app.js must contain exactly 20 tiny levels")
    if '?v=tiny-cats-v2' not in app_source:
        raise AssertionError("app.js is missing the tiny image cache version")
    if 'const CONTENT_VERSION = "seventy-five-interleaved-levels-v11";' not in app_source:
        raise AssertionError("CONTENT_VERSION changed unexpectedly")
    selected = [level for level in levels if not args.ids or level["id"] in args.ids]
    for level in selected:
        validate_level(level, app_source)
        print(f"PASS {level['id']} {level['name']}: 10 cats, identical geometry, synchronized app data")
    if not args.ids:
        print("PASS ALL: 20 levels, 200 cats, 10 monochrome, 10 color, 40 WebP files")


if __name__ == "__main__":
    main()
