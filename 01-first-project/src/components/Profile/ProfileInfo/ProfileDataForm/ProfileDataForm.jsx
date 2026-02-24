import React from "react";
import styles from "./ProfileDataForm.module.css"
import {Field, Form} from "react-final-form";
import {FormControls} from "../../../common/FormControls/FormControls.jsx";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators.js";

export const ProfileDataForm = (props) => {

    const {
        handleSubmit,
        initialValues
    } = props;

    const onSubmit = async values =>  {
        if (handleSubmit) {
            handleSubmit(values)
        }
    }

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);


    return (
        <Form onSubmit={onSubmit}
              initialValues={initialValues}
              render={({submitError, handleSubmit, submitting }) => (
                  <form onSubmit={handleSubmit}>
                      {submitError && <div className={styles.errorSubmit}>Error: {submitError}</div>}
                      <div>
                          <label>
                              Полное имя:
                              <Field name="fullName"
                                     component={FormControls}
                                     placeholder="Имя"
                                     validate={composeValidators(requiredField, maxLengthCreator(25))}
                              />
                          </label>
                      </div>
                      <div>
                          <label>
                              Обо мне:
                              <Field name="aboutMe"
                                     component={FormControls}
                                     placeholder="Обо мне"
                                     validate={composeValidators(requiredField, maxLengthCreator(25))}
                              />
                          </label>
                      </div>
                      <div>
                          <label>
                              Ищу работу:
                              <Field name="lookingForAJob"
                                     component={FormControls}
                                     type="checkbox"
                              />
                          </label>
                      </div>
                      <div>
                          <label>
                              Описание вакансии:
                              <Field name="lookingForAJobDescription"
                                     component={FormControls}
                                     placeholder="Описание"
                                     validate={composeValidators(requiredField, maxLengthCreator(25))}
                              />
                          </label>
                      </div>
                      {
                          Object.keys(initialValues.contacts).map(contact => {
                          return (
                              <div key={contact}>
                                  <label>
                                      {contact}
                                      <Field name={contact}
                                             component={FormControls}
                                             placeholder={contact}
                                             validate={composeValidators(requiredField, maxLengthCreator(25))}
                                      />
                                  </label>
                              </div>
                          )
                      })
                      }
                      <button type="submit" disabled={submitting}>Сохранить</button>
                  </form>
              )}
        />
    )
};