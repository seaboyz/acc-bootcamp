var theName = document.getElementById("name");
var thePassword = document.getElementById("password");

document.querySelector("form").addEventListener("submit", function (event) {
    var errors = [];
    //conditional to check name input
    if (theName.value === null || theName.value === "") {
        errors.push("Please enter a name");
    }

    //condition to check password
    if (thePassword.value.length <= 6) {
        errors.push("Password must be greater than 6 characters");
    }

    if (errors.length > 0) {
        //Display those error messages
        event.preventDefault();
        document.querySelector("#wrapper").style.border = "1px solid red";
        document.querySelector("p").textContent = errors.join(", ");
        document.querySelector("p").style.color = "red";
    }
});
