document.getElementById("calculate-button").onclick = function(){
	
    let val1 = parseInt(document.getElementById("elem-1").value);
    let val2 = parseInt(document.getElementById("elem-2").value);
    var NaN_case = "Digite número nas caixas vazias";
    if(isNaN(val1)) {
       
        document.getElementById("result").innerHTML= NaN_case;
    } else if(isNaN(val2)) {

        document.getElementById("result").innerHTML = NaN_case;
    } else {

        let choice = document.querySelector('input[name="operation"]:checked');
        let operation1 = choice.value;

        let result = getResult(val1, val2, operation1);
        document.getElementById("result").innerHTML = result;
    }
}

function getResult(num1, num2, operationx) {
    if(operationx === "+") {
        return num1 + num2;
    } else if (operationx === "-") {
        return num1 - num2;
    } else if (operationx === "*") {
        return num1 * num2;
    } else if (operationx === "/") {
        return num1 / num2;
    }
}
