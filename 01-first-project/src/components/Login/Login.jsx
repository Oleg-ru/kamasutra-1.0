import React from 'react';
import styles from './Login.module.css'
import {Form, Field} from 'react-final-form'
import {maxLengthCreator, requiredField} from "../../utils/validators/validators.js";
import {FormControls} from "../common/FormControls/FormControls.jsx";

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
}

function LoginForm(props) {

    const onSubmit = (data) => {
        console.log(data)
        console.log("Submited")
    };

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <label>
                              Login
                              <Field name="login"
                                     component={FormControls}
                                     placeholder="Login"
                                     validate={composeValidators(requiredField, maxLengthCreator(25))}
                              />
                          </label>
                      </div>
                      <div>
                          <label>
                              Password
                              <Field name="password"
                                     component={FormControls}
                                     type="password"
                                     placeholder="Password"
                                     validate={composeValidators(requiredField, maxLengthCreator(25))}
                              />
                          </label>
                      </div>
                      <div>
                          <label>
                              Remember me
                              <Field name="rememberMe"
                                     component={FormControls}
                                     type="checkbox"
                              />
                          </label>
                      </div>
                      <button type="submit">Login</button>
                  </form>
              )}
        />
    );
}

/*
<form className={styles.form}>
            <div>
                <input placeholder="Login" type="text"/>
                <input placeholder="Password" type="password"/>
                <div>
                    <label>
                        <span>It`s me</span>
                        <input type="checkbox"/>
                    </label>
                </div>
                <button>Login</button>
            </div>
        </form>
 */


export default Login;