import React from 'react';
import blessed from 'blessed';
import {render} from 'react-blessed';

class Log extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			log: []
		}
	}

	render() {
		return (
			<box label="Log" width="70%" height="80%" border={{type: 'line'}} style={{border:{fg:'blue'}}}> 
				<text>AAAAAAAAAAAAAA</text>
				<text>AAAAAAAAAAAAAA</text>
				<text>AAAAAAAAAAAAAA</text>
				<text>AAAAAAAAAAAAAA</text>
			</box>
		);
	}
}

class Pipeline extends React.Component {
	render() {
		return(
			<box label="Pipeline Progress" left="70%" width="30%" height="80%" border={{type: 'line'}} style={{border:{fg:'blue'}}}></box>
		);
	}
}

class ActionBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { action: "none" };
	}
	render(){
		// Content will, in the future, be rendered conditionally
		let content = (
			<element>
				<button mouse align="center" valign="middle" width="50%" value="deploy" border={{type: 'line'}} style={{border:{fg:'red'}}}>Deploy</button>
				<button mouse align="center" valign="middle" width="50%" left="50%" value="salve" border={{type: 'line'}} style={{border:{fg:'green'}}}>Salve</button> 
			</element>
		);
		return(
			<box label="Actions" top="80%" width="99%" height="20%" border={{type: 'line'}} style={{border:{fg:'blue'}}}>
				{content}
			</box>
		);
	}
}

// Rendering a simple centered box
class App extends React.Component {
  render() {
    return (
			<element>
				<Log/>
				<Pipeline/>
				<ActionBox/>
			</element>
    );
  }
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed hello world'
});

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
const component = render(<App />, screen);
