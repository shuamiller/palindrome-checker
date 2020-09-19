function palindrome(str) {
    let nonAlphaNumRegex = /\W|_/g;
    str = str.toLowerCase();
    str = str.replace(nonAlphaNumRegex, '');
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
    }
    let reverseStr = arr.toString();
    reverseStr = reverseStr.replaceAll(',', '');
    if (str === reverseStr) {
        return true;
    } else {
        return false;
    }
}