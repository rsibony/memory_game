
var card = document.createElement('div');
card.setAttribute('id', `card1`);
card.classList.add('square_b');
card.style.left = '150px';
card.addEventListener('click', function() {
    //without using this
    let el = document.getElementById('card1');
    if (el.className === 'square_b'){
        el.className = 'square_g';
    } else {
        el.className = 'square_b';
    }
});
document.body.appendChild(card);