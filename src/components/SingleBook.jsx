import React from "react"
import { Card, Col, Button } from "react-bootstrap";
import "../style.css"

class SingleBook extends React.Component {
    state = {
        selected: false
    }
    selectBook = () => {

        this.setState({ selected: true });
        console.log(this.state)
    }

    render() {
        return (
            <Col xs={1} md={3} lg={2}>

                <Card className="card ">
                    <div className="card-img ">
                        <img
                            className="card-img-top"
                            src={this.props.image}
                            alt={this.props.title}
                            onClick={() => this.selectBook()}
                        />
                    </div>
                    <div className="card-body">
                        <h6 className="bookTitle">{this.props.title}</h6>
                        <Button className="btn-warning">€{this.props.price}</Button>
                    </div>
                </Card>

            </Col>
        )
    }
}
export default SingleBook