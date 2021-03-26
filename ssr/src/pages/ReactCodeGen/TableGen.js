import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { Component } from 'react';
import * as Yup from 'yup';
import ReactTable from './ReactTable';
export default class TableGen extends Component {
    state = {
        isSubmitted: false,
        arr: [],
        rows: []
    }

    onChangeRows = (rows) => {
        console.log("yes");
        this.setState({ rows: rows });
    }
    // dynamic validations 
    // Benefits : 
    // 1- Add new types
    // 2 - change or add validations for each type
    colTypes = {
        string: {
            validations: [
                {
                    validationType: 'required',
                    params: ['Required']
                },
                {
                    validationType: 'min',
                    params: [3, "Minimum length 3"]
                }
            ]
        },
        number: {
            validations: [
                {
                    validationType: 'required',
                    params: ['Required']
                }
            ]
        },
        array: {
            validations: [
                {
                    validationType: 'required',
                    params: ['Required']
                },
                {
                    validationType: 'min',
                    params: [1, "Cannot be empty"]
                }
            ]
        },
        object: {
            validations: [
                {
                    validationType: 'required',
                    params: ['Required']
                }
            ]
        }
    }
    render() {
        console.log(this.state);

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
                                    colType: Yup.string().oneOf(Object.keys(this.colTypes).map((type) => {
                                        return type;
                                    }))
                                        .required("Column type is required")
                                        .min(1, "Required")
                                })
                            )
                        })}
                    onSubmit={fields => {

                        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4));
                        let newArr = [...(fields.columns)];
                        newArr.map((data) => {
                            data["validations"] = this.colTypes[data.colType].validations
                            // console.log(this.colTypes[data.colType].validations, data.colName);
                        })

                        // console.log(newArr);

                        this.setState({ isSubmitted: true, arr: newArr, rows: [] })
                    }
                    }

                    onReset={() => {
                        console.log("reset clicked");
                        this.setState({isSubmitted : false, rows : []});
                    }}
                >
                    {({ values, touched, handleReset }) => {
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
                                                                    {
                                                                        Object.keys(this.colTypes).map((type, index) => {
                                                                            return <option key={index} value={type} label={type}></option>
                                                                        })
                                                                    }
                                                                </Field>
                                                                <ErrorMessage name={`columns.${index}.colType`} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
                                                            </div>

                                                        </div>
                                                    );
                                                })}
                                                <div>
                                                    <button type="submit" >Submit</button>
                                                    <button type="reset">Reset</button>
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
                {
                    this.state.isSubmitted &&
                    <ReactTable
                        columns={this.state.arr}
                        rows={this.state.rows}
                        onChangeRows={this.onChangeRows}

                    >
                    </ReactTable>
                }
            </div >
        )
    }
}
