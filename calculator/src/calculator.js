const convertToDecimal = () => {
 return 1
}

const charToNumber = (char) => {
    switch (char) {
        case 'I':
            return 1
            break;
        case 'II':
            return 2
            break;
        default:
            return -1
            break;
    }
}

module.exports = {convertToDecimal, charToNumber}