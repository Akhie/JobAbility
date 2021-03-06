import React, { useEffect, useState } from 'react'
import {Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;

function JobsPage() {

    const [Jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get('/api/vacancy/getJobs')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.jobs);
                    setJobs(response.data.jobs);
                } else {
                    alert('Failed to get Jobs')
                }
            })
    }, [])





    const renderCards = Jobs.map((job, index) => {

        return <Col xs={24}>
            <div style={{ position: 'relative', }}>
                <a href={`/jobs/${job._id}`} >
                    <div className='container m-3 p-2' style={{border:'1px solid #d3d3d3'}}>
                        <h3 className='pl-5'><em><b>{job.title}</b></em></h3>
                        <div className='row'>
                            <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                <p>Job Description : <em> {job.job} </em></p>
                            </div>
                            <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                <p>Website Link : <em> {job.website} </em></p>
                            </div>
                            <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                <p>Contact : <em> {job.contact} </em></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </Col>

    })


    if (Jobs.length>0) {
    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > JOBS </Title>
            <hr />

            <Row gutter={16}>
                {renderCards} 
            </Row>
        </div>
    )
    } else {
        return (
            <div>Loading...</div>
        )
    }

}

export default JobsPage
