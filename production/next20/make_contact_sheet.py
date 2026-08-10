from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw

MASTER_ROOT = Path(r"E:\OneDrive\OD-2018 US\2026 vibe coding web design\9. Games\Find the Cat 圖片\AI生成圖片\next20")
OUT_ROOT = Path(__file__).with_name("contact-sheets")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ids", nargs=5, required=True)
    args = parser.parse_args()
    thumb = 300
    header = 28
    sheet = Image.new("RGB", (thumb * 5, (thumb + header) * 2), "white")
    draw = ImageDraw.Draw(sheet)
    for column, level_id in enumerate(args.ids):
        for row, variant in enumerate(("player", "answer")):
            image = Image.open(MASTER_ROOT / f"{level_id}-{variant}.png").convert("RGB")
            image.thumbnail((thumb, thumb), Image.Resampling.LANCZOS)
            top = row * (thumb + header) + header
            sheet.paste(image, (column * thumb, top))
            draw.text((column * thumb + 8, row * (thumb + header) + 7), f"{level_id} {variant}", fill="black")
    OUT_ROOT.mkdir(exist_ok=True)
    output = OUT_ROOT / f"{args.ids[0]}-{args.ids[-1]}.jpg"
    sheet.save(output, "JPEG", quality=92)
    print(output)


if __name__ == "__main__":
    main()
