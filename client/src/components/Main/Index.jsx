import React from 'react';
import {Link} from 'react-router-dom';


class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>First component <Link to={`/events`}>events</Link></div>
        )
    }
}

export default Index;


