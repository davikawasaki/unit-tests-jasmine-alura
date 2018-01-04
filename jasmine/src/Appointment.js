function Appointment(patient, proceedings, private, recurrence, date) {

    var clazz = {
        price : function() {
            if(recurrence) return 0;
            
            var finalPrice = 0;
            proceedings.forEach(function(proceeding) {
                if(proceeding == "x-ray") finalPrice += 55;
                else if(proceeding == "plaster") finalPrice += 32;
                else finalPrice += 25;
            });

            if(private) finalPrice *= 2;

            return finalPrice;
        },

        getPatient : function() { return patient; },
        getProceedings : function() { return proceedings; },
        isPrivate : function() { return private; },
        isRecurrence: function() { return recurrence; },
        getDate : function() { return date; }
    };

    return clazz;

}