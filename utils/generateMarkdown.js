// function to generate markdown for README
function generateMarkdown(data) {
return `# Project Title 

${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation 

${data.installation}


## Usage 

${data.usage}


## Credits 

${data.credits}

## License

${data.license}

## Contributing

${data.contributing}

## Questions

${data.github}

${data.email}

## Tests

${data.tests}
`;
}
// console.log(string);

module.exports = generateMarkdown;
