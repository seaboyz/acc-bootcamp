// NOTE: Original trial class code

const todoUrl = "http://localhost:3000/todos";

// READ
$(document).ready(() => {
	$.ajax({
		method: "GET",
		url: todoUrl,
	})
		// get data from server
		.done((toDoArray) => {
			// remove all the fake todo items
			$("li").remove();
			toDoArray.forEach((todo) => {
				$("ul").append(
					// asign an id for each list item using the id from the server as data attribute
					`<li data-id=${todo.id}>
						${todo.description}
						<span><i class='far fa-trash-alt'></i></span>
					</li>`
				);
			});
		})
		.fail((error) => {
			console.error("Issues getting data from server");
		});
});

// CREATE
$("input").keypress(function (event) {
	if (event.which === 13 && $(this).val() !== "") {
		let todoItem = { description: $(this).val() };
		$.ajax({
			url: todoUrl,
			method: "POST",
			data: todoItem,
		})
			.done((newtodo) => {
				$("ul").append(
					`<li data-id=${newtodo.id}>
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

// PUT
$("ul").on("click", "li", function () {
	// get data attribute from the clicked item
	let id = $(this).data("id");
	$.ajax({
		method: "PUT",
		url: `${todoUrl}/${id}`,
	})
		.done((requestedToDo) => {
			let id = requestedToDo.id;
			// data atrribute selector
			$(`li[data-id="${id}"]`).toggleClass("completed");
		})
		.fail((error) => {
			console.error("Issues getting data from server");
		});
});

// DELETE
$("ul").on("click", "span", function () {
	// get data attribute from the clicked item
	let id = $(this).parent().data("id");
	$.ajax({
		method: "DELETE",
		url: `${todoUrl}/${id}`,
	})
		.done((requestedToDo) => {
			let id = requestedToDo.id;
			$(`li[data-id="${id}"]`).remove();
		})
		.fail((error) => {
			console.error("Issues getting data from server");
		});
});
