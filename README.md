HTML5
	New Tags
	meta tags


CSS3
	Sass
	CSS Model
	Grid system

JavaScript
	Datatypes
	prototype
	closure
	classes
	call, apply & bind
	hoisting 
		variable and function

https://javascript.info/


DOM API

React

Functional Programming
	keeps data and function separate
	avoids state change and mutable data
	treats function as first-class citizen

Performance Improvement

JS trick questions

ES6 new features

Unit testing

React 

Redux

3 princeiples

1. Single Immutable State Tree
	first principle of redux - whole state of app as one JS object. 
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

Store
	- binds together the 3 priciples of Redux
	- holds current app state object
	- lets you dispatch actions
	- has a reducer that tells how state is updated with actions
	- has 3 important methods
	- 1. store.getState()
	  2. store.dispatch()
	  3. store.subscribe()
