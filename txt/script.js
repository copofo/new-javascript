const result = document.getElementById("result");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", calculate);
});

function calculate(e) {
    const clickedButtonValue = e.target.innerText;

    if (clickedButtonValue === "=") {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = "Erro";
        }
    } else if (clickedButtonValue === "C") {
        result.value = "";
    } else {
        result.value += clickedButtonValue;
    }
}
