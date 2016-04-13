(function(ns) {
    'use strict';


    ns.Animal = function Animal (name, dob) {
        if (typeof name !== 'string') {
            throw new TypeError('Please give a name to your animal');
        }

        this.dob = new Date(dob);

        if (this.dob.toString() === 'Invalid Date')  {
            throw new TypeError('Please enter the date of birth in a valid format');
        }

        if (name) { this.name = name; }
        this.name = name;


    };


    ns.Animal.prototype.age = function age() {
        if (this.isDead) {
            throw new Error('This animal is dead');
        }
        return Math.floor( (Date.now() - this.dob) / 1000 / 60 / 60 / 24 / 365.25 );
    };

    ns.Animal.prototype.expire = function expire() {
        return (this.isDead = true);
        // return dead;
    };

    ns.Animal.prototype.name = 'Larry';

    window.zoo = ns;

})(window.zoo || {});
