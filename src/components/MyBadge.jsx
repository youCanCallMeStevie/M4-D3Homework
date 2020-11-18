import React from "react"
import { Badge } from "react-bootstrap";

class MyBadge extends React.Component {
    render() {
        return (
            <div><h6>
                <Badge style={{ backgroundColor: "#E0A800", color: "black" }} >New</Badge>
            </h6></div>
        )
    }
}

export default MyBadge