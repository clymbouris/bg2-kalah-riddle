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


   notes:

   The hard part is actually identifying the variables.

   The riddle is moving around the present, past and future and hides
   the prince and princess' ages in simple arithmetic maths

*/

/* Idenifying variables from words


A princess is as old as the prince will be when the princess is twice as old
as the prince was when the princess' age was half the sum of their present age.

A princess *is* as old as... // var princess_present_age;
the prince *will be*... // var prince_future_age;
*when* the princess is... // var princess_future_age;
twice as old as the prince *was* // princess_future_age = 2 * prince_past_age
when the princess' age *was* // var princess_past_age;
half the sum of their present age. // princess_past_age = (princess_present_age + prince_present_age) / 2

*/

function checkRiddleAns(prince_present_age, princess_present_age) {
     // The following covers Option 4 - If both are equal age then only one number is passed as an argument
     if(prince_present_age === undefined) {
        prince_present_age = princess_present_age;
     }
     else if(princess_present_age === undefined) {
       princess_present_age = prince_present_age;
     }
     var AGE_DIFF = prince_present_age - princess_present_age; // if negative then prince is younger
     var princessCalculatedAge = (2 * (((princess_present_age + prince_present_age) / 2) + AGE_DIFF)) + AGE_DIFF;
     var princeCalculatedAge = princessCalculatedAge + AGE_DIFF;

     // Verify if the equations are true
     if(princessCalculatedAge === princess_present_age && princeCalculatedAge === prince_present_age)
       return true;
     else
       return false;
}

checkRiddleAns(20, 30); // false
checkRiddleAns(40, 30); // false
checkRiddleAns(30, 40); // true
checkRiddleAns(30, 20); // false
checkRiddleAns(20); // false
