var expect = chai.expect;

// WRITE YOUR TESTS HERE!

// Test for replaceWith

describe('replaceWith', function() {
  it('returns a string', function() {
    expect(replaceWith("awesome", "e", "z")).to.be.a('string');
  });
  it('replaces second param with third', function() {
    expect(replaceWith("awesome", "e", "z")).to.equal('awzsomz');
  });
  it('is case-sensitive', function() {
    expect(replaceWith("Awesome", "A", "b")).to.equal('bwesome');
  });
  it('returns original string if second param is wrong', function() {
    expect(replaceWith("awesome", "A", "b")).to.equal('awesome');
  });
});

// Test for expand

describe('expand', function() {
  it('returns an array', function() {
    expect(expand([1,2,3],3)).to.be.an('array');
  });
  it('multiples in length', function() {
    expect(expand([1,2,3],3).length).to.equal([1,2,3].length * 3);
  });
  it('returns multipled array', function() {
    expect(expand([1,2,3],3)).to.have.ordered.members([1,2,3,1,2,3,1,2,3]);
  });
});

// Test for acceptNumbersOnly

describe('acceptNumbersOnly', function() {
  it('returns a boolean', function() {
	expect(acceptNumbersOnly(1,"foo")).to.be.a('boolean');
  });
  it('recognizes NaN', function() {
	expect(acceptNumbersOnly(NaN)).to.equal(false);
  });
  it('accepts only numbers', function() {
	expect(acceptNumbersOnly(true,{},[])).to.equal(false);
  });
  it('returns true if every param is a number', function() {
	expect(acceptNumbersOnly(1,2,3,4,5,8,54)).to.equal(true);
  });
});

// Test for mergeArrays

describe('mergeArrays', function() {
  it('returns an array', function() {
    expect(mergeArrays([1,2,3],[3])).to.be.an('array');
  });
  it('accepts only arrays', function() {
    expect(mergeArrays([1,2,3],3)).to.be.a('string');
  });
  it('merges arrays', function() {
	expect(mergeArrays([2,1],[3,4])).to.eql([2,1,3,4]);
  });
});

// Test for mergeObjects

describe('mergeObjects', function() {
  var obj1= {
    name: "Foo",
    num: 33
  };
  
  var obj2 = {
    test: "thing",
    num: 55
  };
  
  it('returns an object', function() {
    expect(mergeObjects(obj1,obj2)).to.be.an('object');
  });
  it('accepts only objects', function() {
    expect(mergeObjects(obj1,3)).to.be.a('string');
  });
  it('merges objects', function() {
	expect(mergeObjects(obj1,obj2)).to.eql(
	  {
		name: 'Foo',
		test: 'thing',
		num: 55
	  }
	);
  });
});