# CV Build Scripts

This directory contains scripts to automate CV building and conversion processes.

## Overview

Instead of manually converting PDFs to PNGs every time you update your CV, these scripts automate the entire workflow:

1. **Build LaTeX CVs** → Generate PDF files
2. **Convert to PNG** → Create web-optimized images
3. **Ready to deploy** → Images are automatically placed in the correct directory

## Files

- `build_cv.sh` - Main build script that runs the complete pipeline
- `convert_cv_to_png.py` - Python script that converts PDFs to PNG images
- `README.md` - This file

## Quick Start

### Option 1: Build Everything (Recommended)

```bash
# From project root
./scripts/build_cv.sh
```

This will:
- Build both `CV_long.pdf` and `CV_short.pdf` from LaTeX sources
- Convert all PDFs to PNG images
- Place images in the `images/resume/` directory

### Option 2: Convert Only

If you only want to convert existing PDFs to PNG:

```bash
python3 scripts/convert_cv_to_png.py
```

### Option 3: Manual LaTeX Build

If you prefer to build LaTeX manually:

```bash
cd latex/
pdflatex CV_long.tex
pdflatex CV_short.tex
```

Then convert to PNG:

```bash
python3 scripts/convert_cv_to_png.py
```

## Requirements

### For LaTeX Building

```bash
sudo apt-get install texlive-latex-base texlive-latex-extra texlive-fonts-recommended texlive-fonts-extra
```

### For PDF to PNG Conversion

```bash
sudo apt-get install poppler-utils
```

## Configuration

### Changing Output Filenames

Edit `convert_cv_to_png.py` and modify the `CV_FILES` dictionary:

```python
CV_FILES = {
    "CV_short.pdf": "concise",
    "CV_long.pdf": "full"
}
```

### Changing Image Quality

Edit the `DPI` variable in `convert_cv_to_png.py`:

```python
DPI = 300  # Higher = better quality but larger file size
```

## Workflow

### Typical Update Process

1. Edit your CV in `latex/CV_short.tex` or `latex/CV_long.tex`
2. Run the build script:
   ```bash
   ./scripts/build_cv.sh
   ```
3. Review generated images in `images/resume/` directory
4. Commit and push changes:
   ```bash
   git add latex/ images/resume/
   git commit -m "Update CV"
   git push
   ```

### Adding to Git Hooks (Optional)

You can automate this further by adding a pre-commit hook:

```bash
# .git/hooks/pre-commit
#!/bin/bash
if git diff --cached --name-only | grep -q "latex/CV_"; then
    ./scripts/build_cv.sh
    git add images/resume/*.png
fi
```

## Generated Files

### PDFs (in `latex/` directory)
- `CV_long.pdf` - Full CV (3 pages)
- `CV_short.pdf` - Concise CV (2 pages)

### PNGs (in `images/resume/` directory)
- `concise-1.png`
- `concise-2.png`
- `full-1.png`
- `full-2.png`
- `full-3.png`

## Troubleshooting

### LaTeX Build Fails

**Issue**: Missing LaTeX packages

**Solution**: Install additional packages:
```bash
sudo apt-get install texlive-full
```

### PDF Conversion Fails

**Issue**: `pdftoppm` not found

**Solution**: Install poppler-utils:
```bash
sudo apt-get install poppler-utils
```

### Images Not Updating on Website

**Issue**: Browser cache

**Solution**:
- Hard refresh your browser (Ctrl+Shift+R)
- Or append a version parameter to image URLs in HTML

## Tips

1. **Version Control**: Commit both PDFs and PNGs to track changes over time
2. **Naming Convention**: Use year in filename (e.g., `2026`) to make it easy to update annually
3. **Image Optimization**: If PNGs are too large, consider using `optipng` or `pngquant` to compress them
4. **Automation**: Set up GitHub Actions to auto-build when LaTeX files change

## Example GitHub Actions Workflow

Create `.github/workflows/build-cv.yml`:

```yaml
name: Build CV

on:
  push:
    paths:
      - 'latex/CV_*.tex'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: |
          sudo apt-get update
          sudo apt-get install -y texlive-latex-base texlive-latex-extra texlive-fonts-recommended texlive-fonts-extra poppler-utils
      - name: Build CV
        run: ./scripts/build_cv.sh
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add images/resume/*.png latex/*.pdf
          git commit -m "Auto-update CV images" || echo "No changes"
          git push
```

## License

Same as the main project.
