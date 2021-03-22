import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import React, { Component } from 'react';
import Table from './ReactTable';
export default class TableGen extends Component {
    state = {
        isSubmitted: false,
        arr: []
    }
    render() {
        // console.log(this.state.arr);
        return (
            <div>
                <Formik 
                    initialValues={{
                        columns: [
                            {
                                colName: 'name',
                                colType: 'string'
                            },
                            {
                                colName: 'age',
                                colType: 'number'
                            }
                        ]
                    }}
                    validationSchema={
                        Yup.object().shape({
                            columns: Yup.array().of(
                                Yup.object().shape({
                                    colName: Yup.string()
                                        .required('Column name is required')
                                        .min(2, "Length must be atleast 2"),
                                    colType: Yup.string().oneOf(['number', 'string', 'object'])
                                        .required("Column type is required")
                                        .min(1, "Required")
                                })
                            )
                        })}
                    onSubmit={fields => {

                        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                        this.setState({ isSubmitted: true, arr: fields.columns })
                    }}
                >
                    {({ values, touched }) => {
                        // console.log(values);
                        return (
                            <Form>
                                <FieldArray
                                    name='columns'
                                    render={(arrayHelper) => {
                                        return (
                                            <div>
                                                {values.columns.map((column, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div>
                                                                <label htmlFor={`columns.${index}.colName`}>colName</label>
                                                                <Field name={`columns.${index}.colName`} type="text" placeholder="Data Name" />
                                                                {
                                                                    touched && touched.columns && touched.columns[index] && touched.columns[index] && touched.columns[index].colName &&
                                                                    <ErrorMessage render={msg => <div style={{ color: 'red' }} >{msg}</div>} name={`columns.${index}.colName`} type="text" />
                                                                }
                                                            </div>
                                                            <div>
                                                                <label htmlFor={`columns.${index}.colType`}>colType</label>
                                                                <Field name={`columns.${index}.colType`} as="select" >
                                                                    <option value="string" label="string"></option>
                                                                    <option value="number" label="number"></option>
                                                                    <option value="object" label="object"></option>
                                                                </Field>
                                                                <ErrorMessage name={`columns.${index}.colType`} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
                                                            </div>

                                                        </div>
                                                    );
                                                })}
                                                <div>
                                                    <button type="submit">Submit</button>
                                                    <button typpe="button" onClick={() => {
                                                        arrayHelper.push({
                                                            colName: '',
                                                            colType: 'string'
                                                        })
                                                    }}>Add</button>
                                                </div>
                                            </div>
                                        );
                                    }}
                                >
                                </FieldArray>
                            </Form>
                        )
                    }
                    }
                </Formik >
                {this.state.isSubmitted &&
                    <Table
                        columns={this.state.arr}
                    >
                    </Table>
                }
            </div >
        )
    }
}
