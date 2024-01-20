localStorage.setItem('iva', 'true');

const checkbox = document.getElementById('iva');    
// Check if the checkbox is checked or not
if (checkbox.checked) {
  // If the checkbox is checked, log this message to the console
  localStorage.setItem('reload','True');
} else {
  // If the checkbox is not checked, log this message to the console
  localStorage.setItem('reload','False');
}

function manualIva() {
  setTimeout(() => {
    // Get the checkbox element
    const checkbox = document.getElementById('iva');    
    // Check if the checkbox is checked or not
    if (checkbox.checked) {
      // If the checkbox is checked, log this message to the console
      console.log('The checkbox is checked.');
      revertModification();
    } else {
      // If the checkbox is not checked, log this message to the console
      console.log('The checkbox is not checked.');
      modifyTemplate();
    }
  }, 500);
//  if (sessionStorage.getItem('iva') === 'false') {
    // Code to execute when checkbox is checked
//    revertModification();
    // You can add any functionality here, like showing hidden elements, calling other functions, etc.
//  } else if (sessionStorage.getItem('iva') === 'true') {
    // Code to execute when checkbox is unchecked
//    modifyTemplate();
    // You can add any functionality here, like hiding elements, resetting values, etc.
//  } 
}

if (localStorage.getItem('reload') === 'False') {
  console.log('RELOAD');
  manualIva();
}
