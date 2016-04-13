(function(ns) {
    'use strict';


    ns.Jabberwock = function Jabberwock (name, dob) {

        ns.Animal.call(this, name, dob);

        this.jabberBabies = [];

    };

    ns.Jabberwock.prototype = Object.create(ns.Animal.prototype);
    ns.Jabberwock.prototype.constructor = ns.Jabberwock;


    ns.Jabberwock.prototype.layEgg = function layEgg(name) {
        var jabber = new ns.Jabberwock( name, Date.now() );
        this.jabberBabies.push( jabber );
        return jabber;
    };

    ns.Jabberwock.prototype.eatAdventurers = function eatAdventurers(num) {
        if (!Number(num)) {
            throw new ns.ZooError('We need a "NUMBER" of adventurers!');
        }
        return this.name + ' can eat ' + num + ' adventurers';
    };

    ns.Jabberwock.prototype.toString = function toString() {
        return 'Beware the Jabberwock named ' + this.name + ', my son! The jaws that bite, the claws that catch!';
    };

    window.zoo = ns;

})(window.zoo || {});
