var itemList = document.getElementById("items");
var form = document.getElementById("addForm");
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener("submit", addItem);

// Delete button event
// Add event listener to item list
// once the item list update, the event will add to the new list item automatically because the event listener is added to the parent
itemList.addEventListener("click", removeItem);

// Add event listener to delete buttons
// // This way only works for the exited button, for the new added button do not work.
// var delButtonList = document.getElementsByClassName('delete');
// for (var i = 0; i < delButtonList.length; i++){
//     delButtonList[i].addEventListener('click', removeItem);
// }

// filter event
filter.addEventListener('keyup', filterItem);


// Add item
function addItem(e) {
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById("item").value;
    
    // Create new li element
    var li = document.createElement("li");
    // Add class
    li.className = "list-group-item";
    // Add text node with input value
    newItemText = document.createTextNode(newItem);
    // append newItemText to text node
    li.appendChild(newItemText);
    
    // Create del button element
    var delButton = document.createElement("button");
    // Add Classes to delButton
    delButton.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    delButton.appendChild(document.createTextNode("X"));
    
    // Append delete button to li
    li.appendChild(delButton);
    
    // Append li element to itemList
    itemList.appendChild(li);

    // Delete the input content 
    document.getElementById('item').value='';
}

// Remove item
function removeItem(e) {
    // Using class to distinguish if delete button is clicked.
    if (e.target.classList.contains("delete")) {
        if(confirm('Are you sure?'))
        // parent of the clicked item which is li
        var li = e.target.parentElement;
        itemList.removeChild(li);

    }
}

// filter items
function filterItem(e) {
    // convert text typed in to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    items = Array.from(items);
    // Get text content for each item and convert it to lower case
    for(var i = 0; i < items.length; i++){
        var itemName = items[i].firstChild.textContent.toLowerCase();
        // compare item name to the search box text
        // The indexOf() method returns the position of the first occurrence of a specified value in a string.
        // This method returns -1 if the value to search for never occurs.
        // Note: The indexOf() method is case sensitive.
        if(itemName.indexOf(text) != -1){
            items[i].style.display = 'block';
        }else{
            items[i].style.display = 'none';
        }
        // console.log(itemName);
    }
    // Array.from(items).forEach(function(item){
    //     var itemName = item.firstChild.textContent;
    // })
}
