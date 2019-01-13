import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchList} from '../store/actions/handleFetch';

class ListView extends Component {

    componentDidMount() {
        this.props.fetchList();
    }

    render() {
        const renderList = (data) => {
            return (
                <ul>
                    {data.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            )
        };

        return (
            <div>
                {renderList(this.props.listData)}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        listData: state.list.listData
    }
};

export default connect(mapStateToProps, {fetchList})(ListView);