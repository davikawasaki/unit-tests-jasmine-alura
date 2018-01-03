describe("Patient", function() {

    // Only one test for equivalence class (different scenarios)
    it("should evaluate imc", function() {
        var guilherme = new Patient("Guilherme", 28, 72, 1.82);
        expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
    });

    it("should evaluate beatings", function() {
        var guilherme = new Patient("Guilherme", 28, 72, 1.82);
        expect(guilherme.beatings()).toEqual(28 * 365 * 24 * 60 * 80);
    });

});