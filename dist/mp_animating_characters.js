const bodyEl = document.querySelector('body');
const txtEl = document.querySelector('.text');
const txt = '30 Days Of JavaScript Challenge 2023 Bohdan Lavrentiev';
const containerEl = document.querySelector('.container');
const fontsArray = ['Comfortaa', 'Iceland', 'Josefin Sans', 'Kanit', 'Prompt', 'Righteous', 'Roboto Mono'];
if (txtEl) {
    txtEl.textContent = txt !== null && txt !== void 0 ? txt : '';
}
const randomColorHex = () => {
    var _a;
    const lettersArray = ((_a = txtEl === null || txtEl === void 0 ? void 0 : txtEl.textContent) !== null && _a !== void 0 ? _a : '').split('');
    if (txtEl) {
        txtEl.remove(); // remove text to make new one with colors
    }
    for (let i = 0; i < lettersArray.length + 1; i++) {
        const newLetter = document.createElement('span');
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (bodyEl) {
            bodyEl.style.backgroundColor = `#${randomColor}`; // change bg color
        }
        if (containerEl) {
            containerEl.appendChild(newLetter);
            containerEl.style.fontFamily = fontsArray[Math.floor(Math.random() * 6)];
        }
        if (newLetter) {
            newLetter.style.color = `#${randomColor}`;
            newLetter.style.fontSize = '140px';
            newLetter.style.opacity = '0';
            newLetter.textContent = (lettersArray === null || lettersArray === void 0 ? void 0 : lettersArray[i]) || '';
            const opacityInterval = randomOpacityInt();
            newLetter.style.transition = `opacity ${opacityInterval}ms`;
            setTimeout(() => {
                newLetter.style.opacity = '1';
            }, 0);
        }
    }
};
const randomOpacityInt = () => {
    // Generate a random opacity change interval between 1 and 3 seconds
    return Math.floor(Math.random() * 3000) + 1000;
};
randomColorHex();
