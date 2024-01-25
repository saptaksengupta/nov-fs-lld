// HW
// 1. Build Filter based on color.
// 2. build delete feature...


const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");
const modal = document.querySelector('.modal-cont');
const modalCloseBtn = document.querySelector('.modal-close');
const textArea = document.querySelector(".textarea-cont");
const prioritySetModal = modal.querySelector(".priority-color-cont");
const priorityColourArray = prioritySetModal.querySelectorAll(".priority-color");
const pendingContainer = document.querySelector(".pending-cont");
const finishedContainer = document.querySelector(".finished-cont");
const containers = document.querySelectorAll(".container");

const DB_KEY = 'localTickets';
let allTickets = [];


window.addEventListener('load', function() {
    populateUi();
});

function populateUi() {
    allTickets = getTicketList() === null ? [] : getTicketList();

    for(let i = 0; i < allTickets.length; i++){
        const currentTicket = allTickets[i];
        const ticketDom = getTicketDom(
            currentTicket.id,
            currentTicket.content, 
            currentTicket.color
        );

        if (currentTicket.isPending) {
            renderPendingTickets(ticketDom);
        } else {
            renderFinishedTickets(ticketDom);
        }
    }
}

function renderPendingTickets(pendingTicket) {
    pendingContainer.appendChild(pendingTicket);
}

function renderFinishedTickets(finishedTicket) {
    finishedContainer.appendChild(finishedTicket);
}

addBtn.addEventListener('click', function(){
    modal.style.display = 'flex';
});

modalCloseBtn.addEventListener('click', closeModal);

deleteBtn.addEventListener('click', function(e) {
    e.target.classList.toggle("red");
});

prioritySetModal.addEventListener("click", function(e) {
    if (e.target === e.currentTarget) {
        return;
    }

    for(let i = 0; i < priorityColourArray.length; i++) {
        priorityColourArray[i].classList.remove('active');
    }

    e.target.classList.add("active");
});

modal.addEventListener('keypress', function(e) {
    if (e.key !== 'Enter') {
        return;
    }

    const activeColourElement = prioritySetModal.querySelector(".active");
    if (!activeColourElement) {
        alert("Please select a color first");
    }

    const cColor = activeColourElement.classList[1];

    // let's gen the ticket
    const content = textArea.value;
    const { randomUUID } =  new ShortUniqueId({length: 6});
    const id = randomUUID();
    createNewTicket(content, cColor, id, true, true);
    closeModal();
});

function getTicketDom(id, content, cColor) {
    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.setAttribute("draggable", true);
    ticketContainer.innerHTML = `
        <div class="ticket-color ${cColor}"></div>
        <div class="ticket-id">${id}</div>
        <div class="ticket-area">${content}</div>
        <div class="lock-unlock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;

    return ticketContainer;
}


// this will generate a ticket dom and save that ticket to db.
function createNewTicket(content, cColor, id, isPending, saveToDb = false) {
    if (isPending === true) {
        const ticketDom = getTicketDom(id, content, cColor); 
        pendingContainer.appendChild(ticketDom);
    }

    if (saveToDb) {
        // save to LocalStore
        saveTicketToDb(content, cColor, id, isPending);
    }
}

function saveTicketToDb(content, cColor, id, isPending) {
    const ticketObj = {
        id: id,
        content: content,
        color: cColor,
        isPending: isPending
    }

    allTickets.push(ticketObj);
    saveTicketList(allTickets);
}

function closeModal() {
    modal.style.display = 'none';
}

function saveTicketList(ticketList) {
    localStorage.setItem(DB_KEY, JSON.stringify(ticketList));
}

function getTicketList() {
    return JSON.parse(localStorage.getItem(DB_KEY));
}
