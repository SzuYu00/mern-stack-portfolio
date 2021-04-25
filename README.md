# mern-stack-portfolio
MERN full stack website


npx create-react-app client
npm install mongoose express axios morgan concurrently -S
npm install -g nodemon //'-g' for global '--save-dev' for dependency
npm init -y // '-y' for yes to obtain packaage.json in STACK directory ; 
npm install dotenv // Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env https://www.npmjs.com/package/dotenv
[optional] npm install cors -S //resolve cors policy (access control for server from different origin/port), imported in server.js https://www.npmjs.com/package/cors
 ^in 'server.js' script "const cors = require('cors');", "app.use(cors());"
 ^alternatively in 'client/package.json' implement '"proxy": "http://localhost:<backend port number>"'



 npm install --save react-router-dom //in case of missing library
