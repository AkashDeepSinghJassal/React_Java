import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import * as Yup from 'yup';
export default class ReactTable extends Component {
    state = {
        rows: [[1, 2], [3, 4]]
    }
    yupSchema = (schema, data) => {
        const { colName, colType } = data;
        let validator = Yup[colType](); // Yup.string()
        validator = validator.required('Required'); // Yup.string().required('Required')
        schema[colName] = validator; //{ colName : validator }
        return schema;
    }
    render() {
        console.log(this.props);
        let columns = this.props.columns;
        let rows = this.state.rows;
        const yupSchema = columns.reduce(this.yupSchema, {});
        // console.log(this.yupSchema);
        const validationSchema = Yup.object().shape(yupSchema)
        const initialVal = {}
        columns.map((col) => {
            // console.log(initialVal);
            initialVal[col.colName] = ''
        });
        console.log(initialVal);
        return (
            <div>
                <Formik
                                initialValues={
                                    initialVal
                                }
                                validationSchema={
                                    validationSchema
                                }
                            >
                                {({ values }) => {
                                    return (
                                            <>
                                            {
                                                Object.keys(values).map((key, index) => {
                                                    return (
                                                        <td>
                                                            <Field name={key} type="text" placeholder= {key} />


                                                            <ErrorMessage render={msg => <div style={{ color: 'red' }} >{msg}</div>} name={key} type="text" />

                                                        </td>
                                                    );
                                                })
                                            }
                                            </>
                                    );
                                }}
                            </Formik>
                <Table
                    striped
                    hover
                    bordered
                >
                    <thead>
                        <tr>
                            {
                                columns.map((col, index) => {
                                    return <th key={index} > {col.colName} </th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* {
                                columns.map((col, index) => {
                                    return (
                                        <td key={index} >
                                            <input type="text" />
                                        </td>
                                    );
                                })
                            } */}
                            
                        </tr>
                        {
                            rows.map((row, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        {
                                            row.map((col, colIndex) => {
                                                return (
                                                    <td key={colIndex}>
                                                        demo
                                                    </td>
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
