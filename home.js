
if (proceed) {
    proceed.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Proceed button clicked!");
        window.location.href = "online.html";
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    let index = 0;

    slideImages = () => {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slider.style.transform = `translateX(${-index * 300}px)`;
    }

    setInterval(slideImages, 2000); // Change image every 2 seconds
});



