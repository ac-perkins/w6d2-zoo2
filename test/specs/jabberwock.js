(function() {
    'use strict';

    var assert = chai.assert;

    suite('Jabberwock', function() {

      test('the zoo namespace exists', function() {
          assert.ok(window.zoo, 'the namespace exists');
      });

      test('create jabberwock with proper args', function() {

          var tim = new window.zoo.Jabberwock('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          assert.ok( tim instanceof window.zoo.Jabberwock, 'jabberwock objects are from Jabberwock' );
          assert.strictEqual(tim.age(), 33, 'Age is 33' );
          assert.strictEqual(tim.eatAdventurers(14), 'Tim can eat 14 adventurers');
          assert.strictEqual(tim.toString(), 'Beware the Jabberwock named Tim, my son! The jaws that bite, the claws that catch!', 'toString function works as expected');

      });

      test('return new Jabberwock with layEgg function', function() {
          var tim = new window.zoo.Jabberwock('Tim', 'September 4, 1982');
          var miguel = tim.layEgg('Miguel');


          assert.ok( miguel, 'tim exists' );
          assert.strictEqual(miguel.name, 'Miguel', 'Name in argument is what is expected');
          assert.ok(Date.now() - miguel.dob < 50, 'auto-assigned date is approximately correct');

      });

      test('return that Jabberwock has expired', function() {
          var tim = new window.zoo.Jabberwock('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          assert.strictEqual(tim.expire(), tim.isDead === true, 'Animal has expired');

      });

      test('Checking age on an expired Jabberwock returns an error', function() {
          var tim = new window.zoo.Jabberwock('Tim', 'September 4, 1982');
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

      test('Entering something than a number in the eatAdventurers function returns an error', function() {
          var tim = new window.zoo.Jabberwock('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          try {
            tim.eatAdventurers('mint julep');
            assert.ok(tim.eatAdventurers(154), 'This should not execute');
          } catch(err) {
            assert.strictEqual(err.message, 'This is not a number!', 'Not a number!');
            console.error(err);
          }

      });

      test('Giving a name to a Jabberwock that is not a string returns an error', function() {

          try {
            var tim = new window.zoo.Jabberwock(389, 'September 4, 1982');
            assert.ok(tim.eatAdventurers(1), 'This should not execute');
          } catch(err) {
            assert.strictEqual(err.message, 'Please give a name to your animal', 'Not a number!');
            console.error(err);
          }

      });

      test('Giving a non-valid date of birth to a Jabberwock returns an error', function() {

          try {
            var tim = new window.zoo.Jabberwock('Tim', 'what');
            assert.ok(tim.eatAdventurers(1), 'This should not execute');
          } catch(err) {
            assert.strictEqual(err.message, 'Please enter the date of birth in a valid format', 'Not a number!');
            console.error(err);
          }

      });

    });


})();
