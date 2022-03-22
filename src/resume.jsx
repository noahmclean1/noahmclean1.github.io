import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Component } from "react";
import { imageDictionary } from './resources/images';

export class Resume extends Component {
    constructor(props) {
        super(props)
        var jobInfo = require('./resources/resume.json');
        this.state = { jsonData: jobInfo, 
                    jobCount: jobInfo.length};
    }

    render() {
        return (
            <Container className="mt-5">
                {this.renderResume()} 
            </Container> //TODO implement cutoff & clicking
        )
    }

    renderResume() {
        return this.state.jsonData.map((job, i) => GenerateResumeSection(job, false, i));
    }
}



function GenerateResumeSection(jobData, cutoff, index) {
    return (
        <Row style={{fontFamily:"EB Garamond", marginTop: index === 0 ? 0 : 20}} key={index}>
            <Col style={{backgroundColor:'DarkGrey', borderRadius:'25px', boxShadow:'5px 10px #696969'}}>
                <Row style={{alignItems:'center'}} className='mt-2'>
                    <Col md='1'>
                        <Image src={imageDictionary[jobData.ImageName]} width='100%' roundedCircle></Image>
                    </Col>
                    <Col style={{fontSize:"22px", fontWeight: "bold"}}>
                        {jobData["Title"]}
                    </Col>
                    <Col md='2' style={{textAlign: 'center', fontSize:"18px", fontWeight: "bold"}}>
                        {jobData["StartDate"]} - {jobData["EndDate"]}
                    </Col>
                </Row>
                <p className='mt-2' style={{display:'block', fontSize:"18px", fontWeight: "bold"}}>
                    {jobData["Company"]}
                </p>

                <div className='mb-3 mt-5' style={{display: 'block', fontSize:"18px"}}>
                    <ul>
                        {ResumeDescription(jobData["Description"], cutoff)}
                    </ul>
                </div>
            </Col>
        </Row>
    )
}

function ResumeDescription(lines, cutoff) {
    if (cutoff){
        return <li>{lines[0]}</li>
    } else {
        return lines.map((desc, index) => {
            return <li key={index}>{desc}</li>
        })
    }
}