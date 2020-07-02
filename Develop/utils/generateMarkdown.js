// function to generate markdown for README

const string = `# Project Title 

${"data.title"}

## Description 

${"data.description"}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation 

${"data.installation"}


## Usage 

${"data.usage"}


## Credits 

${"data.credits"}

## License

${"license"}


## Badges

${"license"}

## Contributing

${"contributing"}

## Tests

${"tests"}


`

function generateMarkdown(data) {
return string
}
// console.log(string);

module.exports = string;
