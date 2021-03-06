import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col } from 'antd';
import axios from 'axios';
import file from './jobs.png'

function DetailJobPage(props) {


    const jobId = props.match.params.jobId
    const [Job, setJob] = useState([])

    const jobVariable = {
        jobId: jobId
    }

    useEffect(() => {
        axios.post('/api/vacancy/getJob', jobVariable)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.job)
                    setJob(response.data.job)
                } else {
                    alert('Failed to get job Info')
                }
            })

    }, [])


    if (Job.title) {
        return (
            <div className='container m-3 p-2' style={{border:'1px solid #d3d3d3'}}>
                <Row>
                    <Col  xs={24}>
                        <div className="container" style={{ width: '100%', padding: '3rem 4em' }}>
                            <div className='row m-5'>
                                <h1>{Job.title}</h1>
                            </div>
                            <div className='row m-3'>
                                <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                    <h4>Address : <em> {Job.address} </em></h4>
                                </div>
                                <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                    <h4>Job Description : <em> {Job.description} </em></h4>
                                </div><div className='col-sm-4 pl-5' style={{color:'black'}}>
                                    <h4>Physical Code : <em> {Job.pcode} </em></h4>
                                </div>
                            </div>
                            <div className='row m-3'>
                            <p>PDF Document : <em> {Job.filepath} </em></p>
                                <img src={file} />
                            </div>
                            <div className='row m-3'>
                                <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                    <h4>Vacancies : <em> {Job.vacancies} </em></h4>
                                </div>
                                <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                   <a href="#"><h4>Website Link : <em> {Job.website} </em></h4></a>
                                </div><div className='col-sm-4 pl-5' style={{color:'black'}}>
                                    <h4>Contact Number : <em> {Job.contact} </em></h4>
                                </div>
                                <div className='col-sm-4 pl-5' style={{color:'black'}}>
                                <a class="but" href={`Job.website`}><button type="button" class="soc btn btn-success btn-lg button">Apply</button></a>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )

    } else {
        return (
            <div>Loading...</div>
        )
    }


}

export default DetailJobPage

