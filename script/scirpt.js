let interview = [];
let rejected = [];

let total = document.getElementById("total");
let Interview = document.getElementById("Interview");
let Rejected = document.getElementById(" Rejected");
let jod = document.getElementById("jobs");

const allCardsSection = document.getElementById("all-cards");
const filteredSection = document.getElementById("filtered-section");

const mainContainer = document.querySelector("main");

function allCards() {
  total.innerText = allCardsSection.children.length;
  jod.innerText = allCardsSection.children.length;
  Interview.innerText = interview.length;
  rejected.innerText = rejected .length;
 
}
function alCard(){
  jod.innerText = allCardsSection.children.length;
}
function interCard(){
   jod.innerText = interview.length;
}

function rejCard(){
   jod.innerText = rejected.length;
}
allCards();
 

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("card1-interview")) {
    const parentNode = event.target.parentNode.parentNode;

    const head = parentNode.querySelector(" .card1-head").innerText;
    const Explain = parentNode.querySelector(".card2-Explain").innerText;
    const money = parentNode.querySelector(".card1-money").innerText;
    const button = parentNode.querySelector(" .card1-btn").innerText;
    const texts = parentNode.querySelector(" .card1-lisen").innerText;
    
    parentNode.querySelector('.card1-btn').innerHTML = ` <button id="btn-not-applied" class=" btn btn-sm  btn-active border-none btn-success  ">
              INTERVIEWED
            </button>`
    const cardInfo = {
      head,
      Explain,
      money,
      button:` <button id="btn-not-applied" class=" btn btn-sm  btn-active border-none btn-success  ">
              INTERVIEWED
            </button>`,
      texts
      
    };
    const exist = interview.find((item) => item.head == cardInfo.head);
    
    
    if (!exist) {
      interview.push(cardInfo);
    }

-  allCards();
   
    interviewTracker();
  }
});

function interviewTracker() {
  filteredSection.innerHTML = "";

  for (let inter of interview) {
    let div = document.createElement("div");
    div.className = "bg-base-100 p-6 mt-4 rounded-xl shadow";
    div.innerHTML = `
       <div class="flex justify-between">
            <div>
              <h2 class="card1-head text-[#002C5C] text-[18px] font-semibold">
                ${inter.head}
              </h2>
              <p class="card2-Explain text-[#64748B]">${inter.Explain}</p>
            </div>

            <div class="flex items-center">
              <button
                class="btn-delete btn rounded-full px-3 btn-base-100 text-[#64748B] shadow"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>

          <div class=" card1-money text-[#64748B] text-[14px] py-4">
            <p> ${inter.money}</p>
          </div>

          <div class="card1-btn">
            <button id="btn-not-applied" class=" btn btn-sm btn-active text-[#002C5C] bg-[#e5eaf1] border-none">
              ${inter.button}
            </button>
            </div>
            <p class=" text-[#323B49] text-[14px] pt-1">
              ${inter.texts}
            </p>

          <div class="pt-4">
            <button class="card1-interview btn btn-outline btn-success btn-sm">
              INTERVIEW
            </button>
            <button class=" card1-rejected btn btn-outline btn-error btn-sm">REJECTED</button>
          </div>

    
    `;
    filteredSection.appendChild(div)
  }
}
