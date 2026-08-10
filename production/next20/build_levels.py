from __future__ import annotations

import argparse
import json
from pathlib import Path
from statistics import median

from PIL import Image, ImageDraw, ImageOps

SIZE = 1254
MASTER_ROOT = Path(r"E:\OneDrive\OD-2018 US\2026 vibe coding web design\9. Games\Find the Cat 圖片\AI生成圖片\next20")
WEB_ROOT = Path(r"E:\OneDrive\OD-2018 US\2026 vibe coding web design\9. Games\canUfindtheCat\assets\levels")
CONFIG_PATH = Path(__file__).with_name("levels.json")


def local_color(background: Image.Image, x: float, y: float, color_scene: bool) -> tuple[tuple[int, int, int], tuple[int, int, int]]:
    cx, cy = round(x * SIZE), round(y * SIZE)
    radius = 12
    crop = background.crop((max(0, cx-radius), max(0, cy-radius), min(SIZE, cx+radius), min(SIZE, cy+radius))).convert("RGB")
    pixels = list(crop.getdata())
    med = tuple(round(median(channel)) for channel in zip(*pixels))
    if color_scene:
        fill = med
        outline = tuple(max(10, min(235, round(v * 0.72))) for v in med)
    else:
        lum = round(sum(med) / 3)
        fill_lum = max(25, min(230, lum))
        line_lum = max(20, min(225, lum - 38 if lum > 125 else lum + 38))
        fill = (fill_lum,) * 3
        outline = (line_lum,) * 3
    return fill, outline


def cat_sprite(kind: str, fill: tuple[int, int, int], outline: tuple[int, int, int], flip: bool) -> Image.Image:
    scale = 4
    canvas = Image.new("RGBA", (256, 256), (0, 0, 0, 0))
    d = ImageDraw.Draw(canvas)
    F = fill + (235,)
    O = outline + (255,)
    w = 12

    def poly(points, color=F): d.polygon([(a*scale, b*scale) for a,b in points], fill=color)
    def ellipse(box, color=F, width=w):
        box = tuple(v*scale for v in box)
        d.ellipse(box, fill=color, outline=O, width=width)
    def line(points, color=O, width=w): d.line([(a*scale,b*scale) for a,b in points], fill=color, width=width, joint="curve")

    if kind in {"face", "peek", "eyes", "ears"}:
        poly([(16,30),(24,5),(34,26)])
        poly([(40,26),(52,5),(59,31)])
        if kind != "ears":
            ellipse((15,20,59,60))
            if kind != "eyes":
                d.ellipse((23*scale,35*scale,29*scale,42*scale), fill=O)
                d.ellipse((43*scale,35*scale,49*scale,42*scale), fill=O)
                poly([(33,44),(40,44),(36.5,50)], O)
                line([(36,49),(36,55)], width=8)
                line([(22,47),(7,44)], width=7); line([(22,52),(6,55)], width=7)
                line([(51,47),(64,43)], width=7); line([(51,52),(65,55)], width=7)
            else:
                d.ellipse((22*scale,34*scale,30*scale,43*scale), fill=O)
                d.ellipse((42*scale,34*scale,50*scale,43*scale), fill=O)
        if kind == "peek":
            d.rectangle((10*scale,49*scale,63*scale,66*scale), fill=(0,0,0,0))
    elif kind == "tail":
        ellipse((13,39,43,61))
        line([(38,50),(54,44),(58,30),(51,18),(44,24)], width=13)
        poly([(13,43),(8,22),(22,39)])
    elif kind == "side":
        ellipse((13,34,50,58)); ellipse((43,26,61,45))
        poly([(45,29),(48,17),(53,27)]); poly([(54,27),(59,17),(61,31)])
        d.ellipse((51*scale,31*scale,56*scale,36*scale), fill=O)
        line([(15,45),(5,35),(8,24)], width=10)
        line([(23,56),(21,63)], width=8); line([(43,55),(46,63)], width=8)
    else:  # sit
        ellipse((19,28,47,55)); ellipse((26,8,50,31))
        poly([(28,12),(32,1),(36,12)]); poly([(42,12),(48,1),(49,16)])
        d.ellipse((32*scale,18*scale,37*scale,23*scale), fill=O)
        d.ellipse((42*scale,18*scale,47*scale,23*scale), fill=O)
        line([(20,47),(11,39),(9,27)], width=10)
        line([(29,53),(25,63)], width=8); line([(40,53),(44,63)], width=8)
    if flip:
        canvas = ImageOps.mirror(canvas)
    return canvas


def build_level(level: dict) -> None:
    level_id = level["id"]
    background_path = MASTER_ROOT / f"{level_id}-background.png"
    background = Image.open(background_path).convert("RGB").resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    player_layer = Image.new("RGBA", (SIZE, SIZE), (0,0,0,0))
    answer_layer = Image.new("RGBA", (SIZE, SIZE), (0,0,0,0))

    for cat in level["cats"]:
        fill, outline = local_color(background, cat["x"], cat["y"], level["color"])
        player = cat_sprite(cat["kind"], fill, outline, cat["flip"])
        answer = cat_sprite(cat["kind"], (235,116,24), (104,48,9), cat["flip"])
        target_h = max(19, round(SIZE * cat["size"]))
        target_w = target_h
        player = player.resize((target_w, target_h), Image.Resampling.LANCZOS)
        answer = answer.resize((target_w, target_h), Image.Resampling.LANCZOS)
        left = round(cat["x"] * SIZE - target_w/2)
        top = round(cat["y"] * SIZE - target_h/2)
        player_layer.alpha_composite(player, (left, top))
        answer_layer.alpha_composite(answer, (left, top))

    player_image = Image.alpha_composite(background.convert("RGBA"), player_layer).convert("RGB")
    answer_image = Image.alpha_composite(background.convert("RGBA"), answer_layer).convert("RGB")

    player_layer.save(MASTER_ROOT / f"{level_id}-cats-player.png")
    answer_layer.save(MASTER_ROOT / f"{level_id}-cats-answer.png")
    player_image.save(MASTER_ROOT / f"{level_id}-player.png")
    answer_image.save(MASTER_ROOT / f"{level_id}-answer.png")
    player_image.save(WEB_ROOT / f"{level['file']}.webp", "WEBP", quality=86, method=6)
    answer_image.save(WEB_ROOT / f"{level['file']}-answer.webp", "WEBP", quality=86, method=6)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ids", nargs="*", default=[])
    args = parser.parse_args()
    levels = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    selected = [level for level in levels if not args.ids or level["id"] in args.ids]
    for level in selected:
        if len(level["cats"]) != 10:
            raise ValueError(f"{level['id']} must contain exactly 10 cats")
        build_level(level)
        print(f"built {level['id']} {level['name']} with 10 cats")


if __name__ == "__main__":
    main()
