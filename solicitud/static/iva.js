// Function to apply modifications
function modifyTemplate() {
    moneyTitle10 = document.querySelector('.moneytitle-10');
    moneyTitle11 = document.querySelector('.moneytitle-11');
    ivaTitle4 = document.querySelector('.ivatitle-4');
    totalTitle4 = document.querySelector('.totaltitle-4');
    moneyTitle10Child = moneyTitle10.children[0];
    ivaTitle4Child = ivaTitle4.children[0];
    totalTitle4Child = totalTitle4.children[0];
//Extract data:
    moneyTitle10Classes = moneyTitle10.classList;
    moneyTitle10ChildClass = moneyTitle10Child.classList;
    moneyTitle10Content = moneyTitle10Child.innerText;
    totalTitle4Classes = totalTitle4.classList;
    totalTitle4ChildClass = totalTitle4Child.classList;
    totalTitle4Content = totalTitle4Child.innerText;

//Apply modifications:
// Set classes and content in moneyTitle11 and ivaTitle4:
    moneyTitle11.classList.add(...moneyTitle10Classes);
    moneyTitle11.children[0].classList.add(...moneyTitle10ChildClass);
    moneyTitle11.children[0].innerText = moneyTitle10Content;
    ivaTitle4.children[0].classList.add(...totalTitle4ChildClass);
    ivaTitle4.children[0].innerText = totalTitle4Content;

//Remove originals:
    moneyTitle10.parentNode.removeChild(moneyTitle10);
    totalTitle4.parentNode.removeChild(totalTitle4);
    localStorage.setItem('iva', 'false');
  }
  
  // Function to revert modifications
  function revertModification() {
    ivaTitle4Parent = document.querySelector('.ivatitle-4').parentNode;
    moneyTitle11Parent = document.querySelector('.moneytitle-11').parentNode;

    moneyTitle10 = document.createElement('div');
    moneyTitle10.classList.add(...moneyTitle10Classes);
    moneyTitle10Child = document.createElement('div');
    moneyTitle10Child.classList.add(...moneyTitle10ChildClass);
    moneyTitle10Child.innerText = moneyTitle10Content;

    totalTitle4 = document.createElement('div');
    totalTitle4.classList.add(...totalTitle4Classes);
    totalTitle4Child = document.createElement('div');
    totalTitle4Child.classList.add(...totalTitle4ChildClass);
    totalTitle4Child.innerText = totalTitle4Content;

    ivaTitle4Parent.insertBefore(moneyTitle10, document.querySelector('.ivatitle-4'));
    moneyTitle10.appendChild(moneyTitle10Child);
    moneyTitle11Parent.insertBefore(totalTitle4, document.querySelector('.moneytitle-11'));
    totalTitle4.appendChild(totalTitle4Child);

    moneyTitle11.classList.remove(...moneyTitle10Classes);
    moneyTitle11.children[0].classList.remove(...moneyTitle10ChildClass);
    moneyTitle11.children[0].innerText = '';
    ivaTitle4.children[0].innerText = 'IVA 16%';
    localStorage.setItem('iva', 'true');
  }
  