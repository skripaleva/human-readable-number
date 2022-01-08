module.exports = function toReadable (number) {
  let numbers = ['zero', 'one', 'two', 'three', 'four' , 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
      'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20) return numbers[number];
    if (number < 100) return (number % 10 === 0) ? dozens[number/10] : dozens[Math.floor(number/10)] + ' ' + toReadable(number%10);
    if (number < 1000) return (number % 100 === 0) ? numbers[number/100] + ' hundred': numbers[Math.floor(number/100)] + ' hundred ' + toReadable(number%100);
};
