import React from 'react';

import {
   Form,
    Col,
    Button
} from 'react-bootstrap';


export class HornForm extends React.Component {




    render() {
        return (
            <div>
              
                <Form onSubmit={this.props.handlesubmit}>
                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Select  onChange ={(event) => {this.props.SelecttionHornFilter(event);}}>
                            <option value="">select...</option> 
                            <option value="1"> One horn</option> 
                            <option value="2"> two horns</option> 
                            <option value="3"> three horns</option> 
                            <option value="100"> onehandred horns</option> 
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default HornForm;
