let imagesNames=['bee.jpg','cat.jpeg','dog.jpeg','elephant.jpeg','frog.jpeg','monkey.jpeg','shark.jpeg','snake.jpeg'];
let imagesNames2=imagesNames.slice(0);
let imagesArray=[];
let allImages=imagesNames.concat(imagesNames2);

//create random tow dimentions array
for (var r=allImages.length;r>0;r--) {
    randVal = Math.floor( Math.random( ) * r );
    imagesArray[r-1]=allImages[randVal];
    allImages.splice(randVal,1);
}

let imagePos=0;
let clickCounter=0;
let compareArr=[];
for (var i = 1; i <= 4; i++){
    for (var j = 1; j <= 4; j++){
        //create new div card element
        var card = document.createElement('img');
        card.setAttribute('id', `img${i}${j}`);
        card.setAttribute('src', 'images/back_card_image.jpeg');
        //card.setAttribute('src', `images/${imagesArray[imagePos]}`);
        card.setAttribute('data-lineNumber',i);
        card.setAttribute('data-imagename',imagesArray[imagePos]);
        card.classList.add(`memory_cards_back_line${i}`)
        card.style.left = (100+150*j) + 'px';
        
        card.addEventListener('click', function() {
            if (clickCounter <= 1){
                if (this.src.includes('back_card_image.jpeg')){
                    //this.className = `memory_cards_line${this.dataset.linenumber}`;
                    this.src = `images/${this.dataset.imagename}`;
                } else {
                    //this.className = `memory_cards_back_line${this.dataset.linenumber}`;
                    this.src = 'images/back_card_image.jpeg';
                }
                //check if the two cards are identical
                compareArr[clickCounter]=this.id;
            }
            clickCounter++;
            if (clickCounter === 2){
                console.log("You pickced up two cards");
                let compareCard1=document.getElementById(compareArr[0]);
                let compareCard2=document.getElementById(compareArr[1]);
                if (compareCard1.src === compareCard2.src){
                    setTimeout(function(){
                        compareCard1.src='images/win.jpeg';
                        compareCard2.src='images/win.jpeg';
                        clickCounter=0;
                        compareCard1.remove();
                        compareCard2.remove();
                    }, 800); 
                } else {
                    setTimeout(function(){
                        compareCard1.src='images/back_card_image.jpeg';
                        compareCard2.src='images/back_card_image.jpeg';
                        clickCounter=0;
                    }, 800);
                }
                
            }
            console.log(`the counter is ${clickCounter}`);
        });
        document.body.appendChild(card);
        imagePos++
    }
}