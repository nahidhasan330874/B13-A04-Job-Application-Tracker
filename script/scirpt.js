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


// btn toggle Style

const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectedBtn = document.getElementById('btn-rejected');

function toggle(id) {

  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allBtn.classList.add("btn", "text-[#64748B]");
  interviewBtn.classList.add("btn", "text-[#64748B]");
  rejectedBtn.classList.add("btn", "text-[#64748B]");

  
  const selected = document.getElementById(id);

  selected.classList.add("bg-[#3B82F6]", "text-white");
}

 

 
