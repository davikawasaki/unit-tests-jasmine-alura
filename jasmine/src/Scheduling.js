function Scheduling() {

    var clazz = {
        new : function(appointment) {
            var oneDayMilli = 1000 * 60 * 60 * 24;
            var twentyDaysMilli = oneDayMilli * 20;
            var newDate = new Date(appointment.getDate().getTime() + twentyDaysMilli);

            while(newDate.getDay() == 0 || newDate.getDay() == 6) newDate = new Date(newDate.getTime() + oneDayMilli);

            var newAppointment = new Appointment(appointment.getPatient(), appointment.getProceedings(), appointment.isPrivate(), true, newDate);
            return newAppointment;
        }
    };

    return clazz;

}