let img = document.getElementById("pic");
img.setAttribute(
    "src",
    "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg"
);

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let url = "https://dog.ceo/api/breeds/image/random";

    // console.log("you clicked me.");
    fetch(url)
        .then(function (response) {
            // console.log(response);
            // if everything is ok
            if (response.ok) {
                // parse json
                return response.json();
            }
        })
        .then(
            // do sth
            (data) => {
                img.setAttribute("src", data.message);
            }
        )
        .catch((err) => console.error("Error connecting: ", err));
});
