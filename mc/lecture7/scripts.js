const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");
const modal = document.querySelector('.modal-cont');
const modalCloseBtn = document.querySelector('.modal-close');

addBtn.addEventListener('click', function(){
    modal.style.display = 'flex';
});

modalCloseBtn.addEventListener('click', closeModal);

deleteBtn.addEventListener('click', function(e) {
    e.target.classList.toggle("red");
})

function closeModal() {
    modal.style.display = 'none';
}

