#!/usr/bin/env python3
"""
Script to automatically convert CV PDFs to PNG images for website display.
This eliminates the need to manually convert PDFs each time the CV is updated.

Usage:
    python3 scripts/convert_cv_to_png.py

Or make it executable and run directly:
    chmod +x scripts/convert_cv_to_png.py
    ./scripts/convert_cv_to_png.py
"""

import subprocess
import os
from pathlib import Path
import sys

# Configuration
PROJECT_ROOT = Path(__file__).parent.parent
LATEX_DIR = PROJECT_ROOT / "latex"
IMAGES_DIR = PROJECT_ROOT / "images"
DPI = 300  # High quality for web display

# CV files to process
CV_FILES = {
    "CV_short.pdf": "DoTriNhan_Resume_Concise_2026",
    "CV_long.pdf": "DoTriNhan_Resume_Full_2026"
}

def convert_pdf_to_png(pdf_path, output_prefix, dpi=300):
    """
    Convert a PDF file to PNG images (one per page).

    Args:
        pdf_path: Path to the PDF file
        output_prefix: Prefix for output PNG files
        dpi: Resolution for the output images

    Returns:
        List of generated PNG file paths
    """
    if not pdf_path.exists():
        print(f"❌ Error: PDF file not found: {pdf_path}")
        return []

    # Create temporary output directory
    temp_dir = IMAGES_DIR / "temp_cv"
    temp_dir.mkdir(parents=True, exist_ok=True)

    # Convert PDF to PNG using pdftoppm
    print(f"📄 Converting {pdf_path.name}...")
    try:
        subprocess.run([
            "pdftoppm",
            "-png",
            "-r", str(dpi),
            str(pdf_path),
            str(temp_dir / "page")
        ], check=True, capture_output=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Error converting PDF: {e.stderr.decode()}")
        return []

    # Rename files to the desired format
    generated_files = []
    png_files = sorted(temp_dir.glob("page-*.png"))

    for i, png_file in enumerate(png_files, start=1):
        new_name = f"{output_prefix}-{i}.png"
        new_path = IMAGES_DIR / new_name

        # Move and rename
        png_file.rename(new_path)
        generated_files.append(new_path)
        print(f"  ✓ Generated: {new_name}")

    # Clean up temp directory
    temp_dir.rmdir()

    return generated_files

def check_dependencies():
    """Check if required tools are installed."""
    try:
        subprocess.run(["pdftoppm", "-v"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        print("❌ Error: pdftoppm not found. Please install poppler-utils:")
        print("   sudo apt-get install poppler-utils")
        return False

def main():
    print("🔧 CV PDF to PNG Converter")
    print("=" * 50)

    # Check dependencies
    if not check_dependencies():
        sys.exit(1)

    # Ensure directories exist
    LATEX_DIR.mkdir(parents=True, exist_ok=True)
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)

    # Convert each CV file
    total_files = 0
    for pdf_name, output_prefix in CV_FILES.items():
        pdf_path = LATEX_DIR / pdf_name
        files = convert_pdf_to_png(pdf_path, output_prefix, dpi=DPI)
        total_files += len(files)

    print("=" * 50)
    print(f"✅ Done! Generated {total_files} PNG file(s)")
    print(f"📁 Output directory: {IMAGES_DIR}")
    print("\n💡 Tip: You can add this script to your build process!")

if __name__ == "__main__":
    main()
