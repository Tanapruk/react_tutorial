# ReactJS Tutorial

To get the ReactJS running, you are required to go through a long process of setting it up.

##Setup Environment (Mac Machine)
1.install [Homebrew](http://brew.sh/)

> This is a package manager. It will facilitate downloading other programs without going through website browsing. Simply type `brew install <package>` and the program is in your machine.

2.`brew install node`

> ReactJS required NodeJS which is another JavaScript library. We use homebrew to get it installed.

3.`cd react_tutorial` to get inside the folder.

4.`npm install`

> This command will install all the required libraries listed under dependencies inside `react_tutorial/package.json`

````json
{
  "name": "intro-to-react",
  "version": "1.0.0",
  "dependencies": {
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.5.0",
    "react": "^15.1.0",
    "react-dom": "^15.1.0",
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"
  }
}
````

###Code Compiling
1.`webpack`

> This command will read `react_tutorial/webpack.config.js` file and output a file called `bundle.js`. The settings are as follows:

````
module.exports = {
  entry: './main.js',
  output: {
    publicPath: '/static/',
    path: 'static',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }]
   }
  }
  ````
`entry` is the path to the entry code file. Inside the output {}, it is the path where the output file will be.
Inside `loaders` the `test` forces the webpack to look for .js only. Use babel-loader as a code builder. The babel will look at `react_tutorial/.babelrc` for configurations. In this case, we set it to the JavaScript es2015 and React. `node_modules` is where our libraries are. We won't pack it to the `bundle.js`.

2.Open web browser and goto (http://localhost:8080/).

3.`./node_modules/.bin/webpack-dev-server --inline`

> This code will make the website run to the localhost. This makes us see live result after code editing.

