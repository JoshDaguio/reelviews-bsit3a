import React, {Component} from "react";
import MenuBar from "../src/Menu/MenuBar";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
        	currentRoute: '/home', // Default header text
    	};
    }
    
      	handleRouteChange = (route) => {
        this.setState({ currentRoute: route });
    };
    
    render() {
        const {username} = this.props;
        return (
			<MenuBar username={username} />
		);	  
    }

}

export default App