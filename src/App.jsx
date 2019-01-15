import React, {Component} from 'react';
import {
    BrowserRouter
} from 'react-router-dom';
import
{
    Row
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';

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
                            <Content/>
                        </Row>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;