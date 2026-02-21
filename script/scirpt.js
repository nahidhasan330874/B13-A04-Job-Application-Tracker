let total = document.getElementById('total');
let  Interview = document.getElementById('Interview');
let  Rejected = document.getElementById(' Rejected');

const allCardsSection = document.getElementById('all-cards');

function allCards(){
    total.innerText = allCardsSection.children.length ;
}
allCards();