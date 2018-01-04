describe("Scheduling", function() {

    var guilherme;
    var scheduling;

    beforeEach(function() {
        guilherme = new PatientBuilder().constructor();
        scheduling = new Scheduling();
    });

    it("should schedule recurrence after 20 days", function() {
        var appointment = new Appointment(guilherme, [], false, false, new Date(2014, 7, 1));
        var newAppointment = scheduling.new(appointment);

        expect(newAppointment.getDate().toString()).toEqual(new Date(2014, 7, 21).toString());
    });

    it("should skip weekends", function() {
        var appointment = new Appointment(guilherme, [], false, false, new Date(2014, 5, 30));
        var newAppointment = scheduling.new(appointment);

        expect(newAppointment.getDate().toString()).toEqual(new Date(2014, 6, 21).toString());
    });

});