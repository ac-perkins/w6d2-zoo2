(function() {
    'use strict';

    var assert = chai.assert;

    suite('Bandersnatch', function() {

      test('the zoo namespace exists', function() {
          assert.ok(window.zoo, 'the namespace exists');
      });

      test('create Bandersnatch with proper args', function() {

          var tim = new window.zoo.Bandersnatch('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          assert.ok( tim instanceof window.zoo.Bandersnatch, 'jabberwock objects are from Bandersnatch' );
          assert.strictEqual(tim.age(), 33, 'Age is 33' );
          assert.strictEqual(tim.extendNeck(14), 'Tim can extend its neck 14 meters in order to catch its prey');
          assert.strictEqual(tim.toString(), 'Tim the Bandersnatch was born in 1982', 'toString function works as expected');

      });

      test('return new Bandersnatch with birth function', function() {
          var tim = new window.zoo.Bandersnatch('Tim', 'September 4, 1982');
          var miguel = tim.birth('Miguel');


          assert.ok( miguel, 'miguel exists' );
          assert.strictEqual(miguel.name, 'Miguel', 'Name in argument is what is expected');
          assert.ok(Date.now() - miguel.dob < 50, 'auto-assigned date is approximately correct');

      });

      test('return that Bandersnatch has expired', function() {
          var tim = new window.zoo.Bandersnatch('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          assert.strictEqual(tim.expire(), tim.isDead === true, 'Animal has expired');

      });

      test('Checking age on an expired Bandersnatch returns an error', function() {
          var tim = new window.zoo.Bandersnatch('Tim', 'September 4, 1982');
          tim.expire();

          assert.ok( tim, 'tim exists' );
          try {
            tim.age();
            assert.ok(false, 'booooo');
          } catch(err) {
            assert.strictEqual(err.message, 'This animal is dead', 'DEAD!');
            console.error(err);
          }

      });

      test('Enterting something than a number in the extendNeck function returns an error', function() {
          var tim = new window.zoo.Bandersnatch('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          try {
            tim.extendNeck('spartacus');
            assert.ok(tim.extendNeck(71), 'Tim can extend its neck 71 meters in order to catch its prey');
          } catch(err) {
            assert.strictEqual(err.message, 'This is not a number!', 'Not a number!');
            console.error(err);
          }

      });

      test('Giving a name to a Bandersnatch that is not a string returns an error', function() {

          try {
            var tim = new window.zoo.Bandersnatch(383249, 'September 4, 1982');
            assert.ok(tim.extendNeck(1), 'This should not execute');
          } catch(err) {
            assert.strictEqual(err.message, 'Please give a name to your animal', 'Not a number!');
            console.error(err);
          }

      });

      test('Giving a non-valid date of birth to a Bandersnatch returns an error', function() {

          try {
            var tim = new window.zoo.Bandersnatch('Tim', 'what');
            assert.ok(tim.extendNeck(476), 'This should not execute');
          } catch(err) {
            assert.strictEqual(err.message, 'Please enter the date of birth in a valid format', 'Not a number!');
            console.error(err);
          }

      });


    });



})();
