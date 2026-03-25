const container = document.getElementById("card-div");

container.addEventListener("click", (event) => {
  
    const clickedCard = event.target.closest('.card');

    if (!clickedCard) return;

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('active'));
    clickedCard.classList.add('active');
});