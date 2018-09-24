for (var i = 0; i <= 1; i++){
    var card = document.createElement('div');
    card.setAttribute('id', `card${i}`);
    card.classList.add('square-back-image');
    card.style.left = (50+300*i)+'px';
    card.addEventListener('click', function() {
        //without using this
        //let el = document.getElementById(`card${i}`);
        if (this.className === 'square-back-image'){
            this.className = 'square-image';
        } else {
            this.className = 'square-back-image';
        }
    });
    document.body.appendChild(card);
}