// NOTE: Original trial class code
$("input").keypress(function(event) {
  if (event.which === 13 && $(this).val() !== "") {
    var todoItem = $(this).val();
    $("ul").append(
      "<li>" +
        todoItem +
        "<span>" +
        "<i class='far fa-trash-alt'></i>" +
        "</span>" +
        "</li>"
    );
    $("input").val("");
  }
});

$("ul").on("click",/* "li", */ function() {
  $(this).toggleClass("completed");
  console.log($(this))
});

$("ul").on("click", "span", function(event) {
  $(this)
    //.parent()
    .remove();
});