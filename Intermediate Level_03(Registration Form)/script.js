var enroll = document.getElementById("enroll");
enroll.addEventListener("click", displayDetails);

var reset = document.getElementById("reset");
reset.addEventListener("click", deleteDetails);

var row = 1;

function displayDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phn = document.getElementById("phn").value;
    var address = document.getElementById("address").value;
    var gender = document.getElementById("gender").value;
    var skills = document.getElementById("skills").value;

    if (!name || !email || !phn || !address || !gender || !skills) {
        alert("Please fill all the details");
        return;
    }

    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = email;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = phn;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = address;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = gender;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = skills;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onDelete(this)" id="del" type="button">Delete</a>`;
    
    row++;
}

function deleteDetails() {
    var name = document.getElementById("name").value='';
    var email = document.getElementById("email").value='';
    var phn = document.getElementById("phn").value='';
    var address = document.getElementById("address").value='';
    var gender = document.getElementById("gender").value='';
    var skills = document.getElementById("skills").value='';
}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("display").deleteRow(row.rowIndex);
    deleteDetails();
}
