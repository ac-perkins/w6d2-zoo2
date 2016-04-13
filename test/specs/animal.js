(function() {
    'use strict';

    var assert = chai.assert;

    suite('Animal', function() {

      test('the zoo namespace exists', function() {
          assert.ok(window.zoo, 'the namespace exists');
      });

      test('create animal with proper args', function() {

          var tim = new window.zoo.Animal('Tim', 'September 4, 1982');
          // var dob = new Date(1982, 9 , 4);

          assert.ok( tim, 'tim exists' );
          assert.ok( tim instanceof window.zoo.Animal, 'animal objects are from Animal' );
          assert.strictEqual(tim.age(), 33, 'Age is 33' );

      });

      test('Giving a name to a Animal that is not a string returns an error', function() {

          try {
            new window.zoo.Animal(383249, 'September 4, 1982');
            assert.ok(false, 'This should not execute');
          } catch(err) {
            assert.strictEqual(err.message, 'Please give a name to your animal', 'Not a number!');
            console.error(err);
          }

      });

      test('Giving a non-valid date of birth to a Animal returns an error', function() {

          try {
            new window.zoo.Animal('Tim', 'what');
            assert.ok(false, 'This should not execute');
          } catch(err) {
            assert.strictEqual(err.message, 'Please enter the date of birth in a valid format', 'Not a number!');
            console.error(err);
          }

      });

    });



})();
