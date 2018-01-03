describe("Appointment", function() {

    it("shouldn't charge anything if it's a recurrence appointment", function() {
        var guilherme = new Patient("Guilherme", 28, 72, 1.80);
        var appointment = new Appointment(guilherme, [], true, true);

        expect(appointment.price()).toEqual(0);
    });

    it("shouldn't charge 25 for each normal proceeding", function() {
        var guilherme = new Patient("Guilherme", 28, 72, 1.80);
        var appointment = new Appointment(guilherme, ["proc1", "proc2"], false, false);

        expect(appointment.price()).toEqual(50);
    });

    it("shouldn't charge specific price depending on proceeding", function() {
        var guilherme = new Patient("Guilherme", 28, 72, 1.80);
        var appointment = new Appointment(guilherme, ["normal", "x-ray", "normal", "plaster"], false, false);

        expect(appointment.price()).toEqual(25 + 55 + 25 + 32);
    });

    it("shouldn't charge 100 for private with two normal proceedings", function() {
        var guilherme = new Patient("Guilherme", 28, 72, 1.80);
        var appointment = new Appointment(guilherme, ["normal", "normal"], true, false);

        expect(appointment.price()).toEqual(100);
    });

    it("shouldn't charge 174 for private with two special proceedings", function() {
        var guilherme = new Patient("Guilherme", 28, 72, 1.80);
        var appointment = new Appointment(guilherme, ["x-ray", "plaster"], true, false);

        expect(appointment.price()).toEqual((55 + 32) * 2);
    });

});