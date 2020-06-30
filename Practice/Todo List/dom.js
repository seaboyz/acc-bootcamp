var itemList = document.getElementById("items");

// Form submit event
var form = document.getElementById("addForm");
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
}
