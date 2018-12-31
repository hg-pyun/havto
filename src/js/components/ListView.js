import React, {Component} from 'react';
import {connect} from 'react-redux';

class ListView extends Component {

    componentDidMount() {

    }

    render() {
        const renderList = (data) => {
            console.log(data);
            return (
                <ul>
                    {data.map((item, index) => <li key={index}>{item.contents}</li>)}
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

export default connect(mapStateToProps)(ListView);