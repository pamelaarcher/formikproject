import React from "react";
// TODO: import useFormik from formik library
import { useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:',values);
      console.log("emailval", validate(values.email));
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field required'
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
        errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <div id="emailField">
          <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        </div>     
        <div id="emailError">
          {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}   
        </div>     
        <div>Password:</div>
        <div id="pswField">
          <input type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        </div>       
        <div id="pswError">
          {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}    
        </div>   
        <div id="submitBtn">           
          <button type="submit">Submit</button>
        </div>   
      </form>      
    </div>
  );
}

export default App;