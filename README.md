# Frontend

## HTML5
	New Tags
	meta tags


## CSS3
	How CSS works
	CSS Specificity
		
		The Cascade (The C in the CSS)
		* Process of combining different stylesheets and resolving conflict between different CSS rules and declarations when multiple rules apply to an element.
		* User agent styles (default styles)
		* Styles from the Author
		* Styles from User (changes inside the browser)

		How?
		* Importance > Specificity > Source Order
		* Importance
			1. User !important declarations
			2. Author !important declarations
			3. Author declarations
			4. User declarations
			5. Default browser declarations
			Same Importance?
		* Specificity
			1. Inline styles
			2. IDs
			3. Classes, pseudo-classes, attribute
			4. Elements, pseudo-elements

			Example: 
			specificity.html
		* Source Order
			The last declaration in the code will override all other declarations and will be applied.
		(Inline Styles, IDs, Classes, Elements)
		(#,#,#,#)
		Summary:

		* !important declaration has highest priority
		* User !imporatnt as a last resource
		* Inline stylesheet have priority over external stylesheets
		* A selector with 1 ID is more specific than one with 1000 classes
		* Univesal selector (*) has no specificity value (0, 0, 0, 0)
		* Rely more on specificity than on the order of the selector (exception 3rd party stylesheets)




	Sass
	CSS Model
	Grid system

## JavaScript
	Datatypes
	prototype
	functions
		* 
	closure
	Emergin javaScript
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
* DRY (do not repeat)
* Single Responsibility
* Functional programming (Remember?)
* Goal: make your tests _readable, maintainable, trustworthy_
* Whenever possible use TDD approach

### Frameworks and Libraries

**Unit Testing Frameworks**
* Jasmine
* AVA
* Mocha
* Qunit
* Jest etc..

**Assertion libraries**
* Chai.js
* Expect.js
* Should.js

Jasmin 
* One of the most popular frameworks
* Provide everything o-o-t-b
* Assertions, spies and mocks

#### mocha
* Arguably most used
* Assertions, spies and mocks via other libs
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
* first principle of redux * whole state of app as one JS object. 
* Everything that changes date or state of the ui should be part of one state tree.

2. Actions
* An action plane js object describing the change.
* A state is read-only, only way to change it by dispatching an action.
* A plane JS object describing in minimal way.
* It can be intiated by user action or network request.

3. Reducer Function (pure functions)
* State mutation in the app needs to be described as pure mutation.
* It takes the previous state and action being dispatched and returns next state of the application.
* This function is called reducer and it has be pure.
	
**Redux - createStore() method to create the store.**

### Store
* binds together the 3 priciples of Redux
* holds current app state object
* lets you dispatch actions
* has a reducer that tells how state is updated with actions
* has 3 important methods
	1. store.getState()
  	2. store.dispatch()
  	3. store.subscribe()
