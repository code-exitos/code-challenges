
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
        default:
            return -1
    }
}
const convertToDecimal = (str) => {
    let number=0;
    for(let i = 0; i < str.length; i++){
        const nextChar = str.charAt(i+1)
        if(nextChar === 'X' || nextChar === 'V'){
            number-=2
        }
        number+=charToNumber(str.charAt(i))
    }

  return number;
}

module.exports = {convertToDecimal, charToNumber}