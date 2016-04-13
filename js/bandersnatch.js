(function(ns) {
    'use strict';


    ns.Bandersnatch = function Bandersnatch (name, dob) {

        ns.Animal.call(this, name, dob);

        this.banderBabies = [];

    };

    ns.Bandersnatch.prototype = Object.create(ns.Animal.prototype);
    ns.Bandersnatch.prototype.constructor = ns.Bandersnatch;


    ns.Bandersnatch.prototype.birth = function birth(name) {
        var bander = new ns.Bandersnatch( name, Date.now() );
        this.banderBabies.push( bander );
        return bander;
    };

    ns.Bandersnatch.prototype.extendNeck = function extendNeck(meters) {
      if (!Number(meters)) {
          throw new TypeError('This is not a number!');
      }
        return this.name + ' can extend its neck ' + meters + ' meters in order to catch its prey';
    };

    ns.Bandersnatch.prototype.toString = function toString() {
        return this.name + ' the Bandersnatch was born in ' + this.dob.getFullYear();
    };

    window.zoo = ns;

})(window.zoo || {});
