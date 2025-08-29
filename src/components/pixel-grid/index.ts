import './styles.css';
import {createPixel, createPosition} from'./pixel.ts'

const GRID_CONFIG = {
    rows: 6,
    cols: 15,
    colors: ['#0f0f0f', '#2a2a2a', '#181818']
} as const;

type PixelGridOptions = {
    emptyBias?: 'left' | 'right' | 'none';
    emptyRatio?: number; 
};

// --------------------------------------------------------------------------------

export function createPixelGrid(options: PixelGridOptions = {}) {
    const { emptyBias = 'none', emptyRatio = 0.5 } = options;

    const grid = createGridElement();
    
    for (let row = 0; row < GRID_CONFIG.rows; row++) {
        for (let col = 0; col < GRID_CONFIG.cols; col++) {
            const position = createPosition(row, col, GRID_CONFIG.cols, GRID_CONFIG.rows);
            const pixel = createPixel(position, emptyBias, emptyRatio, GRID_CONFIG.colors);
            grid.appendChild(pixel);
        }
    }

    return grid;
}

// --------------------------------------------------------------------------------

function calculateResponsivePixelSize(): number {
    const viewportHeight = window.innerHeight;
    
    const heightBasedPixelSize = viewportHeight / GRID_CONFIG.rows;
    
    const minSize = 120; 
    const maxSize = 300; 
    
    return Math.max(minSize, Math.min(maxSize, heightBasedPixelSize));
}

function createGridElement(): HTMLElement {
    const grid = document.createElement('div');
    grid.className = 'pixel-grid';
    
    const pixelSize = calculateResponsivePixelSize();
    
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = `repeat(${GRID_CONFIG.cols}, ${pixelSize}px)`;
    grid.style.gridTemplateRows = `repeat(${GRID_CONFIG.rows}, ${pixelSize}px)`;
    
    return grid;
}