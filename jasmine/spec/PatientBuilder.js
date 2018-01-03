// Test Data Builder: encapsulating data from Patient class
// Help test scenarios creation
function PatientBuilder() {
    var name = "Guilherme";
    var age = 28;
    var weight = 72;
    var height = 1.80;

    var clazz = {
        constructor : function() {
            return Patient(name, age, weight, height);
        },

        withAge : function(value) {
            age = value;
            return this;
        },

        withWeight : function(value) {
            weight = value;
            return this;
        },

        withHeight : function(value) {
            height = value;
            return this;
        }
    };

    return clazz;
}