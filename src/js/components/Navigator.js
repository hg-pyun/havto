import React, {Component} from 'react';

class Navigator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button>Left</button>
                <div>여긴 날짜영역</div>
                <button>Right</button>
            </div>
        );
    }
}

export default Navigator