const esModules = [
    'other_modules_based_on_your_needs',
    // but mainly those 4 bellow
    'query-string',
    'decode-uri-component',
    'split-on-first',
    'filter-obj',
  ];
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: esModules.length ? [`/node_modules/(?!${esModules.join('|')})`] : [],
}