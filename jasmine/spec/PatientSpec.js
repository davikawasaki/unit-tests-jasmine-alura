describe("Patient", function() {

    var guilherme;

    beforeEach(function() {
        guilherme = new PatientBuilder().withAge(28).constructor();
    });

    // Only one test for equivalence class (different scenarios)
    it("should evaluate imc", function() {
        expect(guilherme.imc()).toEqual(22.22222222222222);
    });

    it("should evaluate beatings", function() {
        expect(guilherme.beatings()).toEqual(28 * 365 * 24 * 60 * 80);
    });

});