const paragraphs = [
    "Mars' surface has been altered by volcanoes, impacts, winds, and crustal movement",
    "Phobos and Deimos are small compared to the planet",
    "The first success was NASA's Mariner 4 flyby in 1965",
    "Iron minerals in the Martian soil oxidize, or rust, causing the soil and atmosphere to look red"
    
]; // Add your paragraph texts here

let currentIndex = 0;

function changeContent() {
   // document.getElementById("image").src = images[currentIndex];
    document.getElementById("paragraph").textContent = paragraphs[currentIndex];
    currentIndex = (currentIndex + 1) % paragraphs.length;
}

// Call the changeContent function every 5 seconds
setInterval(changeContent, 5000);

// Initial call to display the first content
changeContent();