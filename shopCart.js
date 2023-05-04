function shopCart(){

const shopbody = document.querySelector(".shop__body");
console.log(shopbody);

shopbody.addEventListener('click', (e) => {
    e.preventDefault();
    let clickedCard = e.target;
    if (clickedCard.closest('.shop__link')){
    console.log(clickedCard.closest('.shop__link'));
    console.log(clickedCard.dataset.id));
    }
});
};
shopCart()
