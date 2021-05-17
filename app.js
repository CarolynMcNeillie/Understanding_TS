function combine(input1, input2, conversionType) {
    var result;
    if (conversionType === 'string') {
        result = input1.toString() + input2.toString();
    }
    else {
        result = +input1 + +input2;
    }
    console.log(result);
    return result;
}
var combinedAges = combine(37, 44, 'number');
var combinedNames = combine("McNeillie", "Taunton", 'string');
var combinedStringAges = combine(37, 44, 'string');
var combinedNumberNames = combine("McNeillie", "Taunton", 'number');
