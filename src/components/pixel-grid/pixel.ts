
type PixelInput = {
    row: number;
    col: number;
    totalRows: number;
    totalCols: number;
    screenX: number;
    screenWidth: number;
    alignment: 'left' | 'right';
    emptyRatio: number;
    colors: readonly string[];
};

// --------------------------------------------------------------------------------

export function createPixelPattern(input: PixelInput): string | null {
    const normalizedX = input.col / (input.totalCols - 1);
    const normalizedY = input.row / (input.totalRows - 1);
    const normalizedScreenX = input.screenX / input.screenWidth;

    const isEmpty = shouldPixelBeEmpty(
        normalizedX,
        normalizedScreenX,
        normalizedY,
        input.alignment,
        input.emptyRatio
    );

    return isEmpty ? null : getRandomColor(input.colors);
}

// --------------------------------------------------------------------------------

function shouldPixelBeEmpty(
    _normalizedX: number, // Container position (unused, kept for future use)
    normalizedScreenX: number,
    _normalizedY: number, // Not used in simple split
    alignment: 'left' | 'right',
    _emptyRatio: number // Not used in simple split
): boolean {
    // 60/40 split - pixels appear on opposite side of alignment with more coverage
    const splitPoint = 0.45; // 40% threshold means 60% coverage on the opposite side
    
    if (alignment === 'right') {
        // For right alignment: show pixels on the LEFT 60% (inverted)
        return normalizedScreenX > splitPoint;
    } else {
        // For left alignment: show pixels on the RIGHT 60% (inverted)
        return normalizedScreenX < splitPoint;
    }
}

function getRandomColor(colors: readonly string[]): string {
    return colors[Math.floor(Math.random() * colors.length)];
}