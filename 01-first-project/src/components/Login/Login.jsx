import React from 'react';
import styles from './Login.module.css'
import {Form, Field} from 'react-final-form'
import {maxLengthCreator, requiredField} from "../../utils/validators/validators.js";
import {FormControls} from "../common/FormControls/FormControls.jsx";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer.js";
import {Navigate} from "react-router";

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login} isAuth={props.isAuth}/>
        </div>
    );
}

function LoginForm(props) {

    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe)
        console.log(email, password, rememberMe)
        console.log("Submited")
    };

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <div>
                          <label>
                              Login
                              <Field name="email"
                                     component={FormControls}
                                     placeholder="Email"
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);