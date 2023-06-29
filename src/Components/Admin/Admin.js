import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Breadcrumb, Table, Modal, Space, Popconfirm, message, Radio } from 'antd';
import "../Admin/Admin.css"
import axios from 'axios';

function Admin() {
    const [count, setCount] = useState(2);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [associates, setAssociates] = useState([])
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    useEffect(()=>{
        axios.get("http://localhost:8080/attendance/showAll")
        .then((data)=>{
            console.log(associates)
            console.log(data.data)
            setAssociates(data.data)
        })
    },[])
    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleAdd = () => {
        setOpen(true)

    };

    const columns = [
        {
            title: 'Associate ID',
            dataIndex: 'associate_id',
            key: 'associate_id',
        },
        {
            title: 'Associate Name',
            dataIndex: 'associate_name',
            key: 'associate_name',
        },
        {
            title: 'Project ID',
            dataIndex: 'project_id',
            key: 'project_id',
        },
        {
            title: 'Project Description',
            dataIndex: 'project_desc',
            key: 'project_desc',
        },
        {
            title: 'Base Location',
            dataIndex: 'base_location',
            key: 'base_location',
        },
        {
            title: 'EDL Name',
            dataIndex: 'edl_name',
            key: 'edl_name',
        },
        {
            title: 'Genc 2022',
            dataIndex: 'genc_2022',
            key: 'genc_2022',
        },
        {
            title: 'Project Manager Id',
            dataIndex: 'project_manager_id',
            key: 'project_manager_id',
        },
        {
            title: 'Project Manager Name',
            dataIndex: 'project_manager_name',
            key: 'project_manager_name',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>


                    <Button
                        onClick={handleAdd}
                        style={{
                            background: "#000048",
                            color: 'white'
                        }}
                    >
                        Update
                    </Button>

                </Space>
            ),
        },
    ];
    return (
        <div style={{ width: "100%", padding: "5vh" }}>
            <Breadcrumb
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: <a href="/Admin">Admin</a>,
                    },
                ]}
            />
            <Button
                onClick={handleAdd}
                style={{
                    marginBottom: 16,
                    marginRight: 15,
                    background: "#000048",
                    color: 'white',
                    float: "right",
                    width: "6%"

                }}
            >
                Add
            </Button>

            <Table style={{ paddingInline: "4vh" }} bordered dataSource={associates} columns={columns} />
            <Modal
                title="Add Associates"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    layout={"vertical"}
                    form={form}
                    initialValues={{
                        layout: "vertical",
                    }}
                    onValuesChange={onFormLayoutChange}
                    style={{
                        maxWidth: formLayout === 'inline' ? 'none' : 600,
                    }}
                >
                    <Form.Item label="Associate ID">
                        <Input placeholder="Enter associate id" />
                    </Form.Item>
                    <Form.Item label="Associate Name">
                        <Input placeholder="Enter associate name" />
                    </Form.Item>
                    <Form.Item label="Project ID">
                        <Input placeholder="Enter project id" />
                    </Form.Item>
                    <Form.Item label="Project Description">
                        <Input placeholder="Enter project description" />
                    </Form.Item>
                    <Form.Item label="Base Location">
                        <Input placeholder="Enter the base location" />
                    </Form.Item>
                    <Form.Item label="EDL Name">
                        <Input placeholder="Enter EDL Name" />
                    </Form.Item>
                    <Form.Item label="Genc 2022">
                        <Input placeholder="" />
                    </Form.Item>
                    <Form.Item label="Project Manager Name">
                        <Input placeholder="Enter project manager name" />
                    </Form.Item>
                    <Form.Item label="Project Manager ID">
                        <Input placeholder="Enter project manager id" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default Admin
