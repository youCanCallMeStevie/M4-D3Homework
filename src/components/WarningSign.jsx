import React from "react"
import { Alert } from "react-bootstrap";

class WarningSign extends React.Component {

    render() {
        return (
            <Alert variant="danger"  >
                {this.props.title}
            </Alert >
        );
    };

}

export default WarningSign