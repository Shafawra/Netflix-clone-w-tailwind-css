const movieRow = document.getElementById("movie-row");

document.querySelector(".next").addEventListener("click", () => {
    movieRow.scrollBy({ left: 300, behavior: "smooth"});
});

document.querySelector(".prev").addEventListener("click", () => {
    movieRow.scrollBy({ left: -300, behavior: "smooth"});
});


const items = document.querySelectorAll(".accItem");

items.forEach(item => {
    const accHeader = item.querySelector(".accHeader");
    const accContent = item.querySelector(".accContent");
    const icon = item.querySelector(".icon");

    accHeader.addEventListener("click", () => {
        items.forEach(i => {
            i.querySelector(".accContent").style.maxHeight = null;
            i.querySelector(".icon").style.transform = "rotate(0deg)";
        });

        if (!accContent.style.maxHeight) {
            accContent.style.maxHeight = accContent.scrollHeight + "px";
            icon.style.transform = "rotate(45deg)";
        } else {
            accContent.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";
        }
    });
});
