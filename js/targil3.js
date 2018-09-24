for (var i = 0; i <= 1; i++){
    var card = document.createElement('img');
    card.setAttribute('id', `img${i}`);
    card.setAttribute('src', 'images/back_card_image.jpeg');
    card.classList.add('square-back-image');
    card.style.left = (50+300*i)+'px';
    card.addEventListener('click', function() {
        
        if (this.className === 'square-back-image'){
            this.className = 'square-image';
            this.src = 'images/bee.jpg';
        } else {
            this.className = 'square-back-image';
            this.src = 'images/back_card_image.jpeg';
        }
    });
    document.body.appendChild(card);
}