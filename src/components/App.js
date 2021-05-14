import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
			message:''
		}
	}

	clickHandler(){
		this.setState({
			message:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
		})
	}
	

    render() {
    	return(
    		<div id="main">
				<p id="para">{this.state.message}</p>
					<button id="click" onClick={this.clickHandler.bind(this)}>Click me</button> 
    		</div>
    	);
    }
}


export default App;

