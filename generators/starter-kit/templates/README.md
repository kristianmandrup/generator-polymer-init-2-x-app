# Polymer App Toolbox - Starter Kit

[![Build Status](https://travis-ci.org/PolymerElements/polymer-starter-kit.svg?branch=master)](https://travis-ci.org/PolymerElements/polymer-starter-kit)

*NOTE: This template depends on [Polymer 2.0-preview](https://github.com/polymer/polymer/tree/2.0-preview),
which is not yet fully supported on all browsers. The newest version of Chrome is recommended.
It's a copy of the `2.0-preview` branch of
[PolymerElements/polymer-starter-kit](https://github.com/PolymerElements/polymer-starter-kit/tree/2.0-preview)
(commit [df29afd](https://github.com/PolymerElements/polymer-starter-kit/tree/df29afdabf5e2e11ca0dc46bd965189103e26cd9)).*

This template is a starting point for building apps using a drawer-based
layout. The layout is provided by `app-layout` elements.

This template, along with the `polymer-cli` toolchain, also demonstrates use
of the "PRPL pattern" This pattern allows fast first delivery and interaction with
the content at the initial route requested by the user, along with fast subsequent
navigation by pre-caching the remaining components required by the app and
progressively loading them on-demand as the user navigates through the app.

The PRPL pattern, in a nutshell:

* **Push** components required for the initial route
* **Render** initial route ASAP
* **Pre-cache** components for remaining routes
* **Lazy-load** and progressively upgrade next routes on-demand

### Migrating from Polymer Starter Kit v1?

[Check out our blog post that covers what's changed in PSK2 and how to migrate!](https://www.polymer-project.org/1.0/blog/2016-08-18-polymer-starter-kit-or-polymer-cli.html)

### Setup

##### Prerequisites

Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli

##### Initialize project from template

    mkdir <%= ns %>-app
    cd <%= ns %>-app
    polymer init starter-kit

### Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

    polymer serve --open


### Build

This command creates the build output in the `build/` directory:

    yarn build

*Note this project uses the `new-build-flags` branch of the `polymer-cli` repo,
which supports ES6 minification. The current beta release of `polymer-cli@next`
(0.18.0-alpha.8) fails when it tries to pipe ES6 through Uglify. This version
of `polymer-cli` can take a few seconds longer than usual to initally render
the results on polyfilled browsers.*

### Preview the build

This command serves `build/` at `http://localhost:8080`:

    polymer serve build

### Run tests

This command will run
[Web Component Tester](https://github.com/Polymer/web-component-tester) against the
browsers currently installed on your machine.

    polymer test

### Adding a new view

You can extend the app by adding more views that will be demand-loaded
e.g. based on the route, or to progressively render non-critical sections
of the application.  Each new demand-loaded fragment should be added to the
list of `fragments` in the included `polymer.json` file.  This will ensure
those components and their dependencies are added to the list of pre-cached
components.
