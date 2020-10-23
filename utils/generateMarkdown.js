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
  List your collaborators, if any, with links to their GitHub profiles.

  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.

  ## License
  ${markdown.license}

  ---

  ## Badges
  [![Generic badge](https://img.shields.io/badge/${markdown.language}-${markdown.length}-${markdown.color}.svg)]

  `
}

module.exports = generateMarkdown;
