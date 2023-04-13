// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if(str[i] >= 'a' && str[i] <= 'z'){
			newStr += str[i];
		}
	}
	let left = 0, right = str.length - 1;
	while (left < right) {
		if(newStr[left] != newStr[right]){
			return false;
		}
		left6++;
		right--;
	}
	return true;
}
module.exports = palindrome
