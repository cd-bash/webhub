import './styles.css';

// --------------------------------------------------------------------------------

export function createPixelGrid(options: {
    rows: number;
    cols: number;
    pixelSize: number;
    colors: string[];
    emptyBias?: 'left' | 'right' | 'none';
    emptyRatio?: number; // 0 to 1, how many cells are empty in the biased area
}) {
    const { rows, cols, pixelSize, colors, emptyBias = 'none', emptyRatio = 0.5 } = options;
    const grid = document.createElement('div');
    grid.className = 'pixel-grid';
    grid.style.gridTemplateRows = `repeat(${rows}, ${pixelSize}px)`;
    grid.style.gridTemplateColumns = `repeat(${cols}, ${pixelSize}px)`;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let isEmpty = false;
            if (emptyBias === 'left' && c < cols / 2) {
                isEmpty = Math.random() < emptyRatio;
            } else if (emptyBias === 'right' && c >= cols / 2) {
                isEmpty = Math.random() < emptyRatio;
            }
            if (!isEmpty) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
                grid.appendChild(pixel);
            } else {
                const empty = document.createElement('div');
                empty.className = 'pixel pixel-empty';
                grid.appendChild(empty);
            }
        }
    }
    return grid;
}