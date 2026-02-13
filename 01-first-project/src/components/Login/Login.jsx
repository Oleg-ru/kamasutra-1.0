import React from 'react';
import styles from './Login.module.css'
import {Form, Field} from 'react-final-form'

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

    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <label>
                              Login
                              <Field name="login" component="input" placeholder="Login"/>
                          </label>
                      </div>
                      <div>
                          <label>
                              Password
                              <Field name="password" component="input" type="password" placeholder="Password"/>
                          </label>
                      </div>
                      <div>
                          <label>
                              Remember me
                              <Field name="rememberMe" component="input" type="checkbox" />
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