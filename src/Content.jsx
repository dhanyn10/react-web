import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import {
    Col
} from 'reactstrap';
import Member from './pages/Member.jsx';

class Content extends React.Component
{
    render()
    {
        return(
            <Col md="9">
                <Switch>
                    <Route exact path="/member" component={Member}/>
                </Switch>
            </Col>
        );
    }
}

export default Content;