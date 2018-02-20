const notes = {
	'1': {
		note: 'Match the below package.json and npm install',
		'package.json': {
			"name": "counter",
		  "version": "0.0.1",
		  "private": true,
		  "devDependencies": {
		    "enzyme": "^2.8.2",
		    "react-scripts": "^1.0.2",
		    "react-test-renderer": "^15.6.1"
		  },
		  "dependencies": {
		    "prop-types": "^15.5.10",
		    "react": "^15.5.0",
		    "react-dom": "^15.5.0",
		    "react-redux": "^5.0.5",
		    "redux": "^3.5.2"
		  },
		  "scripts": {
		    "start": "react-scripts start",
		    "build": "react-scripts build",
		    "eject": "react-scripts eject",
		    "test": "react-scripts test"
		  }
		}
	},
	'2': {
		note: "In root file (i.e. 'index.js' ) of React app, import the following:",
		imports: {
			'1': "import { createStore } from 'redux' ",
			'2': "import React from 'react' ",
			'3': "import (name of function or functions) from './reducers' ",
			'4': "any other necessary components"
		}
	},
	'3': {
		note: "Create a constant 'store' and to it pass the function 'createStore(name of function).'  The argument in the 'createStore()' function must be the function (or functions, after they are combined) from the './reducers' file",
		example: "const store = createStore(function)"
	},
	'4': {
		
	}
}