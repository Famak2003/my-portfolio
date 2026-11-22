"""
Turn raw screenshots in data/project-ss/ (gitignored) into web-ready WebP files in public/projects/.

- Blurs other people's names and photos (regions are in original-pixel coordinates).
- Crops the browser bar (tabs, URL, bookmarks) off desktop screenshots.
- Resizes: phones to 645px wide, desktop shots to 1600px wide.

Run from the repo root:  python3 scripts/process-screenshots.py
"""
import os
from PIL import Image, ImageFilter

SRC = "data/project-ss"
OUT = "public/projects"

BROWSER_BAR = 82  # px of browser chrome at the top of the NEU Link web screenshots
# NEU Link web content sits between x≈646 and x≈1910 of the 2560px-wide captures.

# (source file, output path, kind, blur boxes, crop box or None)
JOBS = [
    # --- NEU Link mobile ---
    ("NEULink-app-dark-22.PNG", "neu-link/app-home-dark", "phone", [], None),
    ("NEULink-app-dark-13.PNG", "neu-link/app-bus-route-dark", "phone", [], None),
    ("NEULink-app-light-6.PNG", "neu-link/app-bus-schedule-light", "phone", [], None),
    ("NEULink-app-dark-12.PNG", "neu-link/app-facilities-dark", "phone", [], None),
    ("NEULink-app-light-8.PNG", "neu-link/app-reservations-light", "phone", [], None),
    ("NEULink-app-dark-10.PNG", "neu-link/app-access-dark", "phone", [], None),
    ("NEULink-app-dark-6.PNG", "neu-link/app-stats-dark", "phone", [], None),
    ("NEULink-app-light-4.PNG", "neu-link/app-map-light", "phone", [], None),
    ("NEULink-app-dark-17.PNG", "neu-link/app-directory-dark", "phone", [(60, 344, 1230, 2796)], None),
    # --- NEU Link web ---
    ("NEULink-web-1.png", "neu-link/web-home", "desktop",
        [(1148, 806, 1910, 1140), (1288, 396, 1576, 540), (714, 918, 746, 946)], "bar"),
    ("NEULink-web-2.png", "neu-link/web-directory", "desktop",
        [(952, 190, 1910, 980), (952, 1050, 1910, 1395), (710, 912, 750, 944)], "bar"),
    ("NEULink-web-3.png", "neu-link/web-map-buses", "desktop", [], "bar"),
    ("NEULink-web-4.png", "neu-link/web-map-facilities", "desktop", [], "bar"),
    ("NEULink-web-5.png", "neu-link/web-stats", "desktop", [], "bar"),
    ("NEULink-web-6.png", "neu-link/web-facilities", "desktop", [], "bar"),
    # --- Punica ---
    ("punica-1.png", "punica/dashboard-overview", "desktop", [], (0, 0, None, 860)),
    ("punica-3.png", "punica/dashboard-tasks", "desktop", [], (0, 0, None, 860)),
    ("punica-landing-1.png", "punica/landing-hero", "desktop", [], None),
    ("punica-landing-2.png", "punica/landing-products", "desktop", [], None),
    ("punica-landing-3.png", "punica/landing-modules", "desktop", [], None),
    ("Screenshot 2026-11-22 at 16.36.52.png", "punica/landing-faq", "desktop", [], None),
]


def blur(im, box):
    region = im.crop(box)
    # Pixelate first, then blur: text becomes unreadable but the layout still shows.
    w, h = region.size
    region = region.resize((max(1, w // 24), max(1, h // 24)), Image.BILINEAR).resize((w, h), Image.BILINEAR)
    region = region.filter(ImageFilter.GaussianBlur(18))
    im.paste(region, box)


def main():
    for src, dest, kind, boxes, crop in JOBS:
        im = Image.open(os.path.join(SRC, src)).convert("RGB")
        for box in boxes:
            blur(im, box)
        if crop == "bar":
            # Drop the browser bar, and the empty side margins around NEU Link's centred layout.
            im = im.crop((600, BROWSER_BAR, min(im.width, 1956), im.height))
        elif crop:
            l, t, r, b = crop
            im = im.crop((l, t, r or im.width, b or im.height))
        target_w = 645 if kind == "phone" else 1600
        if im.width > target_w:
            im = im.resize((target_w, round(im.height * target_w / im.width)), Image.LANCZOS)
        path = os.path.join(OUT, dest + ".webp")
        os.makedirs(os.path.dirname(path), exist_ok=True)
        im.save(path, "WEBP", quality=82, method=6)
        print(f"{path}  {im.width}x{im.height}  {os.path.getsize(path) // 1024}KB")


if __name__ == "__main__":
    main()
