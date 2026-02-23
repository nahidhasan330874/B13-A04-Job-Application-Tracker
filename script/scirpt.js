let interview = [];
let rejected = [];
let currentStatus = 'all';

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
  //  jod.innerText = interview.length;
  Rejected.innerText = rejected.length;
  //  jod.innerText = rejected.length;

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
 allCards()
 
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("card1-interview")) {
    const parentNode = event.target.parentNode.parentNode;

    const head = parentNode.querySelector(" .card1-head").innerText;
    const Explain = parentNode.querySelector(".card2-Explain").innerText;
    const money = parentNode.querySelector(".card1-money").innerText;
    const button = parentNode.querySelector(" .card1-btn").innerText;
    const texts = parentNode.querySelector(".card1-lisen")?.innerText;
    
    parentNode.querySelector('.card1-btn').innerHTML = ` <button id="btn-not-applied" class=" btn btn-sm  btn-active border-none cursor-default btn-success  ">
              INTERVIEWED
            </button>`
    const cardInfo = {
      head,
      Explain,
      money,
      button :` <button id="btn-not-applied" class=" btn btn-sm  btn-active border-none cursor-default btn-success  ">
              INTERVIEWED
            </button>`,
      texts
      
    };
    const exist = interview.find(item => item.head == cardInfo.head);
    
    
    if (!exist) {
      interview.push(cardInfo);
    }
    
    rejected = rejected.filter(item => item.head != cardInfo.head);
     if(currentStatus === 'btn-rejected') rejectedTracker();

     allCards();
    interviewTracker();
  } else if (event.target.classList.contains("card2-rejected")) {
    const parentNode = event.target.parentNode.parentNode;

    const head = parentNode.querySelector(" .card1-head").innerText;
    const Explain = parentNode.querySelector(".card2-Explain").innerText;
    const money = parentNode.querySelector(".card1-money").innerText;
    const button = parentNode.querySelector(".card1-btn").innerText;
    const texts = parentNode.querySelector(".card1-lisen")?.innerText;
    
    parentNode.querySelector('.card1-btn').innerHTML = ` <button class=" card2-rejected btn btn-active border-none px-3 cursor-default btn-error btn-sm">
    REJECTED</button>`;
    const cardInfo = {
      head,
      Explain,
      money,
      button: ` <button class=" card2-rejected btn btn-active border-none px-3 cursor-default  btn-error btn-sm">
            REJECTED</button>`,
      texts
      
    };
    const exist = rejected.find(item => item.head == cardInfo.head);
    
    
    if (!exist) {
      rejected.push(cardInfo);
    }
    interview = interview.filter(item=> item.head != cardInfo.head);

    if(currentStatus === 'btn-interview') interviewTracker();
    

    allCards();
   
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
            <div class="card1-lisen">
             <p class=" text-[#323B49] text-[14px] pt-1">
              ${inter.texts}
              </p>
             </div>

           <div class="pt-4">
            <button onclick ="interCard()"  id="card-btn-interview" class="card1-interview btn btn-outline btn-success btn-sm">
              INTERVIEW
            </button>
            <button  id="card-btn-rejected" class=" card2-rejected btn btn-outline btn-error btn-sm">REJECTED</button>
          </div>

    
    `;
    filteredSection.appendChild(div)
  }
}
function rejectedTracker() {
  filteredSection.innerHTML = "";

  for (let reject of rejected) {
    let div = document.createElement("div");
    div.className = "bg-base-100 p-6 mt-4 rounded-xl shadow";
    div.innerHTML = `
       <div class="flex justify-between">
            <div>
              <h2 class="card1-head text-[#002C5C] text-[18px] font-semibold">
                ${reject.head}
              </h2>
              <p class="card2-Explain text-[#64748B]">${reject.Explain}</p>
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
            <p> ${reject.money}</p>
          </div>

          <div class="card1-btn">
            <button id="btn-not-applied" class=" btn btn-sm btn-active text-[#002C5C] bg-[#e5eaf1] border-none">
              ${reject.button}
            </button>
            </div>
           <div class="card1-lisen">
             <p class=" text-[#323B49] text-[14px] pt-1">
              ${reject.texts}
              </p>
           </div>


          <div class="pt-4">
            <button  id="card-btn-interview" class="card1-interview btn btn-outline btn-success btn-sm">
              INTERVIEW
            </button>
            <button  id="card-btn-rejected" class=" card2-rejected btn btn-outline btn-error btn-sm">REJECTED</button>
          </div>

    
    `;
    filteredSection.appendChild(div)

  }
    allCards();
}


