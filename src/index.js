const uniqueNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                    'eleven', 'twelve', 'thirteen', 'twenty', 'thirty', 'hundred'];

module.exports = function toReadable (number) {
    if (number < 14 && number >= 0)
        return uniqueNumbers[number];
    let lastTwo = number % 100;
    let result = '';
    switch (Math.floor(lastTwo / 10)) {
        case 0:
        case 1:
        case 2:
            break;
        case 4:            
            result = 'for'
            break;
        case 5:
            result = 'fif'
            break;
        case 8:
            result = 'eigh'
            break;
        default:
            result = uniqueNumbers[Math.floor(lastTwo / 10)];
            break;
    }
    switch (Math.floor(lastTwo / 10)) {
        case 0:            
            if (lastTwo % 10 > 0)
                result = uniqueNumbers[lastTwo];
            break;
        case 1:            
            if (lastTwo < 14 && lastTwo > 0) {
                result = uniqueNumbers[lastTwo]; 
                break;
            }          
            switch (Math.floor(lastTwo % 10)) {
            case 4:            
                result = 'four'
                break;
            case 5:
                result = 'fif'
                break;
            case 8:
                result = 'eigh'
                break;
            default:
                result = uniqueNumbers[Math.floor(lastTwo % 10)];
                break;
            }
                result = result + 'teen';
            break;
        case 2:
            if (lastTwo % 10 > 0)
                result = 'twenty ' + uniqueNumbers[lastTwo % 10];
            else 
                result = 'twenty';
            break;
        case 3:
            if (lastTwo % 10 > 0)
                result = 'thirty ' + uniqueNumbers[lastTwo % 10];
            else 
                result = 'thirty';
            break;
        default:
            if (lastTwo % 10 > 0)
                result = result+ 'ty ' + uniqueNumbers[lastTwo % 10];
            else 
                result = result+ 'ty';
            break;
    }
    number = Math.floor(number / 100);
    if (number > 0) {
        result = uniqueNumbers[number] + ' hundred ' + result;
    }
    return result.trim();  
}