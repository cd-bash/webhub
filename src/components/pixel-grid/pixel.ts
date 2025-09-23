
type PixelInput = {
    row: number;
    col: number;
    totalRows: number;
    totalCols: number;
    screenX: number;
    screenWidth: number;
    alignment: 'left' | 'right' | 'full';
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
        input.emptyRatio,
        input.col,
        input.totalCols
    );

    return isEmpty ? null : getRandomColor(input.colors);
}

// --------------------------------------------------------------------------------

function shouldPixelBeEmpty(
    _normalizedX: number, // Container position (unused, kept for future use)
    normalizedScreenX: number,
    _normalizedY: number, // Not used in this implementation
    alignment: 'left' | 'right' | 'full',
    _emptyRatio: number, // Not used in simple split
    col: number,
    totalCols: number
): boolean {
    // For 'full' alignment, stretch the grid to 100% with no empty zones
    if (alignment === 'full') {
        return false; // Show all pixels across the entire grid
    }
    
    // 60/40 split - pixels appear on opposite side of alignment with more coverage
    const splitPoint = 0.45; // 40% threshold means 60% coverage on the opposite side
    
    let shouldHideBasedOnAlignment = false;
    
    if (alignment === 'right') {
        // For right alignment: show pixels on the LEFT 60% (inverted)
        shouldHideBasedOnAlignment = normalizedScreenX > splitPoint;
    } else {
        // For left alignment: show pixels on the RIGHT 60% (inverted)
        shouldHideBasedOnAlignment = normalizedScreenX < splitPoint;
    }
    
    // If already hidden by alignment, return true
    if (shouldHideBasedOnAlignment) {
        return true;
    }
    
    // Apply random hiding to only the last column of the visible area
    const splitCol = Math.floor(totalCols * splitPoint); // Column where the split happens
    let shouldApplyRandomHiding = false;
    
    if (alignment === 'right') {
        // For right alignment: pixels show on LEFT side (cols 0 to splitCol)
        // Target only the last visible column (rightmost edge of visible area)
        const isLastVisibleColumn = col === splitCol;
        shouldApplyRandomHiding = isLastVisibleColumn;
    } else {
        // For left alignment: pixels show on RIGHT side (cols splitCol to totalCols)
        // Target only the first visible column (leftmost edge of visible area)
        const isFirstVisibleColumn = col === splitCol + 1;
        shouldApplyRandomHiding = isFirstVisibleColumn;
    }
    
    if (shouldApplyRandomHiding) {
        return Math.random() < 0.50; // 40% chance for random gaps in the target column
    }
    
    return false; // All other visible pixels are shown
}

function getRandomColor(colors: readonly string[]): string {
    return colors[Math.floor(Math.random() * colors.length)];
}