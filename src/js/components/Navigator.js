import React, {Component} from 'react';
import {connect} from 'react-redux';
import dayjs from 'dayjs';
import {setDate} from "../store/actions/handleDate";

class Navigator extends Component {


    handleClickPrevButton = () => {
        this.props.setDate(-1);
    };

    handleClickNextButton = () => {
        this.props.setDate(1);
    };

    render() {
        const {currentDate} = this.props;

        return (
            <div>
                <button onClick={this.handleClickPrevButton}>Prev</button>
                <div>{dayjs(currentDate).format('YYYY-MM-DD')}</div>
                <button onClick={this.handleClickNextButton}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentDate: state.date.currentDate
    }
};

export default connect(mapStateToProps, {setDate})(Navigator);