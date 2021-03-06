import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ngoUser } from "../../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from "react-redux";
import { Card, CardHeader, CardBody} from 'reactstrap';


const { Title } = Typography;

function NgoLoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(ngoUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('ngoId', response.payload.ngoId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/");
              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
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
          <div className="app">
          <h2 style={{fontFamily:"'Oswald', sans-serif", fontcolor:"#1b262c"}}>Continue the good work of your <span className="spa">NGO </span> with <span className="spa">JOBABILITY.</span></h2>
          <br />
            <div className="container">
              <div className='offset-md-3 col-md-6' style={{marginTop:'20px'}}>
                <Card outline color='primary'>   
                  <CardHeader tag='h4' className='bg-primary text-center text-white'>Log In</CardHeader> 
                  <CardBody>
                    <form onSubmit={handleSubmit} style={{ width: '350px' }}>

                      <Form.Item required>
                        <Input
                          id="email"
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Enter your email"
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

                      <Form.Item required>
                        <Input
                          id="password"
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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

                      {formErrorMessage && (
                        <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
                      )}

                      <Form.Item>
                        <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Remember me</Checkbox>
                        <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                          forgot password
                          </a>
                        <div>
                          <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                            Log in
                        </Button>
                        </div>
                        Or <a href="/register">register now!</a>
                      </Form.Item>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </div>      
          </div>
        );
      }}
    </Formik>
  );
};

export default withRouter(NgoLoginPage);


