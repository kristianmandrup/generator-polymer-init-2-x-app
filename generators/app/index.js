'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');

module.exports = Generator.extend({
  initializing: function () {
    // Yeoman replaces dashes with spaces. We want dashes.
    this.appname = this.appname.replace(/\s+/g, '-');
  },

  prompting: function () {
    let _this = this;
    let prompts = [
      {
        name: 'name',
        type: 'input',
        message: `Application name`,
        default: this.appname,
      },
      {
        type: 'input',
        name: 'elementName',
        message: `Main element name`,
        default: (answers) => `${answers.name}-app`,
        validate(name) {
          let nameContainsHyphen = name.includes('-');
          if (!nameContainsHyphen) {
            _this.log('\nUh oh, custom elements must include a hyphen in '
              + 'their name. Please try again.');
          }
          return nameContainsHyphen;
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Brief description of the application',
      },
    ];
    // typings is out of date
    return this.prompt(prompts).then((props) => {
      this.props = props;
      this.props.classname = _dashToTitleCase(this.props.elementName);
    });
  },

  writing: function () {
    let elementName = this.props.elementName;
    this.fs.copyTpl(`${this.templatePath()}/**/?(.)!(_)*`, this.destinationPath(), this.props);
    this.fs.copyTpl(this.templatePath('src/_element/_element.html'), `src/${elementName}/${elementName}.html`, this.props);
    this.fs.copyTpl(this.templatePath('test/_element/_element_test.html'), `test/${elementName}/${elementName}_test.html`, this.props);
  },

  install: function () {
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

function _dashToTitleCase(dash) {
  const camel = dash.indexOf('-') < 0 ? dash : dash.replace(/-[a-z]/g,
    function(m) {
      return m[1].toUpperCase();
    }
  );
  return camel.charAt(0).toUpperCase() + camel.substr(1);
}
