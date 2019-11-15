import React, {useState, useEffect} from 'react'
import "antd/dist/antd.css";
import {Button, DatePicker, Form, Input, InputNumber, Select} from "antd";
import FormBuilder from "./formSubmitAntd"

const Option = Select.Option;

const genderOptions = [
  { value: "male", displayName: "Male" },
  { value: "female", displayName: "Female" }
].map(item => (
  <Option key={item.value} value={item.value}>
    {item.displayName}
  </Option>
));

const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    {
      key: "userName",
      label: "User name",
      tooltip: "user name",
      initialValue: "Nate",
      widget: Input,
      required: true
    },
    {
      key: "fee",
      label: "提币手续费",
      widget: InputNumber,
      widgetProps: {
        // formatter: value => `$ ${value}`.replace(/(\d{3})+(?!\d)/g, ','),
        // parser: value => value.replace('%', ''),
        min: 0,
        max: 100,
        precision: 2,
        prefix: '￥',
        style: {width: '200px'},
      },
    },
    {
      key: "gender",
      label: "Gender",
      initialValue: "female",
      widget: Select,
      children: genderOptions
    },
    {
      key: "phone",
      label: "Phone",
      widget: Input,
      required: true,
      rules: [
        {
          pattern: /^\d+$/,
          message: "Phone must only contain numbers."
        },
        {
          min: 11,
          message: "Phone number at least lenght of 11"
        }
      ]
    },
  ]
}

const App = (props) => {
  
  const handleSubmit = (evt) => {
    if (evt) evt.preventDefault()
    props.form.validateFieldsAndScroll((errors, values) => {
        if (errors) return
        
        console.log("Submit form: ", values)
      }
    )
  }
  
  return (
    <div>
      <Form style={{width: 500, margin: '50px auto'}}>
        <FormBuilder
          meta={formMeta}
          form={props.form}
        />
        <div style={{ textAlign: "center" }}>
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>&nbsp; &nbsp;
          <Button onClick={() => {
            props.form.resetFields()
          }}>Reset</Button>
        </div>
      </Form>
      
    </div>
  )
}

export default Form.create()(App)