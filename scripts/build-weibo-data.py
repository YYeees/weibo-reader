#!/usr/bin/env python3
"""Convert 1757165701 export JSON into data/weibo-YYYY.json for the reader page."""

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "1757165701"
SRC_JSON = SRC_DIR / "1757165701.json"
IMG_DIR = SRC_DIR / "img"
OUT_DIR = ROOT / "data"
IMG_PREFIX = "1757165701/img"


def ts_key(dt: str) -> str:
    return dt.replace(":", "-").replace(" ", "_")


def build_img_index(img_dir: Path) -> dict[str, list[Path]]:
    by_prefix: dict[str, list[Path]] = defaultdict(list)
    if not img_dir.is_dir():
        return by_prefix
    for f in img_dir.iterdir():
        if not f.is_file():
            continue
        stem = f.stem
        m = re.match(r"(.+)_\d+$", stem)
        prefix = m.group(1) if m else stem
        by_prefix[prefix].append(f)
    for files in by_prefix.values():
        files.sort(key=lambda p: p.name)
    return by_prefix


def resolve_images(dt: str, img_index: dict[str, list[Path]]) -> list[str]:
    prefix = ts_key(dt)
    files = img_index.get(prefix, [])
    if not files:
        for ext in ("webp", "gif", "jpg", "jpeg", "png"):
            p = IMG_DIR / f"{prefix}.{ext}"
            if p.exists():
                files = [p]
                break
    return [f"{IMG_PREFIX}/{f.name}" for f in files]


def convert_post(w: dict, img_index: dict[str, list[Path]]) -> dict:
    dt = w["full_created_at"]
    post = {
        "id": str(w["id"]),
        "dt": dt,
        "ym": dt[:7],
        "text": w.get("text", "").strip(),
        "images": resolve_images(dt, img_index),
        "links": w.get("links") or [],
        "repost": None,
        "a": w.get("attitudes_count", 0),
        "c": w.get("comments_count", 0),
        "r": w.get("reposts_count", 0),
        "source": w.get("source") or "",
    }
    rt = w.get("retweet")
    if rt:
        post["repost"] = {
            "text": rt.get("text", "").strip(),
            "images": resolve_images(rt["full_created_at"], img_index),
            "links": rt.get("links") or [],
        }
    return post


def main() -> int:
    if not SRC_JSON.is_file():
        print(f"Missing source: {SRC_JSON}", file=sys.stderr)
        return 1

    src = json.loads(SRC_JSON.read_text(encoding="utf-8"))
    user = src["user"]
    img_index = build_img_index(IMG_DIR)

    posts = [convert_post(w, img_index) for w in src["weibo"]]
    posts.sort(key=lambda p: p["dt"])

    months = sorted({p["ym"] for p in posts})
    year = int(months[0].split("-")[0]) if months else 2019

    avatar = f"{IMG_PREFIX}/avatar.webp"
    if not (IMG_DIR / "avatar.webp").is_file():
        avatar = user.get("avatar_hd") or user.get("profile_image_url") or ""

    out = {
        "user": {
            "screen_name": user.get("screen_name", ""),
            "description": user.get("description", ""),
            "avatar": avatar,
            "followers_count": user.get("followers_count", 0),
            "follow_count": user.get("follow_count", 0),
            "statuses_count": user.get("statuses_count", 0),
        },
        "year": year,
        "months": months,
        "posts": posts,
    }

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"weibo-{year}.json"
    out_path.write_text(
        json.dumps(out, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )

    with_img = sum(1 for p in posts if p["images"] or (p["repost"] and p["repost"]["images"]))
    print(f"Wrote {out_path}")
    print(f"  posts: {len(posts)}, months: {len(months)}, with images: {with_img}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
