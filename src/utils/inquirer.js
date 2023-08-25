const inquirer = require('inquirer')

function make({
                choices,
                defaultValue,
                message = '请选择',
                type = 'list',
                require = true,
                mask = '*',
                validate,
                pageSize,
                loop,
              }) {
  const options = {
    name: 'name',
    default: defaultValue,
    message,
    type,
    require,
    mask,
    validate,
    pageSize,
    loop,
  };
  if (type === 'list') {
    options.choices = choices;
  }
  return inquirer.prompt(options).then(answer => answer.name);
}

function makeList(params) {
  return make({ ...params });
}

function makeInput(params) {
  return make({
    type: 'input',
    ...params,
  });
}

function makePassword(params) {
  return make({
    type: 'password',
    ...params,
  });
}

exports.makeList = makeList;
exports.makeInput = makeInput;
exports.makePassword = makePassword;