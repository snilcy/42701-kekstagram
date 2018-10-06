const colors = require(`colors/safe`);

const getCommandsList = (list) => {
  let result = [``];

  for (let item in list) {
    if (list.hasOwnProperty(item)) {
      result.push(` --${colors.gray(list[item].name)} — ${colors.green(list[item].description)}`
      );
    }
  }

  return result.join(`\n`);
};

module.exports = {
  name: `help`,
  description: `Печатает доступные команды`,
  execute(commands, type = `log`) {
    console[type](`Доступные команды: ${getCommandsList(commands)}`);
  }
};