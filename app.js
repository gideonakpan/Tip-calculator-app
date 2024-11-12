document.addEventListener("DOMContentLoaded", () => {
    // Get the bill input
    const billInput = document.getElementById("bill");
    const tipResult = document.getElementById("tip-result");
    const totalResult = document.getElementById("total-result");

    
    // Get the tip buttons and custom tip input
    const tipButtons = document.querySelectorAll(".tip-button");
    const customTipInput = document.querySelector(".custom-tip-input");

    let tipButton;
    let selectedTipValue = null;
    let tip = "";
    let amount = "";
  
    // Get the people input
    const peopleInput = document.querySelector("input[name='people']");
  
    // Get the reset button
    const resetButton = document.querySelector(".button-reset");
  
     // Function to handle tip selection from buttons
  function selectTip(button) {
    // Clear any custom tip input value
    customTipInput.value = '';
    
    // Remove selected state from other buttons
    tipButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Add selected state to the clicked button
    button.classList.add('selected');
    
    // Set the selectedTipValue to the button's text content (removing % sign)
    selectedTipValue = parseFloat(button.textContent);
  }

  function calcalateTip() {
    tip = "";
    tip = ((selectedTipValue/100)* billInput.value)/peopleInput.value;
    let finaltip = tip.toFixed(2);
    tipResult.textContent = finaltip;
  }

  function calcalateAmount() {
    amount = "";
    amount = billInput.value/peopleInput.value;
    let result = tip + amount;
    let finalamount = result.toFixed(2)
    totalResult.textContent = finalamount;
  }
 


  // Event listeners for tip buttons
  tipButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if(!billInput.value && !peopleInput.value) {
            // alert();
            document.getElementById("input-label_bill").style.display = "block";
            document.getElementById("input-label_people").style.display = "block";
        }
        else if(!billInput.value) {
            // alert();
            document.getElementById("input-label_bill").style.display = "block";
        } 
        else if(!peopleInput.value) {
            document.getElementById("input-label_people").style.display = "block";
        } else{
            selectTip(event.target);
            calcalateTip();
            calcalateAmount();
            document.getElementById("input-label_bill").style.display = "none";
            document.getElementById("input-label_people").style.display = "none";
        }
      
    });
  });

  // Event listener for custom tip input
  customTipInput.addEventListener("input", () => {
    if(!billInput.value && !peopleInput.value) {
        document.getElementById("input-label_bill").style.display = "block";
        document.getElementById("input-label_people").style.display = "block";
    }
    else if(!billInput.value) {
        document.getElementById("input-label_bill").style.display = "block";
    } 
    else if(!peopleInput.value) {
        document.getElementById("input-label_people").style.display = "block";
    } else{
        document.getElementById("input-label_bill").style.display = "none";
        document.getElementById("input-label_people").style.display = "none";
        // Clear the selected state from all buttons when custom input is used
        tipButtons.forEach(btn => btn.classList.remove('selected'));

        // Set the selectedTipValue to the custom input value (if valid number)
        selectedTipValue = parseFloat(customTipInput.value) || 0;
        calcalateTip();
        calcalateAmount();
    }
    
  });

  
    // Event listener for reset button
    resetButton.addEventListener("click", () => {
      billInput.value = "";
      customTipInput.value = "";
      peopleInput.value = "";
      selectedTipValue = "";
      totalResult.textContent = "$0.00";
      tipResult.textContent = "$0.00";
      document.getElementById("input-label_bill").style.display = "none";
      document.getElementById("input-label_people").style.display = "none";
    });
  });
  