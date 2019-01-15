import React from 'react';
import
{
    Col,
    Card,
    CardTitle,
    CardBody
} from 'reactstrap';

class Home extends React.Component
{
    render()
    {
        return(
            <Col md="9">
                <Card>
                    <CardTitle>Title</CardTitle>
                    <CardBody>This is body</CardBody>
                </Card>
            </Col>
        );
    }
}

export default Home;