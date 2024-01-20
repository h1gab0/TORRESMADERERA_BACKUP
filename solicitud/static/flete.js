function showPrice() {
    var checkBox = document.getElementById("flete");
    var text = document.getElementById("price");
    var fInput = document.querySelector(".fshell");
    if (checkBox.checked == true){
        text.style.display = "block";
        fInput.style.display = "block";
        if (localStorage.getItem('200') === "false"){
            fInput.value = "200";
            localStorage.setItem('200', 'true');
        }
    } else if(checkBox.checked == false){
        text.style.display = "none";
        fInput.style.display = "none";
        fInput.value = "";
        localStorage.setItem('200', 'false');
    }
}
function showPriceI() {
    var checkBoxisr = document.getElementById("isr");
    var textisr = document.getElementById("priceisr"); 
    if (checkBoxisr.checked == true){
        textisr.textContent = 'Retención - 1.25%: ';
    } else {
        textisr.textContent = '';
    }
}

localStorage.setItem('notPrinting', 'true');

document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        if (localStorage.getItem('notPrinting') === 'true') {
            showPrice();
        }
    }, 100);
  });