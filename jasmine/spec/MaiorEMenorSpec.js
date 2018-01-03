describe("MaiorEMenor", function() {
    
    it('should understand numbers in a non-sequential way', function() {
        
        var algorithm = new MaiorOuMenor();
        algorithm.find([5,15,7,9]);

        expect(algorithm.getBigger()).toEqual(15);
        expect(algorithm.getSmaller()).toEqual(5);

    });

    it('should understand numbers in ascending way', function() {
        
        var algorithm = new MaiorOuMenor();
        algorithm.find([5,6,7,8]);

        expect(algorithm.getBigger()).toEqual(8);
        expect(algorithm.getSmaller()).toEqual(5);

    });

    it('should understand numbers in descending way', function() {
        
        var algorithm = new MaiorOuMenor();
        algorithm.find([8,7,6,5]);

        expect(algorithm.getBigger()).toEqual(8);
        expect(algorithm.getSmaller()).toEqual(5);

    });

    it('should understand only one number on list', function() {
        
        var algorithm = new MaiorOuMenor();
        algorithm.find([8]);

        expect(algorithm.getBigger()).toEqual(8);
        expect(algorithm.getSmaller()).toEqual(8);

    });

});