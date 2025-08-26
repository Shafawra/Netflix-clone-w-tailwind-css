const movieRow = document.getElementById("movie-row");

document.querySelector(".next").addEventListener("click", () => {
    movieRow.scrollBy({ left: 300, behavior: "smooth"});
});

document.querySelector(".prev").addEventListener("click", () => {
    movieRow.scrollBy({ left: -300, behavior: "smooth"});
});
