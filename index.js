const _ = require('lodash');

const projects = ['Portfolio Site', 'Weather App', 'Task Tracker'];

console.log('My projects:');
_.forEach(_.sortBy(projects), (p) => console.log(`- ${p}`));
