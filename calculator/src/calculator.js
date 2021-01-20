
const charToNumber = (char) => {
    switch (char) {
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        default:
            return -1
    }
}
const convertToDecimal = (str) => {

    let number=0;
    if(str === 'IIII'){
        throw 'InvalidRomanNumber';
    }
    for(let i = 0; i < str.length; i++){
        const nextChar = str.charAt(i+1)
        const nextValue = charToNumber(nextChar)
        const currentValue = charToNumber(str.charAt(i))
        
        
        if(nextValue > currentValue){
            const substrac = nextValue - currentValue;
            number += substrac;
            i++;
        }else{
            number+=charToNumber(str.charAt(i))
        }
    }

  return number;
}

module.exports = {convertToDecimal, charToNumber}