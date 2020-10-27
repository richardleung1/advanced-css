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

// $(function () {
//     $('[data-toggle="popover"]').popover()
// });

const card = createNewElement('div', 'My new card');
card.classList.add('card');
console.log(card);

const cardText = createNewElement('p', 'Here is my description');
cardText.classList.add('card-title');
card.appendChild(cardText);

const link = createNewElement('a', 'General Assembly');
link.classList.add('btn', 'btn-primary');
link.setAttribute('href', 'https://generalassemb.ly/')
card.appendChild(link);