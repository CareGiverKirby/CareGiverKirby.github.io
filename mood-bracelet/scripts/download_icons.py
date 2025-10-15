import os
import requests
import shutil
from pathlib import Path

# Base URLs for icon sources
OPENMOJI_BASE = "https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg"

# Icon definitions with their sources
ICONS = {
    # OpenMoji Icons - Basic Faces & Emotions
    "angry": f"{OPENMOJI_BASE}/1F620.svg",  # Angry face
    "crying": f"{OPENMOJI_BASE}/1F622.svg",  # Crying face
    "sick": f"{OPENMOJI_BASE}/1F912.svg",  # Face with thermometer
    "sleeping": f"{OPENMOJI_BASE}/1F634.svg",  # Sleeping face
    "silly": f"{OPENMOJI_BASE}/1F61B.svg",  # Face with tongue
    "wink": f"{OPENMOJI_BASE}/1F609.svg",  # Winking face
    "devil": f"{OPENMOJI_BASE}/1F47F.svg",  # Smiling face with horns
    "smiling-devil": f"{OPENMOJI_BASE}/1F608.svg",  # Smiling face with horns (alternative)
    "kiss": f"{OPENMOJI_BASE}/1F618.svg",  # Face blowing kiss
    "cold-face": f"{OPENMOJI_BASE}/1F976.svg",  # Cold face
    "hot-face": f"{OPENMOJI_BASE}/1F975.svg",  # Hot face
    
    # OpenMoji Icons - People & Identity
    "man": f"{OPENMOJI_BASE}/1F468.svg",  # Man
    "girl": f"{OPENMOJI_BASE}/1F467.svg",  # Girl
    "baby": f"{OPENMOJI_BASE}/1F476.svg",  # Baby
    "crown": f"{OPENMOJI_BASE}/1F451.svg",  # Crown
    "people-side": f"{OPENMOJI_BASE}/1F46C.svg",  # People side by side
    "holding-hands": f"{OPENMOJI_BASE}/1F9D1-200D-1F91D-200D-1F9D1.svg",  # People holding hands
    
    # OpenMoji Icons - Objects & Actions
    "bowl": f"{OPENMOJI_BASE}/1F963.svg",  # Bowl with food
    "necktie": f"{OPENMOJI_BASE}/1F454.svg",  # Necktie
    "prohibited": f"{OPENMOJI_BASE}/1F6AB.svg",  # Prohibited sign
    "shushing": f"{OPENMOJI_BASE}/1F92B.svg",  # Shushing face
    "video-game": f"{OPENMOJI_BASE}/1F3AE.svg",  # Video game
    "books": f"{OPENMOJI_BASE}/1F4DA.svg",  # Stack of books
    "art": f"{OPENMOJI_BASE}/1F3A8.svg",  # Artist palette
    "bandage": f"{OPENMOJI_BASE}/1FA79.svg",  # Adhesive bandage
    "boxing": f"{OPENMOJI_BASE}/1F94A.svg",  # Boxing glove
    "nurse": f"{OPENMOJI_BASE}/1F46E-200D-2640-FE0F.svg",  # Nurse
    "meditation": f"{OPENMOJI_BASE}/1F9D8.svg",  # Person in lotus position
    "running": f"{OPENMOJI_BASE}/1F3C3.svg",  # Person running
    "blanket": f"{OPENMOJI_BASE}/1F9C1.svg",  # Cozy blanket
    "shower": f"{OPENMOJI_BASE}/1F6BF.svg",  # Shower
    "phone": f"{OPENMOJI_BASE}/1F4F1.svg",  # Mobile phone
    "laptop": f"{OPENMOJI_BASE}/1F4BB.svg",  # Laptop computer
    "candy": f"{OPENMOJI_BASE}/1F36C.svg",  # Candy
    
    # OpenMoji Icons - Decorative & Effects
    "hearts": f"{OPENMOJI_BASE}/1F970.svg",  # Face with hearts
    "fire": f"{OPENMOJI_BASE}/1F525.svg",  # Fire
    "speech": f"{OPENMOJI_BASE}/1F4AC.svg",  # Speech bubble
    "sparkles": f"{OPENMOJI_BASE}/2728.svg",  # Sparkles
    "steam": f"{OPENMOJI_BASE}/1F4A8.svg",  # Steam
    "sparkling-heart": f"{OPENMOJI_BASE}/1F496.svg",  # Sparkling heart
    "broken-heart": f"{OPENMOJI_BASE}/1F494.svg",  # Broken heart
    "face-with-bandage": f"{OPENMOJI_BASE}/1F915.svg",  # Face with head-bandage
    "hugging": f"{OPENMOJI_BASE}/1F917.svg"  # Hugging face
}

def download_icon(url, filename):
    """Download an icon from the given URL and save it to the specified filename."""
    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                response.raw.decode_content = True
                shutil.copyfileobj(response.raw, f)
            return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return False

def main():
    # Create directories if they don't exist
    base_dir = Path("images/charms")
    base_dir.mkdir(parents=True, exist_ok=True)
    
    # Download all icons
    for name, url in ICONS.items():
        filename = base_dir / f"openmoji-{name}.svg"
            
        if download_icon(url, filename):
            print(f"Downloaded {name} to {filename}")
        else:
            print(f"Failed to download {name}")

if __name__ == "__main__":
    main()