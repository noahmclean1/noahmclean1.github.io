import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import myPic from "./resources/myPic.jpg"
import iconTwitter from "./resources/iconTwitter.svg"
import iconLinkedIn from "./resources/iconLinkedIn.svg"

export function Home() {
  return (
  	<Container>
  		<Row className="mt-5">
  			<Col md="4">
  				<Image src={myPic} fluid roundedCircle/>
  			</Col>
  			<Col className="my-auto text-center" style={{fontFamily: "Oxygen"}}>
  				<h3>Hi I'm</h3>
  				<h1><strong>Noah McLean</strong></h1>
  			</Col>
  		</Row>
  		<Row className="mt-5">
  			<Col className="text-center">
  				<p>I am a software developer who enjoys working on personal projects, baking, and learning Arabic.</p>
  				<p>If you're interested in my work history & experience, take a look at my virtual resume</p>
  				<p>Otherwise I've got some interesting projects going here and a few other links below for you to check out</p>
  			</Col>
  		</Row>
  		<Row className="mt-5 justify-content-center">
  			<Col md="1">
				<a href="https://twitter.com/Noah__McLean"><Image src={iconTwitter} fluid /></a>
  			</Col>
			<Col md="1">
				<a href="https://www.linkedin.com/in/noah-mclean-41a581b9/"><Image src={iconLinkedIn} fluid /></a>
  			</Col>
  		</Row>
  	</Container>
  	
  	);
}