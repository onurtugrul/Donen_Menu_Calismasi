let form = document.querySelector('form');
let input = document.querySelector('#txtTaskName');
let btnDeleteAll = document.querySelector('#btnDeleteAll');
let taskList = document.querySelector('#task-list');
let items;


    // Load Items
    loadItems();



    // Call event listeners
    eventListeners();


function eventListeners(){
    form.addEventListener('submit', addNewItem);

    taskList.addEventListener('click', deleteItem);

    btnDeleteAll.addEventListener('click', deleteAllItems);


}

function loadItems(){
    items = getItemsFromLS();
    items.forEach(item => {
        createItem(item)
    });
}

function createItem(text){
    let li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    let a = document.createElement('a');
    a.classList = 'delete-item float-end';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);

    taskList.appendChild(li);
}

function addNewItem(e){
    if(input.value === ''){
        alert('add new item')
    }

    createItem(input.value);


     // Save to LS
     setItemToLS(input.value);


     // Clear input
     input.value = '';
     e.preventDefault();
}

function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}


// Set item to Local Storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));

}

// Delete item from LS
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}


function deleteItem(e){
    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.remove();
        deleteItemFromLS(e.target.parentElement.parentElement.textContent)
    }

    e.preventDefault();
}

function deleteAllItems(e){
    if(confirm('Emin misiniz =')){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }localStorage.clear();

    e.preventDefault();
}

