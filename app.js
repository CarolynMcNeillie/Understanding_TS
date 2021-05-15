/* Core Types
    - number
    - string
    - boolean
*/
function add(n1, n2, printResult, phrase) {
    if (printResult) {
        console.log(phrase ? phrase : '', n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = false;
add(number1, number2, printResult);
