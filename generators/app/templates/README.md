# \<<%= name %>\>

<%= description %>

*NOTE: This template depends on [Polymer 2.0-preview](https://github.com/polymer/polymer/tree/2.0-preview),
which is not yet fully supported on all browsers. The newest version of Chrome is recommended.*

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ yarn build
```

*Note this project uses the `new-build-flags` branch of the `polymer-cli` repo,
which supports ES6 minification. The current beta release of `polymer-cli@next`
(0.18.0-alpha.8) fails when it tries to pipe ES6 through Uglify. This version
of `polymer-cli` can take a few seconds longer than usual to initally render
the results on polyfilled browsers.*

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
