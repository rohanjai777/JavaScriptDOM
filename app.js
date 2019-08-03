const list = document.querySelector('#book-list ul');


list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
// add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");
  addForm.querySelector('input[type="text"]').value = "";
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
