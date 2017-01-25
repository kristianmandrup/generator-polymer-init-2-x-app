const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-init-2-x-app:el', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/el'))
      .withPrompts({
        name: 'x-foo'
      })
      .toPromise();
  });

  it('creates files', () => {
    assert.file([
      'src/x-foo/x-foo.html',
      'test/x-foo/x-foo_test.html'
    ]);
  });
});
