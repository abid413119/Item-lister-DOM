var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete events
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);

// Add itme
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var dltBtn = document.createElement('button');
    dltBtn.className = 'btn btn-danger btn-sm float-right delete';
    dltBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dltBtn);
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Ara you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get li's
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}
