import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ngoRegister } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import { Card, CardHeader, CardBody} from 'reactstrap';

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function NgoRegisterPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        name: '',
        discription: '',
        address:'',
        password: '',
        confirmPassword: '',
        website: '',
        contact: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
        discription: Yup.string()
          .required('Discription is required'),
        address: Yup.string()
          .required('Address is required'),  
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        website: Yup.string()
          .required('Website is required'),
         contact: Yup.string()
          .required('contact is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            address: values.address,
            discription: values.discription,
            website:values.website,
            contact:values.contact,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };
          console.log(dataToSubmit);
          dispatch(ngoRegister(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/getngo");
            } else {
              console.log("Not working")
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
            <div className="container">
            <div className='offset-md-3 col-md-6 mt-3' style={{ minWidth: '340px', margin: '2rem auto'}}>
                    <Card className='ml-5' outline color='primary'>    
                        <CardHeader tag='h4' className='bg-primary text-center text-white'>Register Your NGO</CardHeader>
                        <CardBody>
                    <Form style={{ mniWidth: '375px', maxWidth:'500px' }} {...formItemLayout} onSubmit={handleSubmit} >
                      <Form.Item required label="Name">
                        <Input
                          id="name"
                          placeholder="Enter your organization name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.name && touched.name ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.name && touched.name && (
                          <div className="input-feedback">{errors.name}</div>
                        )}
                      </Form.Item>

                      <Form.Item required label="discription">
                        <Input
                          id="discription"
                          placeholder="Describe your organization"
                          type="text"
                          value={values.discription}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.discription && touched.discription ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.discription && touched.discription && (
                          <div discription="input-feedback">{errors.discription}</div>
                        )}
                      </Form.Item>

                      <Form.Item required label="address">
                        <Input
                          id="address"
                          placeholder="Enter address of your organization."
                          type="text"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.address && touched.address ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.address && touched.address && (
                          <div className="input-feedback">{errors.address}</div>
                        )}
                      </Form.Item>

                      <Form.Item required label="website">
                        <Input
                          id="website"
                          placeholder="Website of your organization."
                          type="text"
                          value={values.website}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.website && touched.website ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.website && touched.website && (
                          <div className="input-feedback">{errors.website}</div>
                        )}
                      </Form.Item>
                        
                      <Form.Item required label="contact">
                        <Input
                          id="contact"
                          placeholder="Contact of your organization."
                          type="text"
                          value={values.contact}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.contact && touched.contact ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.contact && touched.contact && (
                          <div className="input-feedback">{errors.contact}</div>
                        )}
                      </Form.Item>

                      <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                        <Input
                          id="email"
                          placeholder="Enter your Email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.email && touched.email ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                      </Form.Item>

                      <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                        <Input
                          id="password"
                          placeholder="Enter your password"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.password && touched.password ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.password && touched.password && (
                          <div className="input-feedback">{errors.password}</div>
                        )}
                      </Form.Item>

                      <Form.Item required label="Confirm" hasFeedback>
                        <Input
                          id="confirmPassword"
                          placeholder="Enter your confirmPassword"
                          type="password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                          }
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                          <div className="input-feedback">{errors.confirmPassword}</div>
                        )}
                      </Form.Item>

                      <Form.Item {...tailFormItemLayout}>
                        <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </CardBody>  
                </Card>
              </div>
            </div>    
          
        );
      }}
    </Formik>
  );
};


export default NgoRegisterPage