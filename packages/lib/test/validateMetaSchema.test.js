const { readYAMLFile } = require('@supermodel/file');
const validateMetaSchema = require('../src/validateMetaSchema');

test('validate correct meta schema', () => {
  const schema = readYAMLFile(
    __dirname + '/../fixtures/basic/SimpleSchema.yaml',
  );
  expect(() => validateMetaSchema(schema)).not.toThrow();
});

test('validate incorrect meta schema', () => {
  const schema = readYAMLFile(
    __dirname + '/../fixtures/basic/SimpleSchemaInvalid.yaml',
  );
  expect(() => validateMetaSchema(schema)).toThrow();
});
