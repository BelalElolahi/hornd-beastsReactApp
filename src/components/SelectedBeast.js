import { React, Component } from 'react';
import {
    Button,
    Modal
} from 'react-bootstrap';
import ModalImage from "react-modal-image";

class SelectedBeast extends Component {

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handelClose}>
                
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <ModalImage
                          small={this.props.imgUrl}
                        large={this.props.imgUrl}
                        alt="Obs somthing wrong!"
                    />
                    {this.props.description}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handelClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}



export default SelectedBeast;
