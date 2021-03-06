# How to use the [go-api](https://github.com/IFRCGo/go-api)?

This repository contains a web app which showcases examples of code. Examples are in Python, JavaScript,
PowerBI and Tableau.

## Requirements

-   [Node v12](https://nodejs.org/en/download/)

## Installation

-   Create a local clone of this repository using

    `git clone https://github.com/IFRCGo/how-to-use-the-go-api.git`

-   From the root folder of the cloned repository, install the application
    using,

    `npm install`

-   Serve the app using,

    `ionic serve`

-   The app should now be accessible via your browser at http://localhost:8100.

## Folder Structure

`/` contains the [README](./README.md), [package.json](./package.json) and other
config files.

`/src` contains all the Ionic-React files required to build the app.

-   `/src/assets` contains files containing the examples and supported
    languages in JSON format.

`/python` contains the Python implementation of the examples. The python files
in this folder can be used to generate the browser embedded version of the code
using `python example1.py`.

`/powerbi` contains the PowerBI implementation of the examples. In the future,
the contents of this folder should be merged into
[`examples.json`](/src/assets/examples.json).

`/public` contains the HTML and static assets which are used in the Ionic-React
interface.

## Deployment

To publish the latest code,

1. Make sure your changes are committed into the [`master`](/tree/master)
   branch.
2. Triple check if the code works on your local and the changes do not break the
   application. Do this by reviewing the code commits since the last publish and
   viewing their effects on the interface via your browser.
3. Once you are certain that the code can be deployed, run `npm run deploy` from
   the root folder in the repository.
