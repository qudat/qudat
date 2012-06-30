// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
 function unhide(divID, id) {
	if ($("div#" + divID).is(":visible")) {
		$("div#" + divID).hide();
		$("a#" + id).text('Read More');
	} else {
		$("div#" + divID).show();
		$("a#" + id).text('Read Less');
	}
 }
 
 function nameVal(){
	var name = $("#contact input[name=name]").val();
	if (name == '' || name.length < 3) {
		$("#contact input[name=name]").css("border-color", "red");
		$("#nameError").text("name is blank or less than 3 characters");	
	} else {
		$("#contact input[name=name]").css("border-color", "green");
		$("#nameError").text("");	
	}
}

function messageVal(){
	var message = $("#contact textarea[name=message]").val();
	if (message == "" || message == "message") {
		$("#contact textarea[name=message]").css("border-color", "red");
		$("#messageError").text("message is blank or unchanged, please send me a unique message");
	} else {
		$("#contact textarea[name=message]").css("border-color", "green");
		$("#messageError").text("");
	}
}

 function emailVal(){
	var email = $("#contact input[name=email]").val();
	var atSign = email.indexOf("@");
	var dotSign = email.lastIndexOf(".");
		if (atSign < 1 || dotSign < atSign+2 || dotSign+2 >= email.length){
			$("#contact input[name=email]").css("border-color", "red");
			$("#emailError").text("email is missing something");
		} else {
			$("#contact input[name=email]").css("border-color", "green");
			$("#emailError").text("");
		}
 }
 
 function removeText(input_name){
	if ($("#contact input[name="+input_name+"]").val() == input_name) {
		$("#contact input[name="+input_name+"]").val("");
	}
 }
 
 function removeMessageText(){
	if ($("#contact textarea[name=message]").val() == "message") {
		$("#contact textarea[name=message]").val("");
	}
 }
 
 function checkSubmit(){
	if ($("#contact input[name=name]").val() == "" || $("#contact input[name=name]").val() == "name") {
		$("#submitError").text("please enter your name");
	}
	else if ($("#contact input[name=email]").val() == "" || $("#contact input[name=email]").val() == "email") {
		$("#submitError").text("please enter your email");
	}
	else if ($("#contact textarea[name=message]").val() == "" || $("#contact textarea[name=message]").val() == "message") {
		$("#submitError").text("please enter a unique message");
	}
	else { window.location = "http://neurosnap.net/contact.php?submit=1&name="+$("#contact input[name=name]").val()+"&email="+$("#contact input[name=email]").val()+"&message="+$("#contact textarea[name=message]").val(); }
 }