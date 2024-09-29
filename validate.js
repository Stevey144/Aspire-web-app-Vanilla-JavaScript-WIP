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