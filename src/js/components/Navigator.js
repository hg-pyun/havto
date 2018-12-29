import React, {Component} from 'react';
import {connect} from 'react-redux';

class Navigator extends Component {

    render() {
        const {currentDate} = this.props;

        return (
            <div>
                <button>Left</button>
                <div>{currentDate}</div>
                <button>Right</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentDate: state.date.currentDate
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);