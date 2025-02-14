function moveButton() {
    const button = document.querySelector(".no-button");
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function sayYes() {
    // Select the container and clear its contents
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Remove everything inside

    // Create a new message
    const message = document.createElement("h1");
    message.innerText = "Yay! Can't wait to spend time with you!!! 💖";
    container.appendChild(message);

    // Create an image element for the GIF
    const gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdmYnoxNTVwcmo4bmpmY3ZtMGI1bGk5YnBrOXFteTRneWYwdzMwaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ie4CIIvQS0bk3zwZlM/giphy.gif"; // Replace with your own GIF URL
    gif.style.width = "300px";
    gif.style.marginTop = "20px";

    // Add the GIF to the page
    container.appendChild(gif);
}

