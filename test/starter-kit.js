'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-polymer-init-2-x-app:stater-kit', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/starter-kit'))
      .withPrompts({ns: 'zzz'})
      .toPromise();
  });

  it('creates files', () => {
    assert.file([
      'bower.json',
      'index.html',
      'manifest.json',
      'polymer.json',
      'README.md',
      'service-worker.js',
      'sw-precache-config.js',
      // 'images/favicon.ico',
      'src/zzz-app.html',
      'src/zzz-icons.html',
      'src/zzz-view1.html',
      'src/zzz-view2.html',
      'src/zzz-view3.html',
      'src/zzz-view404.html',
      'src/shared-styles.html',
      'test/zzz-view1.html',
      'test/index.html'
    ]);
  });
});
