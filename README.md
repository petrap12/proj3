# Evaluation app
A course evaluation app

#### TODOs
- config file
- 4+ controllers each in own file
- 1 template directive
- Fix html header (references to script now local)
- Create a test version of scripts, each test file ending with Spec in its name **IMPORTANT**

## Requirements
- NPM command client
- GIT (for bower)

## Setup
- `npm -d install`
- `npm install -g bower` (only needed once, if you have done so before, not neccessary)
- `npm install -g grunt-cli` (only needed once, if you have done so before, not neccessary)
- `npm install -g karma-cli` (for karma/jasmine testing)
- `bower install`
- `grunt karma` (for karma/jasmine testing)
- `grunt setup`

## Includes
TODO

## Run
TOOD

## Grunt
`grunt` (default) executes the following 
- jshint

`grunt karma` executes the following 
- karma

`grunt setup` executes the following 
- jshint
- concat
- uglify
resulting in a minified app.min.js in /dist/

## Authors
- Auður Íris Ólafsdóttir
- Arnar Freyr Bjarnason
- Petra Pétursdóttir
