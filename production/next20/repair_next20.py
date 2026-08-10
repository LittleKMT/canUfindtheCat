from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONFIG_PATH = Path(__file__).with_name("levels.json")
APP_PATH = ROOT / "app.js"

SIZES = {
    "ears": 0.048,
    "eyes": 0.050,
    "peek": 0.050,
    "face": 0.055,
    "tail": 0.055,
    "side": 0.060,
    "sit": 0.060,
}


def js_number(value: float) -> str:
    return f"{value:.3f}".replace("0.", ".")


def update_sizes(levels: list[dict]) -> None:
    for level in levels:
        for cat in level["cats"]:
            cat["size"] = SIZES[cat["kind"]]
    CONFIG_PATH.write_text(json.dumps(levels, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def app_block(level: dict) -> str:
    color_flag = ", isColor: true" if level["color"] else ""
    cats = []
    for cat in level["cats"]:
        hit = max(0.035, min(0.050, cat["size"] / 2 + 0.010))
        clip = max(0.035, cat["size"] * 0.75)
        cats.append(
            "{" + ",".join([
                f"x:{js_number(cat['x'])}",
                f"y:{js_number(cat['y'])}",
                f"hitX:{js_number(hit)}",
                f"hitY:{js_number(hit)}",
                f"clipX:{js_number(clip)}",
                f"clipY:{js_number(clip)}",
            ]) + "}"
        )
    return (
        f',{{ file: "{level["file"]}", name: "{level["name"]}"{color_flag}, cats: [\n'
        f"    {','.join(cats)}] }}"
    )


def sync_app(levels: list[dict]) -> None:
    source = APP_PATH.read_text(encoding="utf-8")
    for level in levels:
        pattern = re.compile(
            rf',\{{ file: "{re.escape(level["file"])}".*?\n\s*.*?\]\s*\}}',
            re.DOTALL,
        )
        source, count = pattern.subn(app_block(level), source, count=1)
        if count != 1:
            raise RuntimeError(f"could not uniquely replace {level['file']} in app.js")

    old_mapping = '].map(level => ({ ...level, image: `assets/levels/${level.file}.webp`, answer: `assets/levels/${level.file}-answer.webp` }));'
    new_mapping = """].map(level => {
  const imageVersion = level.file.startsWith("tiny-") ? "?v=tiny-cats-v2" : "";
  return { ...level, image: `assets/levels/${level.file}.webp${imageVersion}`, answer: `assets/levels/${level.file}-answer.webp${imageVersion}` };
});"""
    if old_mapping in source:
        source = source.replace(old_mapping, new_mapping, 1)
    elif "?v=tiny-cats-v2" not in source:
        raise RuntimeError("could not add the tiny image cache version")
    APP_PATH.write_text(source, encoding="utf-8")


def main() -> None:
    levels = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    update_sizes(levels)
    sync_app(levels)
    print("updated 200 sizes and synchronized 20 app.js level records")


if __name__ == "__main__":
    main()
