const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-init-2-x-app:app', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'x-foo',
        elementName: 'x-foo-app'
      })
      .toPromise();
  });

  it('creates files', () => {
    assert.file([
      'bower.json',
      'manifest.json',
      'package.json',
      'README.md',
      'index.html',
      'src/x-foo-app/x-foo-app.html',
      'test/x-foo-app/x-foo-app_test.html'
    ]);
  });
});
