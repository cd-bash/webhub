
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
    normalizedY: number,
    alignment: 'left' | 'right',
    emptyRatio: number
): boolean {
    const boundary = calculateBoundary(normalizedY, emptyRatio);

    if (alignment === 'right') {
        return normalizedScreenX > boundary ? hasGhostPixel() : hasScatterEffect(normalizedScreenX, boundary, normalizedY);
    } else {
        return normalizedScreenX < boundary ? hasGhostPixel() : hasScatterEffect(normalizedScreenX, boundary, normalizedY);
    }
}

function calculateBoundary(normalizedY: number, emptyRatio: number): number {
    const waveOffset = Math.sin(normalizedY * Math.PI * 3) * 0.1;
    const randomOffset = (Math.random() - 0.5) * 0.15;
    return emptyRatio + waveOffset + randomOffset;
}

function hasScatterEffect(screenX: number, boundary: number, normalizedY: number): boolean {
    const distance = Math.abs(screenX - boundary);
    const scatterChance = Math.pow(1 - distance / boundary, 2) * 0.25;
    const rowVariation = Math.sin(normalizedY * Math.PI * 2) * 0.1;
    
    return Math.random() < (scatterChance + rowVariation);
}

function hasGhostPixel(): boolean {
    return Math.random() >= 0.3;
}

function getRandomColor(colors: readonly string[]): string {
    return colors[Math.floor(Math.random() * colors.length)];
}