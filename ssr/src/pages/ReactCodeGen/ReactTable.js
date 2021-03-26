import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import * as Yup from 'yup';
export default class ReactTable extends Component {
    // state = {
    //     rows: []
    // }
    yupSchema = (schema, data) => {
        const { colName, colType, validations } = data;
        if (!Yup[colType]) {
            return schema;
        }
        let validator = Yup[colType](); // Yup.string()
        validations.forEach((validation) => {
            const { validationType, params } = validation;
            // validator = validator.required('Required'); // Yup.string().required('Required')
            if (!validator[validationType]) {
                return;
            }
            validator = validator[validationType](...params);
        });
        schema[colName] = validator; //{ colName : validator }
        return schema;
    }
    render() {
        console.log(this.props);
        const { rows, columns, onChangeRows } = this.props;
        const yupSchema = columns.reduce(this.yupSchema, {});
        // console.log(this.yupSchema);
        const validationSchema = Yup.object().shape(yupSchema)
        let initialVal = {}
        columns.map((col) => {
            // console.log(initialVal);
            initialVal[col.colName] = ''
        });
        // console.log(initialVal);
        return (
            <div>
                <Formik enableReinitialize
                    initialValues={
                        initialVal
                    }
                    validationSchema={
                        validationSchema
                    }
                    onSubmit={(values) => {
                        console.log(values);
                        let row = []
                        Object.keys(values).map((col, index) => {
                            row.push(values[col]);
                        });
                        let newRows = [...(rows)];
                        newRows.push(row)
                        console.log(newRows);
                        // this.setState({rows : newRows});
                        console.log(onChangeRows);
                        onChangeRows(newRows);
                    }}
                >
                    {({ values }) => {
                        // console.log(values);
                        return <Form>
                            <Table
                                striped
                                hover
                                bordered
                            >
                                <thead>
                                    <tr>
                                        {
                                            Object.keys(values).map((col, index) => {
                                                return <th key={index} > {col} </th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            Object.keys(values).map((key, index) => {
                                                return (
                                                    <td key={index}>
                                                        <Field key={index} name={key} type="text" placeholder={key} />
                                                        <ErrorMessage render={msg => <div style={{ color: 'red' }} >{msg}</div>} name={key} type="text" />
                                                    </td>
                                                );
                                            })
                                        }
                                        <td>
                                            <button type="submit">submit</button>
                                        </td>
                                    </tr>
                                    {
                                        rows.map((row, rowIndex) => {
                                            return (
                                                <tr key={rowIndex}>
                                                    {
                                                        row.map((col, colIndex) => {
                                                            return (
                                                                <td key={colIndex}>
                                                                    {
                                                                        col
                                                                    }
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
                        </Form>
                    }}
                </Formik>
            </div>
        )
    }
}
