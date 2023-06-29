import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Breadcrumb, Table, Modal, Space, Popconfirm, message, Radio } from 'antd';
import "../Admin/Admin.css"
import axios from 'axios';

function Admin() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [isDelModalOpen, setDelIsModalOpen] = useState(false);
    const [associates, setAssociates] = useState([])
    const [delAsso, setAsso] = useState()
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const [newAssociate, setNewAssociate] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/attendance/showAll")
            .then((data) => {
                console.log(associates)
                console.log(data.data)
                setAssociates(data.data)
            })
    }, [])

    const handleDelChange = (e) => {
        setAsso(e.target.value)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAssociate((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        axios.put(("http://localhost:8080/attendance/addAssosiate"), { newAssociate })
            .then(data => console.log("saved"))
            .catch(error => console.log(error));
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            window.location.reload()
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleAdd = () => {
        setOpen(true)

    };

    const handleDel = () => {
        setDelIsModalOpen(true);
    }


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
    ];
    const handleDelOk = () => {
        axios.delete("http://localhost:8080/attendance/deleteAsssosiate/" + delAsso)
        .then(console.log("deleted"))
        .catch(error => console.log(error));
        setDelIsModalOpen(false);
    };
    const handleDelCancel = () => {
        setDelIsModalOpen(false);
    };
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


            <Button danger
                onClick={handleDel}
                style={{
                    marginBottom: 16,
                    marginRight: 15,
                    float: "right",
                    width: "6%"

                }}>Delete</Button>

            <Button
                onClick={handleAdd}
                style={{
                    marginBottom: 16,
                    marginRight: 15,
                    float: "right",
                    width: "6%"

                }}
            >
                Update
            </Button>
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
                    <Form.Item label="Associate ID" >
                        <Input placeholder="Enter associate id" name='associate_id' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Associate Name">
                        <Input placeholder="Enter associate name" name='associate_name' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Project ID">
                        <Input placeholder="Enter project id" name='project_id' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Project Description">
                        <Input placeholder="Enter project description" name='project_desc' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Base Location">
                        <Input placeholder="Enter the base location" name='base_location' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="EDL Name">
                        <Input placeholder="Enter EDL Name" name='edl_name' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Genc 2022">
                        <Input placeholder="" name='genc_2022' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Project Manager Name">
                        <Input placeholder="Enter project manager name" name='project_manager_name' onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Project Manager ID">
                        <Input placeholder="Enter project manager id" name='project_manager_id' onChange={handleChange} />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal title="Remove Associate" open={isDelModalOpen} onOk={handleDelOk} onCancel={handleDelCancel}>
                <Form.Item label="Associate ID" >
                    <Input placeholder="Enter associate id" name='associate_id' onChange={handleDelChange} />
                </Form.Item>
            </Modal>
        </div>
    )
}

export default Admin
