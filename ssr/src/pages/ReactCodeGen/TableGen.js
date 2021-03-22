import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { Component } from 'react'

export default class TableGen extends Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        colName: '',
                        colType: 'choose...'
                    }}
                    validationSchema={Yup.object().shape({
                        colName: Yup.string()
                            .required('Column name is required')
                            .min(3, "Length must be atleast 3"),
                        colType: Yup.string().oneOf(['number', 'string', 'object'])
                            .required("Column type is required")
                            .min(1, "Required")
                    })}
                    onSubmit={fields => {
                        console.log("wow form");
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
                >
                            <Form>
                                <div>
                                    <label htmlFor="colName">colName</label>
                                    <Field name="colName" type="text" className = "form-control" />
                                    <ErrorMessage name="colName" component="div" className="invalid-feedback" />
                                </div>
                                <div>
                                    <label htmlFor="colType">colType</label>
                                    <Field name="colType" as="select" className = "form-control" >
                                        <option value="string" label = "string"></option>
                                        <option value="number" label = "number"></option>
                                        <option value="object" label = "object"></option>
                                    </Field>
                                    <ErrorMessage name="colType" component="div" className="invalid-feedback" />
                                </div>
                                <div>
                                    <button type = "submit">submit</button>
                                </div>
                            </Form>
                </Formik>
            </div>
        )
    }
}
