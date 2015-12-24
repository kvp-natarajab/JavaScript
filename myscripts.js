	function validate_form()
	{

		
		var bl_first_name=validate_firstname();
		var bl_last_name=validate_lastname();
		var bl_gender=validate_gender();
		var bl_password=validate_password();
		var bl_repassword=validate_repassword();
		//var bl_email=validate_email();
		var bl_permanetaddr=validate_paddr();
		var bl_location=validate_location();
		var bl_condition=validate_condition();
		var bl_phone=validate_phone();
		//genders=document.getElementsByName("gender").value;
		if(bl_first_name&&bl_last_name&&bl_gender&&bl_password&&bl_repassword&&bl_permanetaddr&&bl_location&&bl_phone&&bl_condition){
			return true;
		}else{
			return false;
		}
	
	}


		function validate_firstname(fname){
			var fname=document.myForm.firstname.value;
			var theValue = document.getElementById("error_firstname");
			if(fname==""){
				theValue.classList.remove("errormsg");
				theValue.innerHTML="First name Should not be empty";
				return false;
			}else{
				theValue.classList.add("errormsg");
				return true;
			}
		}

	function validate_lastname(lname){
		var lname=document.myForm.lastname.value;
		var theValue = document.getElementById("error_lastname");
		if(lname==""){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="Value should not be empty";
			return false;
		}else{
			theValue.classList.add("errormsg");
			theValue.innerHTML="";
			return true;
		}
	}


	function validate_gender(){
		var theValue = document.getElementById("error_gender");
		if((document.myForm.gender[0].checked==false)&&(document.myForm.gender[1].checked==false)){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="You must select your gender";
			return false;
		}else{
			theValue.classList.add("errormsg");
			return true;
		}
	}

	function validate_password(){
		pass=document.myForm.password.value;
		var theValue = document.getElementById("error_password");
		var msg;
		
		if(pass==""){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="Value should not be empty";
			return false;
		}else if(pass.length<=8){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="Password must contains 8 characters"
		}{
			theValue.classList.add("errormsg");
			return true;
		}
	}

	function validate_repassword(){
		repass=document.myForm.repassword.value;
		var theValue = document.getElementById("error_repassword");
		if(repass==""||(pass!=repass)){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="Password does not match";
			return false;
		}else {
		
			theValue.classList.add("errormsg");
			return true;
		}
	}

	
	function validate_paddr(){
		var permanetAddr=document.myForm.permanetAddr.value;
		var theValue = document.getElementById("error_permanetAddr");
		if(permanetAddr==""){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="Value should not be empty";
			return false;
		}else{
			theValue.classList.add("errormsg");
			return true;
		}
	}

	function validate_location(){
		var theValue = document.getElementById("error_slctLocation");
		if(document.getElementById("slctLocation").selectedIndex==0){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="Please select your location";
			return false;
		}else{
			theValue.classList.add("errormsg");
			return true;
		}
	}

	function validate_phone()  
	{  
		var input=document.myForm.phone.value;
		
  		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 

  		var theValue = document.getElementById("error_phone");

  		if(isNaN(input)){
  			theValue.innerHTML="Contains characters";
  		}else if(input==""){
  			theValue.classList.remove("errormsg");
			theValue.innerHTML="Value should not be empty";
			return false;
  		}else if(input.value.test(phoneno)){ 
  			return true;
		}else{
			theValue.classList.add("errormsg");
			theValue.innerHTML="Invalid Phone Number";
			return false;
		}
	}  

	function validate_condition(){
		var theValue = document.getElementById("error_condition");
		if(document.getElementById("chkCondition").checked==false){
			theValue.classList.remove("errormsg");
			theValue.innerHTML="Please Accept terms and conditions";
			return false;
		}else{
			theValue.classList.add("errormsg");
			return true;
		}
	}
	