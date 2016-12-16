/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-pdfmake',

  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import(app.bowerDirectory + '/pdfmake/build/pdfmake.js');
    app.import(app.bowerDirectory + '/pdfmake/build/vfs_fonts.js');
  }
};
