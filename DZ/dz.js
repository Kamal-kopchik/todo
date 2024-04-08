const checkbox = document.querySelector(".input");
const output = document.querySelector(".output");

const checkboxData = {
    checked:'CHEKED',
    unchecked:'UNCHEKED',
    state:'state',
    flag:'flag'
}

const conditionCheckbox = (flag) =>{
    const status = JSON.parse(localStorage.getItem('state'))
    if (status) {
      output.textContent = checkboxData.checked;
    } else {
      output.textContent = checkboxData.unchecked;
    }
    if(flag) checkbox.checked = status
  }

checkbox.addEventListener("change", () => {
  localStorage.setItem(checkboxData.state, checkbox.checked);
  conditionCheckbox()
});

conditionCheckbox(checkboxData.flag)


