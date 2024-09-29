
function SingUp(){


        $(document).ready(function() {

                // jQuery click event for the button
                $('#btn-submit-form').on('click', function(event) {
                    event.preventDefault(); // Prevent default form submission
    
                    // Get the email and password values
                    var user_email = $('#Email').val();
                    var user_password = $('#Password').val();
    
                    // Basic validation to check if email and password are provided
                    if (user_email === '' || user_password === '') {
                        alert('Please fill out both email and password fields.');
                        return; // Stop if validation fails
                    }
    
                    // Store the email and password in localStorage
                    localStorage.setItem('email', user_email);
                    localStorage.setItem('password', user_password);
    
                    // Redirect to appointment.html with a timestamp
                    window.location.href = "appointment.html?timestamp=" + new Date().getTime();
                });
    
            });


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