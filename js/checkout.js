
// Exercise 6
function validate() {
	var error = 0;

	// Get the form DOM
	let form = document.getElementsByClassName("form")[0];

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email
	// I also added the is-valid style if the input is correct. Not just the is-invalid asked when the input doesn't match.

	// NAME
	fName.classList.remove("is-invalid");
	fName.classList.remove("is-valid");
	if(fName.value == "" || !fName.value.match(/^([A-Za-zÀ-ÖØ-öø-ÿ]{3,})$/)){
		error++;
		fName.classList.add("is-invalid");
	} else {
		fName.classList.add("is-valid");
	}

	// EMAIL
	fEmail.classList.remove("is-invalid");
	fEmail.classList.remove("is-valid");
	if(fEmail.value == "" || !( fEmail.value.match(/^(.{3,})$/) && fEmail.value.match(/^([A-Za-z0-9_]+@[A-Za-z]+\.[A-Za-z]+)$/) )){
		error++;
		fEmail.classList.add("is-invalid");
	} else {
		fEmail.classList.add("is-valid");
	}

	// ADDRESS
	fAddress.classList.remove("is-invalid");
	fAddress.classList.remove("is-valid");
	if(fAddress.value == "" || !fAddress.value.match(/^(.{3,})$/)){
		error++;
		fAddress.classList.add("is-invalid");
	} else {
		fAddress.classList.add("is-valid");
	}

	// LAST NAME
	fLastN.classList.remove("is-invalid");
	fLastN.classList.remove("is-valid");
	if(fLastN.value == "" || !fLastN.value.match(/^([A-Za-zÀ-ÖØ-öø-ÿ]{3,})$/)){
		error++;
		fLastN.classList.add("is-invalid");
	} else {
		fLastN.classList.add("is-valid");
	}
	
	// PASSWORD
	fPassword.classList.remove("is-invalid");
	fPassword.classList.remove("is-valid");
	// The length condition has been set from 4 to 8, as it's set in the html input attributes. Thats why this doesn't follow the min 3 char condition said in the exercice 7.
	if(fPassword.value == "" || !( fPassword.value.match(/^([A-Za-z0-9]{4,8})$/) && fPassword.value.match(/[0-9]/) && fPassword.value.match(/[A-Za-z]/) )){
		error++;
		fPassword.classList.add("is-invalid");
	} else {
		fPassword.classList.add("is-valid");
	}

	// PHONE
	fPhone.classList.remove("is-invalid");
	fPhone.classList.remove("is-valid");
	// The length condition has been set to exact 9, as it's said in the error message in the html. Thats why this doesn't follow the min 3 char condition said in the exercice 7.
	if(fPhone.value == "" || !fPhone.value.match(/^([0-9]{9})$/)){
		error++;
		fPhone.classList.add("is-invalid");
	} else {
		fPhone.classList.add("is-valid");
	}

	// Alert messages
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
