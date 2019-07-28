## Cypress proof of concept 
````
1- npm init
2- npm install cypress --save-dev
3- add  "cypress:open": "cypress open" as script at package.json
4- implement test integration
5- run test --> npm run cypress:open
6- run test by terminal  --> npx cypress run --spec 'cypress/integration/weatunes/**/*'
If you want to use cucumber 
1- npm install --save-dev cypress-cucumber-preprocessor
2-Add it to your plugins:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
} 
`````
