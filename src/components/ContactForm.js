import React from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

import './styles/Contact.css'

const ContactForm = () => {
  
  
    return ( 
      <Formik initialValues={{
          fullName:'',
          email:'',
          message:'',
          
        }} validationSchema = {yup.object({
          fullName:yup.string().max(20, 'full Name should not exceed 30 charactors')
       .required('Please Enter Full Name'),
       email:yup.string().email( ' Invalid Email Address')
       .required('Please Enter Valid Email'),
       message:yup.string().max(40, 'Not More Then 30 Charactors')
       .required('Please Enter Maximum 40 Charactors' )
        })}
        onSubmit = { values =>{
          console.log(values)
        
      }}>
        {
          props =>(
            <div>
          
                <Form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <Field className="form-control" name="fullName" type="text" id="name"></Field>
                    <ErrorMessage name="fullName"></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <Field className="form-control" name="email" type="text" id="email"></Field>
                    <ErrorMessage name="email" id="error"></ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <Field name="message" as="textarea" id="comment"></Field>
                    <ErrorMessage name="message" id="error"></ErrorMessage>
                  </div>
                  <button type="submit" className="btn-4" disabled={!props.isValid}>send it</button>
                </Form>
              </div>
       

          )
        }
  
      </Formik>
      
    )
  
}

 export default ContactForm