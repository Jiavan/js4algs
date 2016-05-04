/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	s = s.trim().toLowerCase();
	if (s === '') {
		return true;
	}

	var i = 0, arr = [];
	for (i = 0; i < s.length; i++) {
		if ((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
			(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)) {
			arr.push(s[i]);
		}
	}

	for (i = 0; i < s.length / 2; i++) {
		if (arr[i] === arr[arr.length - i - 1]) {
			continue;
		}
		return false;
	}
	return true;
};