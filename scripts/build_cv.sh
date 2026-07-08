#!/bin/bash
#
# Build CV Script
# Automatically builds CV PDFs from LaTeX and converts them to PNG images
#
# Usage:
#   ./scripts/build_cv.sh
#

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  CV Build & Convert Pipeline${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LATEX_DIR="$PROJECT_ROOT/latex"

# Check if pdflatex is installed
if ! command -v pdflatex &> /dev/null; then
    echo -e "${RED}❌ Error: pdflatex not found${NC}"
    echo "Please install TeX Live:"
    echo "  sudo apt-get install texlive-latex-base texlive-latex-extra texlive-fonts-recommended texlive-fonts-extra"
    exit 1
fi

# Check if pdftoppm is installed
if ! command -v pdftoppm &> /dev/null; then
    echo -e "${RED}❌ Error: pdftoppm not found${NC}"
    echo "Please install poppler-utils:"
    echo "  sudo apt-get install poppler-utils"
    exit 1
fi

# Step 1: Build LaTeX PDFs
echo -e "\n${GREEN}[1/2] Building LaTeX PDFs...${NC}"
cd "$LATEX_DIR"

for tex_file in CV_long.tex CV_short.tex; do
    if [ -f "$tex_file" ]; then
        echo "  📄 Building $tex_file..."
        pdflatex -interaction=nonstopmode "$tex_file" > /dev/null 2>&1

        if [ $? -eq 0 ]; then
            echo -e "  ${GREEN}✓${NC} ${tex_file%.tex}.pdf generated"
        else
            echo -e "  ${RED}✗${NC} Failed to build $tex_file"
            exit 1
        fi
    fi
done

# Clean up auxiliary files
echo "  🧹 Cleaning up auxiliary files..."
rm -f *.aux *.log *.out *.toc *.lof *.lot *.fls *.fdb_latexmk *.synctex.gz

# Step 2: Convert PDFs to PNGs
echo -e "\n${GREEN}[2/2] Converting PDFs to PNG images...${NC}"
cd "$PROJECT_ROOT"
python3 "$SCRIPT_DIR/convert_cv_to_png.py"

echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ All done!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "📁 Generated files:"
echo "   - latex/CV_long.pdf"
echo "   - latex/CV_short.pdf"
echo "   - images/DoTriNhan_Resume_Concise_2026-*.png"
echo "   - images/DoTriNhan_Resume_Full_2026-*.png"
echo ""
echo "💡 Next steps:"
echo "   - Review the generated PDFs and images"
echo "   - Push changes to git if everything looks good"
echo ""
