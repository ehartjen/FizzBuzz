function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        displayData(fbArray);
    } else {
        alert("you must enter an integer")
    }

}


function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push("FizzBuzz");
        } else if (i % fizzValue == 0) {
            returnArray.push("Fizz");

        } else if (i % buzzValue == 0) {
            returnArray.push("Buzz");

        } else {
            returnArray.push(i);
        }
    }





    return returnArray;
}

function displayData(fbArray) {

    let tableBody = document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = " ";

    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[index];
        rowCols[1].textContent = fbArray[index + 1];
        rowCols[2].textContent = fbArray[index + 2];
        rowCols[3].textContent = fbArray[index + 3];
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);


    }




}