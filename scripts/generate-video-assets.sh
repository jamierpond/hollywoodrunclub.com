#!/bin/bash

# Generate video poster and blur placeholder from source video
# Usage: ./scripts/generate-video-assets.sh [input-video] [output-name]
# Example: ./scripts/generate-video-assets.sh public/running.webm running

set -e

INPUT="${1:-public/running.webm}"
OUTPUT_NAME="${2:-running}"
PUBLIC_DIR="public"
LIB_DIR="lib"

# Check if input file exists
if [ ! -f "$INPUT" ]; then
  echo "Error: Input file '$INPUT' not found"
  exit 1
fi

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
  echo "Error: ffmpeg is required but not installed"
  exit 1
fi

echo "Generating video assets from: $INPUT"

# Extract first frame as full-size poster (webp)
echo "1. Extracting poster image..."
ffmpeg -y -i "$INPUT" -vframes 1 -q:v 80 "$PUBLIC_DIR/${OUTPUT_NAME}-poster.webp" 2>/dev/null
echo "   Created: $PUBLIC_DIR/${OUTPUT_NAME}-poster.webp"

# Create tiny placeholder for blur-up effect (32px wide)
echo "2. Creating blur placeholder..."
ffmpeg -y -i "$INPUT" -vframes 1 -vf "scale=32:-1" -q:v 50 "$PUBLIC_DIR/${OUTPUT_NAME}-placeholder.webp" 2>/dev/null
echo "   Created: $PUBLIC_DIR/${OUTPUT_NAME}-placeholder.webp"

# Generate base64 of placeholder
echo "3. Generating base64..."
BASE64=$(base64 -i "$PUBLIC_DIR/${OUTPUT_NAME}-placeholder.webp" | tr -d '\n')

# Update constants file
CONSTANTS_FILE="$LIB_DIR/constants.ts"
echo "4. Updating $CONSTANTS_FILE..."

cat > "$CONSTANTS_FILE" << EOF
export const VIDEO_BLUR_PLACEHOLDER = 'data:image/webp;base64,$BASE64';
EOF

echo "   Updated: $CONSTANTS_FILE"

# Show file sizes
echo ""
echo "Generated assets:"
echo "  Poster:      $(du -h "$PUBLIC_DIR/${OUTPUT_NAME}-poster.webp" | cut -f1)"
echo "  Placeholder: $(du -h "$PUBLIC_DIR/${OUTPUT_NAME}-placeholder.webp" | cut -f1)"
echo "  Base64 size: $(echo -n "$BASE64" | wc -c | tr -d ' ') bytes"
echo ""
echo "Done!"
