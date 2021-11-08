//form functions
function validateForm() {
    let x = document.forms["myForm"]["fname"]["lname"]["email"]["comments"].value;
    if (x == "") {
        alert("All fields must be filled out");
        return false;
    }
}