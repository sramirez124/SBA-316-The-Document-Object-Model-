const passWord = document.getElementById("inputPassword4").value;
const confirmPassword = document.getElementById("passwordConfirm").value;

function validateForm(){
    const passwordRequirements = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9]){6,12}$/;
    if (passwordRequirements.test(passWord) == false){
        console.log(passWord);
        console.log(passwordRequirements.test(passWord))
        window.confirm("Password Requirements not met: \n 1. At least one lowercase \n 2. At least one uppercase \n 3. At least one Numeric digit \n 4. Must have a length of 6 to 12 characters")
    }

    if (passWord != confirmPassword){
        window.confirm("Passwords did not match, please check that both fields match");
    }

    if (passwordRequirements.test(passWord) == true){
        window.confirm("All set! Click ok to proceed to the TODO List");


    }
}