/* 
When start a webpage, the request is always from the client to the server. 
1. load the page.
2. when finish loading the page, it starts to load script.js.
3. start the CRUD
4. acctually READ starts first
*/

const todoUrl = "http://localhost:3000/todos";

// CREATE
// on keypress triger a call back function,using keypress event as parameter
$("input").keypress(function (event) {
	// if the press enter key and the input value is not empty
	if (event.which === 13 && $(this).val() !== "") {
		let todoItem = { description: $(this).val() };
		// send input value to sever use post method
		$.ajax({
			url: todoUrl,
			method: "POST",
			data: todoItem,
		})
			// receive data from server
			.done((newtodo) => {
				$("ul").append(
					`<li data-id=${newtodo._id}>
						${newtodo.description}
						<span><i class='far fa-trash-alt'></i></span>
					</li>`
				);
				$("input").val("");
			})
			.fail((error) => {
				console.error("Failed getting new todo created in server", err);
			});
	}
});

// READ
// when page finishs loading
$(document).ready(() => {
	// make a js call to the ajax engine
	//  then ajax send a GET request to server
	$.ajax({
		method: "GET",
		url: todoUrl,
	})
		// receive data from server
		.done((toDoArray) => {
			// console.log(toDoArray);
			console.table(toDoArray, ["_id", "isComplted","description"]);
			// remove all the fake todo items
			$("li").remove();
			toDoArray.forEach((todo) => {
				let completed = todo.isComplete ? "completed" : "";
				$("ul").append(
					// asign an id for each list item using the _id from the server as data attribute
					// show completed status
					`<li class="${completed}" data-id=${todo._id}>
						${todo.description}
						<span><i class='far fa-trash-alt'></i></span>
					</li>`
				);
			});
		})
		// if not recieve data from server
		.fail((error) => {
			console.error("Issues getting data from server");
		});
});

// Update
// when click a list item, trigger a callback funtion
$("ul").on("click", "li", function () {
	// get data attribute from the clicked item list item
	let id = $(this).data("id");
	// send put request to server
	$.ajax({
		// send user id through url to server
		method: "PUT",
		url: `${todoUrl}/${id}`,
	})
		// receive data from server
		.done((requestedToDo) => {
			let id = requestedToDo._id;
			// data atrribute selector
			// toggle completed class
			$(`li[data-id="${id}"]`).toggleClass("completed");
		})
		.fail((error) => {
			console.error("Issues getting data from server");
		});
});

// DELETE
$("ul").on("click", "span", function (event) {
	event.stopPropagation();
	// The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
	// https://www.w3schools.com/jquery/event_stoppropagation.asp
	// get data attribute from the clicked item
	let id = $(this).parent().data("id");
	// send delete request to server with id in the url
	$.ajax({
		method: "DELETE",
		url: `${todoUrl}/${id}`,
	})
		// receive data from server
		.done((requestedToDo) => {
			let id = requestedToDo._id;
			// delete the list item with the id as data attribute
			$(`li[data-id="${id}"]`).remove();
		})
		.fail((error) => {
			console.error("Issues getting data from server");
		});
});
