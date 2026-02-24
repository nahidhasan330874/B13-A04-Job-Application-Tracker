// btn toggle Style

const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectedBtn = document.getElementById('btn-rejected');

document.addEventListener("click", function (deleted) {
  if (deleted.target.closest(".btn-delete")) {
    const card = deleted.target.closest("#Interview-btn");
    card.remove();
    alert("deleted Card");
    
     allCards();
  } 
  
});

function toggle(id) {

  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allBtn.classList.add("btn", "text-[#64748B]");
  interviewBtn.classList.add("btn", "text-[#64748B]");
  rejectedBtn.classList.add("btn", "text-[#64748B]");
  
  
  const selected = document.getElementById(id);
  currentStatus =id ;
  selected.classList.add("bg-[#3B82F6]", "text-white");

    if(id == 'btn-interview'){
      allCardsSection.classList.add('hidden');
      filteredSection.classList.remove('hidden');

       interviewTracker();
    }
    else if ( id == "btn-all"){
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    }else if( id == "btn-rejected"){
      allCardsSection.classList.add('hidden');
      filteredSection.classList.remove('hidden');
      if(currentStatus === 'btn-interview') interviewTracker();
       if(currentStatus === 'btn-rejected') rejectedTracker();
      
    }
    
 allCards();
}


// hide all / show id
function showOnly(id){

    // const allCards = document.getElementById('all-cards');
    // const interviews = document.getElementById('Interview-file');
    // const reject = document.getElementById('Rejected-file');
    
     
  
    // allCards.classList.add('hidden');
    // interviews.classList.add('hidden');
    // reject.classList.add('hidden');
    

    // const selectedBtn = document.getElementById(id);
    // selectedBtn.classList.remove('hidden');
       
     if(id == 'card-btn-interview'){
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
     }
    else if(id == 'btn-all'){
      allCardsSection.classList.remove('hidden');
      filteredSection.classList.add('hidden');

    
    } else if( id == "card-btn-rejected"){
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    };
   
}
 
function clickOnly(type){
   const allCards = document.getElementById('all-cards');
  const interviews = document.getElementById('Interview-file');
  const reject = document.getElementById('Rejected-file');
  const filtered = document.getElementById('filtered-section');

   
  allCards.classList.add('hidden');
  interviews.classList.add('hidden');
  reject.classList.add('hidden');
  filtered.classList.add('hidden');

  if (type === 'all') {
    allCards.classList.remove('hidden');
  }

  else if (type === 'interview') {

    if (interview.length === 0) {
      interviews.classList.remove('hidden');   // No jobs show
    } else {
      filtered.classList.remove('hidden');     // Card show
      interviewTracker();
    }
  }

  else if (type === 'rejected') {

    if (rejected.length === 0) {
      reject.classList.remove('hidden');       // No jobs show
    } else {
      filtered.classList.remove('hidden');     // Card show
      rejectedTracker();
    }
  }
}
 