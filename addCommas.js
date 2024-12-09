function addCommas(num) {
    if(typeof num !== 'number' && typeof number !== 'string')
        throw new TypeError('Input must be a number or a number written as a string')
    const str = String(num)

    const [integer, decimal] = str.split('.');
    const commaInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (decimal){
        return `${commaInteger}.${decimal}`
    } else {
        return commaInteger
    }
}

module.exports = addCommas;