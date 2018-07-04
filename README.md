# Frankly Frontend

## HTML5
	New Tags
	meta tags


## CSS3
	Sass
	CSS Model
	Grid system

## JavaScript
	Datatypes
	prototype
	closure
	classes
	call, apply & bind
	hoisting 
		variable and function

https://javascript.info/


## DOM API

## React

## Functional Programming
	keeps data and function separate
	avoids state change and mutable data
	treats function as first-class citizen

## Performance Improvement

## JS trick questions

## ES6 new features

## Unit Testing JavaScript

### What is unit test?

	* Unit = unit of work
	* Isolated and independent
	* Unit tests are code too
	* Write unit testable code
	* DRY
	* Single Responsibility
	* Functional programming (Remember?)
	* Goal: make your tests * readable, maintainable, trustworthy
	* Whenever possible use TDD approach

### Frameworks and Libraries

	Unit Testing Frameworks
	**Jasmine, AVA, Mocha, Qunit, Jest**
	
	Jasmin 
		* One of the most popular frameworks
		* Provide everything o-o-t-b
		* Assertions, spies and mocks
	Mocha
		* Arguably most used
		* Assertions, spies and mocks via other libs
	
	Assertion libraries
		* Chai.js
		* Expect.js
		* Should.js


#### mocha
	* Is a test framework
	* Runs on node and browser
	* Choose your own assertion, spies and mock library

#### chai
	* Assertion library
	* BDD/Assert
	* For node and browser
	* 3 assertion styles – should, expect and assert
	* Should and expect are BDD style
	* Both should and expect use same chainable language
	* Differ in the way assertion is initially constructed
	* Assert  style is exposed through assert interface

#### sanon
	* Eliminates complexity by allowing you to create test-doubles
	* Sinon splits test-doubles into three parts
	* Spies 
		Offer information about function call w/o affecting their behaviour
	* Stubs
		Same as spies but completely replace the function
		Stubs may throw exception, return a specific value etc
	* Mocks
		make replacing whole objects easier by combining both spies and stubs

##### Spies
	* Simplest part of sinon
	* Other functionalities builds  on them
	* Primary use – gather information about functions
	* Used to verify things like whether function is called or not

##### Stubs
	* In practice, you might not use spies very often. You’re more likely to need a stub
	* Instead of just spying it replaces the function
	* Replacing Ajax or other external calls which make tests slow and difficult to write
	* Triggering different code paths depending on function output
	* Testing unusual conditions, for example what happens when an exception is thrown?

##### Mocks
	* Mocks are a different approach to stubs
	* They are primarily useful if you need to stub more than one function from a single object.
	* Unlike spies and stubs, mocks have assertions built-in

#### Jest 

	* Used and recommended by Facebook for React apps
	* Snapshot testing for UI 
	* Can be used with enzyme (by airbnb)
	* Zero configuration 
	* Fast 
	* Coverage report
	* https://facebook.github.io/jest


### References

https://github.com/mawrkus/js-unit-testing-guide

https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

https://www.sitepoint.com/unit-test-javascript-mocha-chai/

https://github.com/npatro/javascript-unit-testing-with-mocha

https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71

https://medium.com/the-web-tub/mocha-chai-js-unit-testing-for-es6-with-istanbul-code-coverage-11b2a141a446

https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/

https://github.com/mawrkus/js-unit-testing-guide


## React 

## Redux

### 3 principles

	1. Single Immutable State Tree
		first principle of redux * whole state of app as one JS object. 
		Everything that changes date or state of the ui should be part of one state tree.

	2. Actions
		An action plane js object describing the change.
		A state is read-only, only way to change it by dispatching an action.
		A plane JS object describing in minimal way.
		It can be intiated by user action or network request.

	3. Reducer Function (pure functions)
		State mutation in the app needs to be described as pure mutation.
		It takes the previous state and action being dispatched and returns next state of the application.
		This function is called reducer and it has be pure.
	
Redux
createStore() method to create the store.

### Store
	* binds together the 3 priciples of Redux
	* holds current app state object
	* lets you dispatch actions
	* has a reducer that tells how state is updated with actions
	* has 3 important methods
		1. store.getState()
	  	2. store.dispatch()
	  	3. store.subscribe()
