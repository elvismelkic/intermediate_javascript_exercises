function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = [];
  this.family = [];
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.toString = function() {
  return this.fullName() + ', Favorite Color: ' + this.favoriteColor
         + ', Favorite Number: ' + this.favoriteNumber;
};

Person.prototype.addToFamily = function(member) {
  if (member instanceof Person && this.family.indexOf(member) == -1) {
    this.family.push(member);
  }
  
  return this.family.length;
}

Array.prototype.map = function(fn) {
  newArr = [];
  
  for (let i=0; i < this.length; i++) {
    let val = this[i];
    let index = this.indexOf(this[i]);
    let arr = this;
    newArr.push(fn.call(null, val, index, arr));
  }
  
  return newArr;
}

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

Function.prototype.bind = function(thisArg) {
  let outerArgs = [...arguments].slice(1);
  let bla = this;
  
  return function() {
    return bla.apply(thisArg, outerArgs.concat([...arguments]));
  }
}