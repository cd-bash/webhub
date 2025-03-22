import './styles.css';

const textContent = '< End of line />';

//-----------------------------------------------------------------------

export function endOfLine() {
    const section = document.createElement("section");
    const text = document.createElement("p");

    section.className = 'end-of-line';
    text.className = 'end-of-line';
    text.textContent = textContent;

    section.appendChild(text);
    return section;
}