const _ = require('lodash');

const BR = '<br/>';

class Builder {

  constructor() {
    this.text = []
  }
  addParagraph(s) {
    // body...
    this.text.push(BR)
    this.text.push(BR)
    this.text.push(s)
    return this;
  }
  addBold(s) {
    // body...
    this.text.push(` <b>${s}</b>`);
    return this;
  }
  addBoldParagraph(s) {
    // body...
    this.addParagraph();
    this.text.push(`<b>${s}</b>`);
    return this;
  }
  addItalic(s) {
    // body...
    this.text.push(` <i>${s}</i>`);
    return this;
  }
  addUnderline(s) {
    // body...
    this.text.push(` <u>${s}</u>`);
    return this;
  }
  addLineBreak() {
    this.text.push(BR);
    return this;

  }


  addSmallFont(s) {
    this.text.push(`<font size="2">${s}</font>`);
    return this;
  }
  addMediumFont(s) {
    this.text.push(`<font size="3">${s}</font>`);
    return this;
  }
  addLargeFont(s) {
    this.text.push(`<font size="7">${s}</font>`);
    return this;
  }

  buildText() {
    return this.text.join('');
  }
}
module.exports = {
  create: function() {
    return new Builder();
  }
}