# generator-polymer-init-2-x-app [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Yeoman generators that scaffold templates for a [Polymer 2.0-preview](https://github.com/polymer/polymer/tree/2.0-preview) app

### Generators

#### `2.0-app` generator

*A blank application template*

**Usage:**

    mkdir my-app
    cd my-app
    polymer init 2-x-app

Given an app-name of "x-foo", this generator outputs the following directory structure:

    .
    ├── README.md
    ├── bower.json
    ├── index.html
    ├── manifest.json
    ├── package.json
    ├── src
    │   └── x-foo-app
    │       └── x-foo-app.html
    └── test
        └── x-foo-app
            └── x-foo-app_test.html


#### `2.0-el` generator

*A blank element template (to be used in the blank application template). Not an element-project template.*

**Usage:**

    cd my-app
    polymer init
    # select the `2.0-el` generator from the list

*NOTE: With [Polymer CLI #472](https://github.com/Polymer/polymer-cli/pull/472), you'd be able to run `polymer init 2-x-app:el`.*

Given an element-name of "x-el", this generator outputs the following directory structure:

    .
    ├── src
    │   └── x-el
    │       └── x-el.html
    └── test
        └── x-el
            └── x-el_test.html


#### `2.0-starter-kit` generator

*A starter application template, with navigation and "PRPL pattern" loading*

**Usage:**

    mkdir my-app
    cd my-app
    polymer init
    # select the `2.0-starter-kit` generator from the list

*NOTE: With [Polymer CLI #472](https://github.com/Polymer/polymer-cli/pull/472), you'd be able to run `polymer init 2-x-app:starter-kit`.*

Given a namespace of "zzz", this generator outputs the following directory structure:

    .
    ├── README.md
    ├── bower.json
    ├── images
    │   ├── favicon.ico
    │   └── manifest
    │       ├── icon-144x144.png
    │       ├── icon-192x192.png
    │       ├── icon-48x48.png
    │       ├── icon-512x512.png
    │       ├── icon-72x72.png
    │       └── icon-96x96.png
    ├── index.html
    ├── manifest.json
    ├── polymer.json
    ├── service-worker.js
    ├── src
    │   ├── zzz-app.html
    │   ├── zzz-icons.html
    │   ├── zzz-view1.html
    │   ├── zzz-view2.html
    │   ├── zzz-view3.html
    │   ├── zzz-view404.html
    │   └── shared-styles.html
    ├── sw-precache-config.js
    └── test
        ├── index.html
        └── zzz-view1.html


### Setup

##### Prerequisites

Install
[Polymer CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli)
and `generator-polymer-init-2-x-app` using
[npm](https://www.npmjs.com/) 
(we assume you have pre-installed [node.js](https://nodejs.org/)).

    npm install -g polymer-cli
    npm install -g generator-polymer-init-2-x-app


## License

MIT © [Tony Trinh](https://github.com/tony19)


[npm-image]: https://badge.fury.io/js/generator-polymer-init-2-x-app.svg
[npm-url]: https://npmjs.org/package/generator-polymer-init-2-x-app
[travis-image]: https://travis-ci.org/tony19/generator-polymer-init-2-x-app.svg?branch=master
[travis-url]: https://travis-ci.org/tony19/generator-polymer-init-2-x-app
[daviddm-image]: https://david-dm.org/tony19/generator-polymer-init-2-x-app.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/tony19/generator-polymer-init-2-x-app
[coveralls-image]: https://coveralls.io/repos/tony19/generator-polymer-init-2-x-app/badge.svg
[coveralls-url]: https://coveralls.io/r/tony19/generator-polymer-init-2-x-app
