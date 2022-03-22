import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Game extends Component {
    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col md="4" style={{backgroundColor: "powderblue"}}>
                        Yo
                    </Col>
                    <Col>
                        <canvas id="test" width="300" height="300" style={{borderWidth: "1px", borderColor: "black", borderStyle: "solid"}}></canvas>
                    </Col>
                </Row>
            </Container>
        )
    }

    componentDidMount() {
        AnimationTick();
    }
}

function AnimationTick() {
    var ctx = document.getElementById('test').getContext('2d');
    function animate() {
        ctx.clearRect(0,0, 300, 300)
        ctx.fillRect(50,50,100,100)
        requestAnimationFrame(animate);
    }
    animate();
}