function validateForm() {

    var firstName = document.getElementById('firstname-input');
    var lastName = document.getElementById('lastname-input');
    var phoneNumber = document.getElementById('phonenumber-input');
    var selectService = document.getElementById('select-service-form');

    firstName.classList.remove("input-error");
    lastName.classList.remove("input-error");
    phoneNumber.classList.remove("input-error");
    selectService.classList.remove("select-error");

    document.getElementById('first-error-box').innerHTML = ""
    document.getElementById('second-error-box').innerHTML = ""
    document.getElementById('third-error-box').innerHTML = ""
    document.getElementById('fourth-error-box').innerHTML = ""

    var value = selectService.options[selectService.selectedIndex].value;
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var isError = false;
    if (firstName.value == "") {
        document.getElementById('first-error-box').innerHTML = "Enter First Name";
        firstName.classList.add("input-error");
        isError = true;
    }else if (!firstName.value.match(letters)) {
        document.getElementById('first-error-box').innerHTML = "Enter Correct First Name";
        firstName.classList.add("input-error");
        isError = true;
    }
    if (lastName.value == "") {
        document.getElementById('second-error-box').innerHTML = "Enter Last Name";
        lastName.classList.add("input-error");
        isError = true;
    }else if(!lastName.value.match(letters)) {
        document.getElementById('second-error-box').innerHTML = "Enter Correct Last Name";
        lastName.classList.add("input-error");
        isError = true;
    }
    if (phoneNumber.value == "") {
        document.getElementById('third-error-box').innerHTML = "Enter Phone Number";
        phoneNumber.classList.add("input-error");
        isError = true;
    }else if(!phoneNumber.value.match(numbers)) {
        document.getElementById('third-error-box').innerHTML = "Enter Correct Phone Number";
        phoneNumber.classList.add("input-error");
        isError = true;
    }else if(phoneNumber.value.length > 12){
        document.getElementById('third-error-box').innerHTML = "Enter Correct Phone Number";
        phoneNumber.classList.add("input-error");
        isError = true;
    }
    if (value == "") {
        document.getElementById('fourth-error-box').innerHTML = "Select Service";
        selectService.classList.add("select-error");
        isError = true;
    }
    return !isError;
  }