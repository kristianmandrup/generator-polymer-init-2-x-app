'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-polymer-init-2-x-app:el', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/el'))
      .withPrompts({
        name: 'x-foo'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'src/x-foo/x-foo.html',
      'test/x-foo/x-foo_test.html'
    ]);
  });
});
