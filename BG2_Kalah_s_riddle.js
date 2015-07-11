/*

Kalah's Riddle
from Baldur's Gate 2

A princess is as old as the prince will be when the princess is twice as old
as the prince was when the princess' age was half the sum of their present age.

Options
1. The prince is 20 and the princess is 30.
2. The prince is 40 and the princess is 30.
3. The prince is 30 and the princess is 40.
4. The prince is 30 and the princess is 20.
5. They are both the same age.

*/


/*
   notes:

   The hard part is actually identifying the variables .

   The riddle is moving around the present, past and future and hides
   the prince and princess' ages in simple arithmetic maths

*/

// EASY WAY - READABLE

// The options give us the age to validate (which is the present)
var prince_present_age = 20, princess_precent_age = 30;

// Function to verify if answer is correct

function checkAnsToRiddle(prince_present_age, princess_present_age) {
  // The age difference between the prince and the princess
  var AGE_DIFF = prince_present_age - princess_present_age; // if negative then prince is younger
  // Start to break down riddle from end to start

  // Calculate ages in the past //

  // ... was (e.g. _past) half the sum of their _present_age
  var princess_past_age = ((prince_present_age + princess_present_age) / 2);
  /*  Now that we can get the prince age at that period
      ... as the prince was (_past) when the princess' age
  */
  var prince_past_Age = princess_past_age + AGE_DIFF;

  // Calculate ages in the future //

  // ...when (e.g. _future) the princess is twice as old
  var princess_future_age = 2 * prince_past_Age;
  // Now we can get the prince age at that period
  // ...as the prince will be
  prince_future_age = princess_future_age + AGE_DIFF;

  // Check if ...princess is as old as the prince
  if (princess_present_age === prince_future_age)
    // Correct
    return true;
  else
    // Nope!
    return false;
}



// SMART WAY - HARD TO READ

/* Idenifying variables in hard way


A princess is as old as the prince will be when the princess is twice as old
as the prince was when the princess' age was half the sum of their present age.

A princess is as old as... // var princess_present_age;
the prince will be... // var prince_future_age;
when the princess is... // var princess_future_age;
twice as old as the prince was // princess_future_age = 2 * prince_past_age
when the princess' age was // var princess_past_age;
half the sum of their present age. // princess_past_age = (princess_present_age + prince_present_age) / 2

*/

   function checkRiddle(prince_present_age, princess_present_age) {
     var princessCalculatedAge = (2 * (((princess_present_age + prince_present_age) / 2) + AGE_DIFF)) + AGE_DIFF;
     var princeCalculatedAge = princessCalculatedAge + AGE_DIFF;

     if(princessCalculatedAge === princess_present_age && princeCalculatedAge === prince_present_age)
       return true;
     else
       return false;
   }
