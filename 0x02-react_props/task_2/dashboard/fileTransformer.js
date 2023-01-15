const path = require('path');

module.exports = {
  process(src, filename, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(filename) + ';')};`,
    };
  },
};