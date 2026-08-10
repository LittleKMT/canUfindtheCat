from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image, ImageChops

SIZE = 1254
MASTER_ROOT = Path(r"E:\OneDrive\OD-2018 US\2026 vibe coding web design\9. Games\Find the Cat 圖片\AI生成圖片\next20")
CONFIG_PATH = Path(__file__).with_name("levels.json")


def validate(level: dict) -> None:
    level_id = level["id"]
    cats = level["cats"]
    if len(cats) != 10:
        raise AssertionError(f"{level_id}: configured cat count is {len(cats)}, expected 10")
    if sum(cat["kind"] in {"ears", "eyes", "peek", "tail"} for cat in cats) < 5:
        raise AssertionError(f"{level_id}: fewer than five partial cats")
    if any(not 0.015 <= cat["size"] <= 0.025 for cat in cats):
        raise AssertionError(f"{level_id}: cat size outside 1.5%-2.5%")

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
        radius = max(14, round(cat["size"] * SIZE * 0.8))
        found = 0
        for y in range(max(0, cy-radius), min(SIZE, cy+radius+1)):
            for x in range(max(0, cx-radius), min(SIZE, cx+radius+1)):
                allowed_pixels[x, y] = 1
                if alpha_pixels[x, y] > 16:
                    found += 1
        if found < 15:
            raise AssertionError(f"{level_id}: cat {index} has too few visible pixels ({found})")
    stray = 0
    for y in range(SIZE):
        for x in range(SIZE):
            if alpha_pixels[x, y] > 16 and not allowed_pixels[x, y]:
                stray += 1
    if stray:
        raise AssertionError(f"{level_id}: {stray} overlay pixels exist outside the ten cat regions")

    player = Image.open(MASTER_ROOT / f"{level_id}-player.png")
    answer = Image.open(MASTER_ROOT / f"{level_id}-answer.png")
    if player.size != (SIZE, SIZE) or answer.size != (SIZE, SIZE):
        raise AssertionError(f"{level_id}: final PNG size mismatch")
    print(f"PASS {level_id} {level['name']}: 10 cats, identical geometry, {sum(cat['kind'] in {'ears','eyes','peek','tail'} for cat in cats)} partial")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ids", nargs="*", default=[])
    args = parser.parse_args()
    levels = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    selected = [level for level in levels if not args.ids or level["id"] in args.ids]
    for level in selected:
        validate(level)


if __name__ == "__main__":
    main()
