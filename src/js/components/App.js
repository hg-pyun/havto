import React, {Component} from 'react';
import ListView from "./ListView";
import Navigator from "./Navigator";

class App extends Component {

    render() {
        return (
            <div>
                <Navigator/>
                <ListView/>
            </div>
        );
    }
}

export default App;