function validate(){
        var firstname;
        var lastname;
        var gender;
        var phone_number;
        var disability
        var address;

        firstname = document.getElementById("FirstName").value;
        lastname = document.getElementById("Lastname").value;
        gender = document.getElementById("gender-type").value;
        phone_number = document.getElementById("phonenumber").value;
        disability = document.getElementById("disability").value;
        address = document.getElementById("address").value;
        alert("Thank you " + firstname +  " " + lastname + " for contacting us, Our representative will get back to you with the mobile number your provided which is  " + phone_number);
       
}


function SingUp(){

        var firstname;
        var lastname;
        var user_email;
        var user_password;

        user_email = document.getElementById("Email").value;
        user_password = document.getElementById("Password").value;

        localStorage.setItem('email', user_email);
        localStorage.setItem('password',user_password);
        window.location.href = "https://main--aesthetic-hamster-441e6d.netlify.app/appointment.html";
        
        alert("Success, please proceed to sign in Page to book Appointment");
}


function SignIn(){

        var user_email;
        var user_password;

        var get_Local_Storage_email;
        var get_Local_Stroage_password;

        user_email = document.getElementById("Email").value;
        user_password = document.getElementById("Password").value;


        get_Local_Storage_email = localStorage.getItem('email');
        get_Local_Stroage_password = localStorage.getItem('password');

        if(!get_Local_Storage_email || !get_Local_Stroage_password){
                alert("No such record found in database");
        }

        if(user_email.toString() == get_Local_Storage_email.toString() && user_password == get_Local_Stroage_password){
                window.location.href = "booking.html";
                alert("Login Successful, continue to Book Appointment!");
        }
        else{
                alert("Invalid user details");
        }

}


function bookAppointment(){
         var date_of_appointment;
         var reason_for_appointment;
         date_of_appointment = document.getElementById('date').value;
         reason_for_appointment = document.getElementById('reason_for_booking').value;

         if(date_of_appointment && reason_for_appointment){
            alert("you have been successfully scheduled for an appointment for the given date " + date_of_appointment + " please plan to attend.");
         }
       else{
                alert("unable to schedule you for an appointment");
         }
}