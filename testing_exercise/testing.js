function replaceWith(str, letter1, letter2) {
	let strArr = str.split('');
	
	let newStr = strArr.map(function(letter, index) {
		if (letter === letter1) {
			return letter2;
		}
		return letter;
	}).join('');
	
	return newStr;
}

function expand(arr, num) {
	let newArr = [];
	
	while (num > 0) {
		newArr = newArr.concat(arr);
		num--;
	}
	
	return newArr;
}

function acceptNumbersOnly() {
	let args = [...arguments];
	
	let allAreNumbers = args.every(function(val) {
		return (typeof val === 'number') && !isNaN(val);
	});
	
	return allAreNumbers ? true : false;
}

function mergeArrays(arr1, arr2) {
	return (Array.isArray(arr1) && Array.isArray(arr2)) ? arr1.concat(arr2) : 'please, input only arrays';
}

function mergeObjects(obj1, obj2) {
	for (let i=0; i < arguments.length; i++) {
		let item = arguments[i];
		if (!(typeof item === 'object' && !Array.isArray(item) && item !== null)) {
			return 'please input only objects';
		}
	}
	
	let newObj = {};
	
	for (let key in obj1) {
		newObj[key] = obj1[key];
	}
	
	for (let key in obj2) {
		newObj[key] = obj2[key];
	}
	
	return newObj;
}