function addColumn() {
  //get the data from the fields and then add the data to the table
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var emailCell = row.insertCell(0);
    var passwordCell = row.insertCell(1);
    var addressCell = row.insertCell(2);

    emailCell.innerHTML = email;
    passwordCell.innerHTML = password;
    addressCell.innerHTML = address;


}

