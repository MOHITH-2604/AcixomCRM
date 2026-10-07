function addCustomer() {
    let name = prompt("Customer name:");
    let email = prompt("Email:");
    let phone = prompt("Phone:");

    if (!name || !email || !phone) {
        alert("Please enter all details");
        return;
    }

    let table = document.querySelector("table");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = email;
    row.insertCell(2).innerText = phone;
    row.insertCell(3).innerText = "Active";

    document.getElementById("count").innerText++;
}