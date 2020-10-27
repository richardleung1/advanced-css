const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    const newElement = createNewElement('p', 'This is awesome!');
    container.appendChild(newElement);
    console.log('hello')
})

function createNewElement(tagName, text) {
    const newElement = document.createElement(tagName);
    newElement.textContent = text;
    return newElement;
}