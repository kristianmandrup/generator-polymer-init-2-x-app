# generator-polymer-init-2-x-app [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> Yeoman generators that scaffold templates for a [Polymer 2.0.0-rc.1](https://github.com/Polymer/polymer/releases/tag/v2.0.0-rc.1) app.

> *This is a **temporary** project until the Polymer CLI and Polymer Starter Kit projects fully transition to Polymer 2.0.*

### Quick Start

 1. Install
[Polymer CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli)
and `generator-polymer-init-2-x-app` using
[npm](https://www.npmjs.com/) or `yarn`.

        npm install -g polymer-cli@next      # 0.18.0-pre.10 or newer
        npm install -g generator-polymer-init-2-x-app

 2. Create a starter-kit:

        mkdir psk
        cd psk
        polymer init 2-x-app:starter-kit

 3. Build the app, and open a browser to it:

        polymer build
        polymer serve -o build/default


### Generators

The following generators can be found when running Polymer CLI's `init` command:

```shell
$ polymer init
? Which starter template would you like to use? 
❯ 2.0-app - (2.0 preview) blank application template 
  2.0-el - (2.0 preview) blank element template 
  2.0-starter-kit - (2.0 preview) starter application template
```

To skip the menu prompt, you can use the internal generator name in the `init` command, which do not match the names shown in the `init` menu. Refer to the generator usages below.

#### `2.0-app` generator

*A blank application template*

> **NOTE**: The `polymer-cli` (`v0.18.0-pre.10`) now supports a 2.0 application template. Use that instead.

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

*A blank element template (to be used in the blank application template). Not a standalone element-project template.*

**Usage:**

    cd my-app
    polymer init 2-x-app:el

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
    polymer init 2-x-app:starter-kit

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


## License

MIT © [Tony Trinh](https://github.com/tony19)


[npm-image]: https://badge.fury.io/js/generator-polymer-init-2-x-app.svg
[npm-url]: https://npmjs.org/package/generator-polymer-init-2-x-app
[travis-image]: https://travis-ci.org/tony19/generator-polymer-init-2-x-app.svg?branch=master
[travis-url]: https://travis-ci.org/tony19/generator-polymer-init-2-x-app


