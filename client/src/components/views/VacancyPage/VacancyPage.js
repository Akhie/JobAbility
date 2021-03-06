import React, { useState, useEffect } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { useSelector } from "react-redux";
import { Card, CardBody, CardHeader, FormGroup, Col } from 'reactstrap';

const { Title } = Typography;
const { TextArea } = Input;

const Category = [
    { value: 0, label: 'Government Organisation' },
    { value: 1, label: 'Non-Government Organisation' }
]


function VacancyPage(props) {
    const user = useSelector(state => state.user);

    const [title, setTitle] = useState("");
    const [Address, setAddress] = useState("");
    const [Categories, setCategories] = useState("");
    const [Vacancies, setVacancies] = useState(1);
    const [Job, setJob] = useState("");
    const [Contactus, setContactus] = useState(0);
    const [Pcode, setPcode] = useState("");
    const [Website, setWebsite] = useState("");
    const [FilePath, setFilePath] = useState("");


    const handleChangeTitle = (event) => {
        setTitle(event.currentTarget.value)
    }

    const handleChangeAddress = (event) => {
        console.log(event.currentTarget.value)

        setAddress(event.currentTarget.value)
    }

    const handleChangeJob = (event) => {
        setJob(event.currentTarget.value)
    }

    const handleChangePcode = (event) => {
        setPcode(event.currentTarget.value)
    }

    const handleChangeWebsite = (event) => {
        setWebsite(event.currentTarget.value)
    }

    const handleChangeVacancies = (event) => {
        setVacancies(event.currentTarget.value)
    }

    const handleChangeContactus = (event) => {
        setContactus(event.currentTarget.value)
    }

    const handleChangeTwo = (event) => {
        setCategories(event.currentTarget.value)
    }

    const onSubmit = (event) => {

        event.preventDefault();

        if (Contactus === "" && Website === "") {
            return alert('Please fill Contact or Website link')
        }

        const variables = {
            writer: user.userData._id,
            title: title,
            address: Address,
            category: Categories,
            job: Job,
            contact: Contactus,
            vacancies: Vacancies,
            website: Website,
            pcode: Pcode,
            filepath: FilePath
        }

        axios.post('/api/vacancy/uploadVacancy', variables)
            .then(response => {
                if (response.data.success) {
                    alert('vacancy Uploaded Successfully')
                    props.history.push('/')
                } else {
                    alert('Failed to upload vacancy')
                }
            })

    }

    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log(files)
        formData.append("file", files[0])

        axios.post('/api/vacancy/uploadfiles', formData, config)
            .then(response => {
                if (response.data.success) {
                    setFilePath(response.data.filePath)
                } else {
                    alert('failed to save the files in server')
                }
            })

    }  

    return (
        <div className='container'>
            <div className='row' style={{ margin: '2rem auto', background:"#bbe1fa", border: '1px solid #d3d3d3'}}>
                <div style={{ maxWidth: '300px', margin: '2rem auto' }}>
                    <Dropzone
                            onDrop={onDrop}
                            multiple={false}
                            maxSize={16000000}>
                            {({ getRootProps, getInputProps }) => (
                                <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}
                                    {...getRootProps()}
                                >
                                    <input {...getInputProps()} />
                                    <Icon type="plus" style={{ fontSize: '3rem' }} />

                                </div>
                            )}
                        </Dropzone>
                        <br/><br/>
                        <h5><em>You can Upload any pdf/image regarding the job information.</em></h5>
                </div>    
                <div style={{ maxWidth: '640px', margin: '2rem auto'}}>
                    <Card className='ml-5' outline color='primary'>    
                        <CardHeader tag='h4' className='bg-primary text-center text-white'>Add Vacancy</CardHeader>
                        <CardBody>

                            <Form onSubmit={onSubmit}>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label>Company Name : </label>
                                    </Col>
                                    <Col sm={8}>
                                        <Input
                                            onChange={handleChangeTitle}
                                            value={title}
                                        />
                                    </Col>    
                                </FormGroup>
                                
                                <FormGroup row>
                                    <Col sm={4}>
                                        <label>Address : </label>
                                    </Col>
                                    <Col sm={8}>
                                        <TextArea
                                            onChange={handleChangeAddress}
                                            value={Address}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col sm={4}>
                                        <label>Job Description : </label>
                                    </Col>
                                    <Col sm={8}>
                                        <TextArea
                                            onChange={handleChangeJob}
                                            value={Job}
                                        />
                                    </Col>    
                                </FormGroup>

                                <FormGroup row>
                                    <Col sm={3}>
                                        <label>Physical Code: </label>
                                    </Col>
                                    <Col sm={3}>
                                        <Input
                                            onChange={handleChangePcode}
                                            value={Pcode}
                                        />
                                    </Col>    
                                    <Col sm={2}>
                                        <label>Vacancies: </label>
                                    </Col>
                                    <Col sm={4}>
                                        <Input
                                            type={Number}
                                            onChange={handleChangeVacancies}
                                            value={Vacancies}
                                        />
                                    </Col>    
                                </FormGroup>

                                <FormGroup row>
                                    <Col sm={4}>
                                        <label>Website Link : </label>
                                    </Col>
                                    <Col sm={8}>
                                        <Input
                                            onChange={handleChangeWebsite}
                                            value={Website}
                                        />
                                    </Col>    
                                </FormGroup>

                                <FormGroup row>
                                    <Col sm={4}>
                                        <label>Contact Info : </label>
                                    </Col>
                                    <Col sm={8}>
                                        <Input
                                            type={Number}
                                            onChange={handleChangeContactus}
                                            value={Contactus}
                                        />
                                    </Col>    
                                </FormGroup>

                                <FormGroup row>
                                <Col sm={4}>
                                        <label>Company Type : </label>
                                    </Col>
                                    <Col sm={8}>
                                        <select onChange={handleChangeTwo}>
                                            {Category.map((item, index) => (
                                                <option key={index} value={item.label}>{item.label}</option>
                                            ))}
                                        </select>
                                    </Col>    
                                </FormGroup>
                                            
                                <FormGroup className='text-center'>
                                    <Button className='pl-5 pr-5' type="primary" size="large" onClick={onSubmit}>
                                        Submit
                                    </Button>
                                </FormGroup>

                            </Form>
                        </CardBody> 
                    </Card>       
                </div>
            </div>    
        </div>
    )
}

export default VacancyPage;

