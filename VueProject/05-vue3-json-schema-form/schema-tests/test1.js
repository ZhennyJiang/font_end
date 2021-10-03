const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const localize = require('ajv-i18n');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // format: 'test',
      test: false,
    },
    bar: {
      type: 'string',
    },
  },
  additionalProperties: false,
};
const ajv = new Ajv({ allErrors: true, jsonPointers: true }); // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv);

addFormats(ajv);

// ajv.addFormat('test', data => {
//   console.log(data, '=============================');
//   return data === 'hahaha';
// });
ajv.addKeyword('test', {
  validate(schema, data) {
    if (schema === true) {
      return true;
    } else return schema.length;
  },
});

// ajv.addKeyword({
//   keyword: 'test',
//   type: 'string',
// });
const validate = ajv.compile(schema);

// const data = {
//   name: 'jason@xxx.com',
//   bar: 'abc',
// };

const valid = validate({ name: 'js', bar: 'okk' });

if (!valid) {
  localize.zh(validate.errors);
  console.log(validate.errors);
}
