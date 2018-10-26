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
    expect(expand([1,2,3],3)).to.equal([1,2,3,1,2,3,1,2,3]);
  });
});