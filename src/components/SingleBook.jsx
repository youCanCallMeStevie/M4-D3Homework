import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "../style.css";
import MyBadge from "./MyBadge.jsx";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  selectBook = (e) => {
    const element = e.currentTarget;
    element.classList.toggle("selectedCard")

}
  render() {
    console.log(this.props.category);

    return (
      <Col xs={1} md={3} lg={2}>
        <Card className="card ">
          <div className="card-img ">
            <img
              className="card-img-top"
              src={this.props.image}
              alt={this.props.title}
              onClick={this.selectBook}
            />
          </div>
          <div className="card-body">
            <MyBadge category={this.props.category}/>
            <h6 className="bookTitle">{this.props.title}</h6>
            <Button className="btn-warning">€{this.props.price}</Button>
          </div>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
