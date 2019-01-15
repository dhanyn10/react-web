import React from 'react';
import
{
    Col,
    Card,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class Sidebar extends React.Component
{
    render()
    {
        return(
            <Col md="3">
                <Card>
                    <ListGroup>
                        <ListGroupItem>Dashboard</ListGroupItem>
                        <ListGroupItem>Member</ListGroupItem>
                        <ListGroupItem>Account</ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        );
    }
}

export default Sidebar;