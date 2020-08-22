// NOTE: Original trial class code

$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
	console.log($(this));
});

$("ul").on("click", "span", function (event) {
	$(this)
		//.parent()
		.remove();
});

const todoUrl = "http://localhost:3000/todos";

// READ
$(document).ready(() => {
	$.ajax({
		method: "GET",
		url: todoUrl,
	})
		.done((data) => {
			$("li").remove();
			data.forEach((todo) => {
				$("ul").append(
					"<li>" +
						todo.description +
						"<span>" +
						"<i class='far fa-trash-alt'></i>" +
						"</span>" +
						"</li>"
				);
			});
		})
		.fail((error) => {
			console.error("Issues getting data from");
		});
});

// CREATE
$("input").keypress(function (event) {
	if (event.which === 13 && $(this).val() !== "") {
		let todoItem = {
			description: $(this).val(),
		};
		$.ajax({
			url: todoUrl,
			method: "POST",
			data: todoItem,
		})
			.done((data) => {
				$("ul").append(
					"<li>" +
						data.description +
						"<span>" +
						"<i class='far fa-trash-alt'></i>" +
						"</span>" +
						"</li>"
				);
				$("input").val("");
			})
			.fail((error) => {
				console.error("Failed getting new todo created in server", err);
			});
	}
});
