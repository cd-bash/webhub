import { createPixelPattern } from './pixel.ts';

export type GRID_CONFIG = {
    rows?: number;     // Used for left/right alignments
    columns?: number;  // Used for top alignment
    colors: string[];
};

const EMPTY_RATIO = 0.3; // Controls the "empty zone" bias (0.0 = all empty, 1.0 = no empty zone)

// --------------------------------------------------------------------------------

export function createPixelGrid(config: GRID_CONFIG, alignment: 'left' | 'right' | 'top'): HTMLCanvasElement {
    const canvas = createCanvasElement();
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return canvas;

    let resizeTimeout: number;
    
    // Use ResizeObserver with debouncing for responsive updates
    const resizeObserver = new ResizeObserver(() => {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
            const parent = canvas.parentElement;
            if (parent) {
                renderPixelGrid(canvas, ctx, config, alignment, parent.clientWidth, parent.clientHeight);
            }
        }, 100); // 100ms debounce
    });

    // Initial render
    setTimeout(() => {
        const parent = canvas.parentElement;
        if (parent) {
            resizeObserver.observe(parent);
            renderPixelGrid(canvas, ctx, config, alignment, parent.clientWidth, parent.clientHeight);
        }
    }, 0);

    return canvas;
}

// --------------------------------------------------------------------------------

function createCanvasElement(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.className = 'pixel-grid';
    return canvas;
}

function renderPixelGrid(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    config: GRID_CONFIG,
    alignment: 'left' | 'right' | 'top',
    width: number,
    height: number
) {
    // Setup canvas
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    let pixelSize: number;
    let totalRows: number;
    let totalCols: number;

    if (alignment === 'top') {
        // For top alignment, use columns configuration and calculate pixel size based on width
        const configuredCols = config.columns || 6; // Default fallback
        pixelSize = width / configuredCols;
        totalCols = configuredCols;
        totalRows = Math.ceil(height / pixelSize);
    } else {
        // For left/right alignment, use rows configuration and calculate pixel size based on height
        const configuredRows = config.rows || 6; // Default fallback
        pixelSize = height / configuredRows;
        totalRows = configuredRows;
        totalCols = Math.ceil(width / pixelSize);
    }

    const colors = config.colors;

    // Render each pixel
    for (let row = 0; row < totalRows; row++) {
        for (let col = 0; col < totalCols; col++) {
            // Use canvas-relative position for consistent 50/50 split
            const canvasX = col * pixelSize;
            const color = createPixelPattern({
                row,
                col,
                totalRows,
                totalCols,
                screenX: canvasX,
                screenWidth: width, // Use canvas width instead of viewport width
                alignment,
                emptyRatio: EMPTY_RATIO,
                colors
            });

            if (color) {
                ctx.fillStyle = color;
                const x = Math.floor(col * pixelSize);
                const y = Math.floor(row * pixelSize);
                const size = Math.ceil(pixelSize) + 1;
                ctx.fillRect(x, y, size, size);
            }
        }
    }
}