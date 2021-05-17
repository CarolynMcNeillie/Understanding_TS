function combine(input1: (number | string), input2: (number | string), conversionType: 'string' | 'number') {
    let result;
    if (conversionType === 'string') {
        result = input1.toString() + input2.toString()
    } else {
        result = +input1 + +input2
    }

    console.log(result)
    return result
}

const combinedAges = combine(37, 44, 'number')
const combinedNames = combine("McNeillie", "Taunton", 'string')
const combinedStringAges = combine(37, 44, 'string')
const combinedNumberNames = combine("McNeillie", "Taunton", 'number')