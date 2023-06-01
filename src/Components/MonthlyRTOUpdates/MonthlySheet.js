import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker";
import {
    Button,
    Form,
} from 'antd';
import AttendanceForm from '../Form/AttendanceForm';
import "../MonthlyRTOUpdates/MonthlySheet.css";
import Toolbar from "react-multi-date-picker/plugins/toolbar"

function MonthlySheet() {
    const [value, setValue] = useState(new Date());
    console.log(value)
    return (
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
        }}
    >
        <AttendanceForm />
        <div className='inputs rto' style={{marginBottom: "2vh"}}>
        
            <label>RTO updates:&nbsp;&nbsp;</label>
            <DatePicker 
            multiple 
            placeholder='click to open' 
            onChange={setValue} 
            arrow={true} 
            style={{width: "100vh"}}
            plugins={[
                <Toolbar position="bottom" 
                sort={["deselect", "close"]}/>
              ]}/>
        </div>

            <Button style={{background: "#000048", color: "#fff", width:"15%"}}>Submit</Button>
            <Button style={{width:"15%", marginLeft: "2vh"}}>Reset</Button>
        </Form>
    )
}

export default MonthlySheet
