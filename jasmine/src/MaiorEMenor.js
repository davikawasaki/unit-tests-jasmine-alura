function MaiorOuMenor() {
    var menor;
    var maior;
    var clazz = {
        find: function(nums) {
            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;
            nums.forEach(function(num) {
                if(num < menor) menor = num;
                if(num > maior) maior = num;
            });
        },
        getSmaller: function() { return menor; },
        getBigger: function() { return maior; }
    };

    return clazz;
};