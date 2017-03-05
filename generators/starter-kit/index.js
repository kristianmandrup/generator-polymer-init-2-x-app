'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const glob = require('glob');

module.exports = Generator.extend({

  prompting: function() {
    const prompts = [
      {
        name: 'ns',
        type: 'input',
        message: `Application namespace, prefixed to all element names`,
        default: 'my',
      },
    ];

    return this.prompt(prompts).then((props) => {
      props.ns = props.ns.replace(/\W+/g, '-').toLowerCase();
      this.props = props;
    });
  },

  writing: function() {
    const ns = this.props.ns;

    const copyOptions = {
      globOptions: {ignore: '**/images/**/*'}
    };
    this.fs.copyTpl(`${this.templatePath()}/**/!(_)*`, this.destinationPath(), this.props, null, copyOptions);
    this.fs.copy(this.templatePath('images'), this.destinationPath('images'));

    glob(`${this.templatePath()}/**/_ns-*`, (err, matches) => {
      if (err) {
        this.log(chalk.bold.red(err));
        return;
      }

      const tmplPathLen = this.templatePath().length;
      for (const filename of matches) {
        // hydrate "_ns" in filenames, and remove leading slash (path should be relative to destination dir)
        const dest = filename.substring(tmplPathLen).replace('_ns-', `${ns}-`).replace(/^\//, '');
        this.fs.copyTpl(filename, dest, this.props);
      }
    });
  },

  install: function() {
    this.log(chalk.bold('\nProject generated!'));
    this.log('Installing dependencies...');
    this.installDependencies({
      npm: false,
      bower: true,
      yarn: true
    });
  },

  end: function() {
    this.log(chalk.bold('\nSetup Complete!'));
    this.log('Check out your new project README for information about what to do next.\n');
  }
});
