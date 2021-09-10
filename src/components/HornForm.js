import { React, Component } from 'react';

import {
   Form,
    Col
} from 'react-bootstrap';


export class HornForm extends Component {




    render() {
        return (
            <div>
              
                <Form onSubmit={this.props.handlesubmit}>
                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Select  onChange ={(event) => {this.props.SelecttionHornFilter(event);}}>
                            <option value="0">select...</option> 
                            <option value="1"> 1 horn</option> 
                            <option value="2"> 2 horns</option> 
                            <option value="3"> 3 horns</option> 
                            <option value="100"> 100 horns</option> 
                        </Form.Select>
                    </Form.Group>
                    
                </Form>
            </div>
        );
    }
}

export default HornForm;
