// function passing in liscense as an arg
// validate lisense exists
// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.gitub}

  ## Project Name

  ${data.projectName}
`;
}

module.exports = generateMarkdown;
