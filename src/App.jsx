import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import
{
    Container,
    Row
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import Home from './Home.jsx';

class App extends Component
{
    render()
    {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                    <div className="container-fluid">
                        <Row>
                            <Sidebar/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                            </Switch>
                        </Row>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;