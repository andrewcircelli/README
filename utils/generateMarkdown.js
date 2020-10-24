// function to generate markdown for README.md
function generateMarkdown(markdown) {
  return `# ${markdown.title}

  ## Description 

  ${markdown.description}

  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation 

  ${markdown.install}

  ## Usage 

  ${markdown.usage}
  
  ## Credits 

  ${markdown.credits}

  ## License
  ${markdown.license}

  ---

  ## Badges
  ![Generic badge](https://img.shields.io/badge/${markdown.language}-${markdown.length}-${markdown.color}.svg)

  `
}

module.exports = generateMarkdown;
