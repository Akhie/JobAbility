import React, { useState, useEffect } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import axios from 'axios';
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

        if (title === "" || Job === "" ||
            Contactus === "") {
            return alert('Please fill title, Job & Contact fields')
        }

        const variables = {
            writer: user.userData._id,
            title: title,
            address: Address,
            category: Categories,
            job: Job,
            contact: Contactus,
            vacancies: Vacancies
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

    return (
        <div style={{ maxWidth: '500px', margin: '2rem auto' }}>
            <Card outline color='primary'>    
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
                            <Col sm={4}>
                                <label>Vacancies : </label>
                            </Col>
                            <Col sm={8}>
                                <Input
                                    type={Number}
                                    onChange={handleChangeVacancies}
                                    value={Vacancies}
                                />
                            </Col>    
                        </FormGroup>

                        <FormGroup row>
                            <Col sm={4}>
                                <label>Contact Us : </label>
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
    )
}

export default VacancyPage;

