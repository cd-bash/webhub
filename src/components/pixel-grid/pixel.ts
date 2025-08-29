
type PixelPosition = {
    row: number;
    col: number;
    normalizedX: number; // 0 to 1 from left to right
    normalizedY: number; // 0 to 1 from top to bottom
};

// --------------------------------------------------------------------------------

export function createPixel(position: PixelPosition, emptyBias: string, emptyRatio: number, colors: readonly string[]): HTMLElement {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    
    const isEmpty = shouldPixelBeEmpty(position, emptyBias, emptyRatio);
    
    if (isEmpty) {
        pixel.classList.add('pixel-empty');
    } else {
        applyPixelStyling(pixel, colors);
    }
    
    return pixel;
}

export function createPosition(row: number, col: number, gridCols: number, gridRows: number): PixelPosition {
    return {
        row,
        col,
        normalizedX: col / (gridCols - 1),
        normalizedY: row / (gridRows - 1)
    };
}

// --------------------------------------------------------------------------------

function shouldPixelBeEmpty(position: PixelPosition, emptyBias: string, emptyRatio: number): boolean {
    if (emptyBias === 'right') {
        return calculateRightBiasEmpty(position, emptyRatio);
    } else if (emptyBias === 'left') {
        return calculateLeftBiasEmpty(position, emptyRatio);
    }
    return false;
}

function calculateRightBiasEmpty(position: PixelPosition, emptyRatio: number): boolean {
    const organicBoundary = calculateOrganicBoundary(position, emptyRatio);
    
    if (position.normalizedX > organicBoundary) {
        return addGhostPixelChance();
    }
    
    return calculateScatterChance(position, organicBoundary);
}

function calculateLeftBiasEmpty(position: PixelPosition, emptyRatio: number): boolean {
    const organicBoundary = calculateOrganicBoundary(position, 1 - emptyRatio);
    
    if (position.normalizedX < organicBoundary) {
        return addGhostPixelChance();
    }
    
    const distanceFromEdge = Math.abs(position.normalizedX - organicBoundary);
    const scatterChance = Math.pow(1 - distanceFromEdge / (1 - organicBoundary), 2) * 0.25;
    const rowVariation = Math.sin(position.normalizedY * Math.PI * 2) * 0.1;
    
    return Math.random() < (scatterChance + rowVariation);
}

function calculateOrganicBoundary(position: PixelPosition, baseRatio: number): number {
    const waveOffset = Math.sin(position.normalizedY * Math.PI * 3) * 0.1;
    const randomOffset = (Math.random() - 0.5) * 0.15;
    return baseRatio + waveOffset + randomOffset;
}

function calculateScatterChance(position: PixelPosition, boundary: number): boolean {
    const distanceFromEdge = Math.abs(position.normalizedX - boundary);
    const scatterChance = Math.pow(1 - distanceFromEdge / boundary, 2) * 0.25;
    const rowVariation = Math.sin(position.normalizedY * Math.PI * 2) * 0.1;
    
    return Math.random() < (scatterChance + rowVariation);
}

function addGhostPixelChance(): boolean {
    return Math.random() >= 0.3;
}

function applyPixelStyling(pixel: HTMLElement, colors: readonly string[]): void {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    pixel.style.background = randomColor;
}