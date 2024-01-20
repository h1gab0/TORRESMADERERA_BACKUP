function populateForm() {
  const folioSel = document.querySelector(".folioSel");
  folioSel.addEventListener("change", function() {
    localStorage.setItem('notPrinting', 'false');
    localStorage.setItem('200', 'true');
    const selectedFolio = this.value;
    $.ajax({
      type: "GET",
      url: `/getfolio/${selectedFolio}`,
      success: function(data) {
        const actualData = data[0]; // Access the inner array
        console.log("Raw Data (inner array):", actualData);

        if (actualData) {
          // Populate form fields with accurate data access
          document.getElementById("folio").innerText = actualData[1];
          document.getElementById("client").value = actualData[2];

          // Handle potential undefined date property
          if (actualData[3]) {
            let date = new Date(actualData[3]);
            let formattedDate = date.toISOString().split('T')[0];
            document.getElementById("date").value = formattedDate;
          } else {
            console.warn("Date property not found in data");
            // Handle missing date (e.g., set a default value)
          }

          document.getElementById("iva").checked = actualData[4];
          document.getElementById("flete").checked = actualData[5];
          document.getElementById("f").value = actualData[6];
          document.getElementById("isr").checked = actualData[7];

          // Populate form fields with retrieved data
          document.getElementById("p1shell").value = actualData[8];
          document.getElementById("w1shell").value = actualData[9];
          document.getElementById("d1shell").value = actualData[10];
          document.getElementById("u1shell").value = actualData[11];
          document.getElementById("q1shell").value = actualData[12];
          document.getElementById("t1shell").value = actualData[13];
          document.getElementById("p2shell").value = actualData[14];
          document.getElementById("w2shell").value = actualData[15];
          document.getElementById("d2shell").value = actualData[16];
          document.getElementById("u2shell").value = actualData[17];
          document.getElementById("q2shell").value = actualData[18];
          document.getElementById("t2shell").value = actualData[19];
          document.getElementById("p3shell").value = actualData[20];
          document.getElementById("w3shell").value = actualData[21];
          document.getElementById("d3shell").value = actualData[22];
          document.getElementById("u3shell").value = actualData[23];
          document.getElementById("q3shell").value = actualData[24];
          document.getElementById("t3shell").value = actualData[25];
          document.getElementById("p4shell").value = actualData[26];
          document.getElementById("w4shell").value = actualData[27];
          document.getElementById("d4shell").value = actualData[28];
          document.getElementById("u4shell").value = actualData[29];
          document.getElementById("q4shell").value = actualData[30];
          document.getElementById("t4shell").value = actualData[31];
          document.getElementById("p5shell").value = actualData[32];
          document.getElementById("w5shell").value = actualData[33];
          document.getElementById("d5shell").value = actualData[34];
          document.getElementById("u5shell").value = actualData[35];
          document.getElementById("q5shell").value = actualData[36];
          document.getElementById("t5shell").value = actualData[37];
          document.getElementById("p6shell").value = actualData[38];
          document.getElementById("w6shell").value = actualData[39];
          document.getElementById("d6shell").value = actualData[40];
          document.getElementById("u6shell").value = actualData[41];
          document.getElementById("q6shell").value = actualData[42];
          document.getElementById("t6shell").value = actualData[43];
          document.getElementById("unotas").value = actualData[44];
          console.log('Form populated');
          manualIva();            
          localStorage.setItem('notPrinting', 'true');
        } else {
          console.log("Data not found for folio:", selectedFolio);
        }
      },
      error: function(error) {
        console.log("Error retrieving data for folio:", error);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  populateForm();
  console.log('Population active.');
});
