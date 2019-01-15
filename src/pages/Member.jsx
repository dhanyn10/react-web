import React from 'react';
import
{
    Button,
    Col,
    Card, CardBody,
    Form, FormGroup, Label, Input
} from 'reactstrap';

class Member extends React.Component
{
    render()
    {
        return(
            <Col md="9">
                <Card>
                    <CardBody>
                        <Form method="post">
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" name="name" placeholder="name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password" placeholder="password"/>
                            </FormGroup>
                            <Button color="success" size="sm">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Member;