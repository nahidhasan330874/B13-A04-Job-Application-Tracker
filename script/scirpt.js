let total = document.getElementById("total");
let Interview = document.getElementById("Interview");
let Rejected = document.getElementById(" Rejected");
let jod = document.getElementById("jobs");

const allCardsSection = document.getElementById("all-cards");

function allCards() {
  total.innerText = allCardsSection.children.length;
  jod.innerText = allCardsSection.children.length;
}
allCards();
 
  const buttons = document.querySelectorAll(".btn-file");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => {
        btn.classList.remove("bg-[#3B82F6]", "text-white");
        btn.classList.add("btn-outline", "text-[#64748B]");
      })
      button.classList.remove("btn-outline",'text-[#64748B]');
      button.classList.add("bg-[#3B82F6]", "text-white");
    });
  });
  

  
