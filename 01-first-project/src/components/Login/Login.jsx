import React from 'react';
import styles from './Login.module.css'
import {Form, Field} from 'react-final-form'
import {maxLengthCreator, requiredField} from "../../utils/validators/validators.js";
import {FormControls} from "../common/FormControls/FormControls.jsx";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer.js";
import {Navigate} from "react-router";
import { FORM_ERROR } from 'final-form'

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login} isAuth={props.isAuth} captchaUrl={props.captchaUrl}/>
        </div>
    );
}

function LoginForm(props) {

    const onSubmit = async values =>  {
        return new Promise((resolve, reject) => {
            const getError = (response) => {
                if (response && response[FORM_ERROR]) {
                    resolve(response);
                } else if (response && response.messages && response.messages.length > 0) {
                    resolve({ [FORM_ERROR]: response.messages.join(', ') });
                } else {
                    resolve({ [FORM_ERROR]: 'Login Failed' });
                }
            };
            
            const loginPromise = props.login(values.email, values.password, values?.rememberMe ?? false, getError, values.captcha);
            // Проверяем, что login возвращает промис
            if (loginPromise && typeof loginPromise.catch === 'function') {
                loginPromise.catch(() => {
                    resolve({ [FORM_ERROR]: 'Network error. Try again.' });
                });
            }
        });
    };

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <Form onSubmit={onSubmit}
              render={({submitError, handleSubmit, submitting }) => (
                  <form onSubmit={handleSubmit}>
                      {submitError && <div className={styles.errorSubmit}>Error: {submitError}</div>}
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
                      {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
                      {
                          props.captchaUrl && <div>
                          <label>
                              <Field name="captcha"
                                     component={FormControls}
                                     placeholder="Captcha"
                                     validate={composeValidators(requiredField)}
                              />
                          </label>
                      </div>
                      }
                      <button type="submit" disabled={submitting}>Login</button>
                  </form>
              )}
        />
    );
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);