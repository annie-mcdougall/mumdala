const imagePaths = [
    "path_to_svg1.svg",
    "path_to_svg2.svg",
    "path_to_svg3.svg",
    // Add more SVG image paths as needed
];

let inputCount = 0;

        let entryCount = 0; // Initialize the entry count
        function addEntry() {
            const entryText = document.getElementById('gratitudeEntry').value;
            if (entryText.trim() !== '') {
                // Increment the input count
        inputCount++;

         // Get the index of the corresponding SVG image in the array
         const imageIndex = (inputCount - 1) % imagePaths.length;

// Set the src attribute of the <img> element to the selected SVG image
gratitudeImage.src= imagePaths[imageIndex];
gratitudeImage.style.display = 'block'; // Show the image
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
        }

        function handleKeyDown(event) {
            if (event.key === 'Enter') {
                addEntry();
            }
        }
