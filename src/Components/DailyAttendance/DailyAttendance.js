import React from 'react'
import {
    Button,
    Form,
    Radio,
} from 'antd';
import { useState, useEffect } from 'react';
import "../DailyAttendance/DailyAttendance.css"
import { Select } from 'antd';
import AttendanceForm from '../Form/AttendanceForm';
import axios from 'axios'
import { Breadcrumb } from 'antd';

function DailyAttendance() {
    const [data, setData] = useState([]);
    const id = sessionStorage.getItem("associateId")
    let attendance = [];
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        attendance.push(e.target.value)
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    useEffect(() => {
        axios
            .get("http://localhost:8080/attendance/" + id)
            .then((value) => setData(value))
            .catch(error => console.log(error));
    }, [])

    const submit = () => {
        axios.put(("http://localhost:8080/attendance/SAVE/" + id), { data })
            .then(data => console.log("saved"))
            .catch(error => console.log(error));
        console.log(attendance)
    }
    return (
        <div style={{ width: "100%", padding: "2%" }}>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: <a href="/DailyAttendance">Daily Attendance</a>,
                    },
                ]}
            />
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: "default",
                }}
                size={"default"}
                style={{
                    width: "100%",
                    marginTop: '3vh'
                }}
            >
                <div className='inputs'>
                    <AttendanceForm />
                    <div className='attendance'>
                        <Form.Item label="RTO Mode:" className='formitem'>
                            <div className='fields'>
                                <Radio.Group onChange={onChange}>
                                    <Radio value={"Working From Home"}>WFH</Radio>
                                    <Radio value={"Working From Office"}>Office</Radio>
                                </Radio.Group>
                                <Select
                                    defaultValue="Office Location"
                                    style={{
                                        width: "25%",
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'CKC',
                                            label: 'CKC',
                                        },
                                        {
                                            value: 'TCO',
                                            label: 'TCO',
                                        },
                                        {
                                            value: 'MEPZ',
                                            label: 'MEPZ',
                                        },
                                        {
                                            value: 'DLF',
                                            label: 'DLF',
                                        },
                                        {
                                            value: 'CCC',
                                            label: 'CCC',
                                        },
                                    ]}
                                />
                            </div>
                        </Form.Item>
                    </div>
                    <Button style={{ background: "#000048", color: "#fff", width: "15%" }} onClick={submit}>Submit</Button>
                    <Button style={{ width: "15%", marginLeft: "2vh" }}>Reset</Button>

                </div>

            </Form>
        </div>
    )
}

export default DailyAttendance
