let builderModule = require('../richtext-builder');

describe('The Rich Text Builder module', () => {
  it('is defined', () => {
    assert(builderModule);
  });
  let b;
  beforeEach(() => {
    b = builderModule.create();
  });
  it('defines a create function', () => {
    assert(builderModule.create, JSON.stringify(builderModule));
  });
  it('creates paragraphs with br', () => {
    assert.deepEqual(b.addParagraph('This is a paragraph').buildText(), '<br/>This is a paragraph');
  });
  it('creates line break br', () => {
    assert.deepEqual(b.addParagraph('This is a paragraph').addLineBreak().buildText(), '<br/>This is a paragraph<br/>');
  });
  it('creates bold ', () => {
    assert.deepEqual(b.addParagraph('This is a paragraph').addBold('this is bold').buildText(), '<br/>This is a paragraph <b>this is bold</b>');
  });
  it('creates italic ', () => {
    assert.deepEqual(b.addParagraph('This is a paragraph').addItalic('this is italic').buildText(), '<br/>This is a paragraph <i>this is italic</i>');
  });
  it('creates underlined ', () => {
    assert.deepEqual(b.addParagraph('This is a paragraph').addUnderline('this is underlined').buildText(), '<br/>This is a paragraph <u>this is underlined</u>');
  });
  it('creates font cases ', () => {
    assert.deepEqual(b
      .addSmallFont('this is small font')
      .addMediumFont('this is medium font')
      .addLargeFont('this is large font')
      .buildText(), '<font size="2">this is small font</font><font size="3">this is medium font</font><font size="7">this is large font</font>');
  });

});