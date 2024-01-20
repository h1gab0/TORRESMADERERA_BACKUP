function fetchFolios() {
  $.ajax({
    type: "GET",
    url: "/getdata",
    success: function(data) {
      if (Array.isArray(data) && data.length > 0) { // Check for a non-empty array
        const folioSel = document.querySelector(".folioSel");
        folioSel.innerHTML = ""; // Clear existing options

        // Process the flat array of entries
        data.forEach(entry => {
          const folioNumber = entry[1]; // Assuming the folio number is the second element
          const option = document.createElement("option");
          option.value = folioNumber;
          option.text = folioNumber; // Display folio number as option text
          folioSel.appendChild(option);
        });
      } else {
        // Handle unexpected data formats
        console.error("Unexpected data format from server:", data);
        // Display a user-friendly error message
      }
    },
    error: function(error) {
      console.error("Error fetching folios:", error);
      // Display a user-friendly error message
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchFolios();  
  console.log('Folios fetched.');
});
