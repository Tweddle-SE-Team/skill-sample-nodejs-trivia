var index = require('../index');
describe('The index module', () => {
  it('is defined', () => {
    assert(index);
  });
  it('defines a handler function', () => {
    assert(index.handler);
  });

});