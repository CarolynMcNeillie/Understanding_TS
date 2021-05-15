/* Core Types
    - number
    - string
    - boolean
*/

function add (n1: number, n2: number, printResult: boolean, phrase?: string) {
    if (printResult) {
            console.log(phrase ? phrase : '', n1 + n2)
    } else {
        return n1 + n2
    }
}

const number1 = 5
const number2 = 2.8
const printResult = false

add(number1, number2, printResult)