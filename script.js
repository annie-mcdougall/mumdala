const imagePaths = [
    "path_to_svg1.svg",
    "path_to_svg2.svg",
    "path_to_svg3.svg",
    "path_to_svg4.svg",
    "path_to_svg5.svg",
    "path_to_svg6.svg",
    "path_to_svg7.svg",
    "path_to_svg8.svg",
    "path_to_svg9.svg",
    "path_to_svg10.svg",
    // Add more SVG image paths as needed
];

let inputCount = 0;

let entryCount = 0;

function addEntry() {
    const entryText = document.getElementById('gratitudeEntry').value;
    if (entryText.trim() !== '') {
        // Increment the input count
        inputCount++;

        // Get the index of the corresponding SVG image in the array
        const imageIndex = (inputCount - 1) % imagePaths.length;
        const gratitudeImage = document.createElement('img');

        // Set the src attribute of the <img> element to the selected SVG image
        gratitudeImage.src = imagePaths[imageIndex];
        gratitudeImage.style.display = 'block';
        gratitudeImage.width = "100";
        document.getElementById('image-container').innerHTML = ''; // Clear existing images
        document.getElementById('image-container').appendChild(gratitudeImage); // Show the image

        const entriesContainer = document.getElementById('entriesContainer');
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.textContent = entryText;
        // Prepend the new entry to the beginning of the container
        entriesContainer.insertBefore(entryDiv, entriesContainer.firstChild);
        document.getElementById('gratitudeEntry').value = '';

        // Update the entry count and display it
        entryCount++;
        document.getElementById('entryCounter').textContent = entryCount;

        
    }

       // Get the <img> element by its id
const gratitudeImage = document.getElementById('gratitudeImage');

// Determine which image to display (e.g., based on input count)
const imageIndex = (inputCount - 1) % imagePaths.length;

// Set the src attribute of the <img> element to the selected SVG image
gratitudeImage.src = imagePaths[imageIndex];

}


        

        function handleKeyDown(event) {
            if (event.key === 'Enter') {
                addEntry();
            }
        }
