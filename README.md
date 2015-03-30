# skillsesh-ui

## Prerequisites

Make sure to have Node v0.10.x installed. For Windows you can get an installer [here](http://nodejs.org/dist/v0.10.38/). You'll also need git. [Github for Windows ](https://windows.github.com/) is useful but it might useful to actually have [Git](http://msysgit.github.io/) installed.

The development environment relies on a few command line tools. Pull those in first with npm:
```Bash
npm install -g browserify gulp bower node-sass
```
Open a terminal in the project directory and execute `npm install`. This will pull in all the tooling modules from npm as well as the app's javascript dependencies. 

You may now issue a few gulp commands:

### gulp
`$ gulp `

Build a complete public distributable. This creates a `/public' directory with all assets linked to `index.html`, ready to be served.

### gulp watch
`$ gulp watch`

Build a complete public distributable, initiate a live reload server, and watch for changes to `.scss`, `.js`, or 'jsx' files under the `/app` or '/sass' directories.

### gulp delete

Removes the `/public` directory from the file system
