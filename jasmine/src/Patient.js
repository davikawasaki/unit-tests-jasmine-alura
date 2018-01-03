function Patient(name, age, weight, height) {
    var clazz = {
        print : function() {
            alert(name + " has " + age + + " anos.");
        },

        beatings : function() {
            return age * 365 * 24 * 60 * 80;
        },

        imc : function() {
            return weight / (height * height);
        }
    };

    return clazz;
}