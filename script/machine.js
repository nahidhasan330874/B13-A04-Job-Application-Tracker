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

    const interview = document.getElementById('Interview-file');
  
  const selected = document.getElementById(id);

  selected.classList.add("bg-[#3B82F6]", "text-white");

    if(id == 'btn-interview'){
      interview.classList.remove('hidden');
      allCardsSection.classList.add('hidden');
      filteredSection.classList.remove('hidden');
    }
    else if ( id == "btn-all"){
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    }

}


// hide all / show id
function showOnly(id){
    const allCards = document.getElementById('all-cards');
    const interview = document.getElementById('Interview-file');
    const rejected = document.getElementById('Rejected-file');

    allCards.classList.add('hidden');
    interview.classList.add('hidden');
    rejected.classList.add('hidden');

    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove('hidden');

     if(id == 'card-btn-interview'){
       allCardsSection.classList.remove('hidden');
       interview.classList.add('hidden');
      filteredSection.classList.add('hidden');
    }  
    else if(id == 'btn-interview'){
      allCardsSection.classList.add('hidden');
      interview.classList.add('hidden');
      filteredSection.classList.remove('hidden');
    } else if ( id == "btn-all"){
        interview.classList.add('hidden');
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    }
}

 