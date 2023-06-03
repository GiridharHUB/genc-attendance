import React, { useState } from 'react'
import { Button, Form, Input, Popconfirm, Table, Modal } from 'antd';
import "../Admin/Admin.css"

function Admin() {
    const [count, setCount] = useState(2);
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

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
        ;
        setOpen(true)
        // const newData = {
        //   key: count,
        //   name: `Edward King ${count}`,
        //   age: '32',
        //   address: `London, Park Lane no. ${count}`,
        // };
        //setDataSource([...dataSource, newData]);
        //setCount(count + 1);
    };
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <div style={{ width: "100%", padding: "2vh" }}>
            <Button
                onClick={handleAdd}
                style={{
                    marginBottom: 16,
                    marginRight: 15,
                    background: "#000048",
                    color: 'white'

                }}
            >
                Add
            </Button>
            <Button
                onClick={handleAdd}
                style={{
                    marginBottom: 16,
                    marginRight: 15,
                    background: "#000048",
                    color: 'white'

                }}
            >
                Delete
            </Button>
            <Button
                onClick={handleAdd}
                style={{
                    marginBottom: 16,
                    marginRight: 15,
                    background: "#000048",
                    color: 'white'
                }}
            >
                Update
            </Button>
            <Table style={{ paddingInline: "4vh" }} bordered dataSource={dataSource} columns={columns} />
            <Modal
                title="Add Associates"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {/* <div className='addForm'> */}
                    <form className='addForm'>
                        <label>Associate Id: &nbsp;
                            <input className='addinputs' />
                        </label>
                        <label>Associate Name: &nbsp;
                            <input className='addinputs' />
                        </label>
                        <label>Project Id: &nbsp;
                            <input className='addinputs' />
                        </label>
                        <label>Project Name: &nbsp;
                            <input className='addinputs' />
                        </label>
                        <label>Project Location: &nbsp;
                            <input className='addinputs' />
                        </label>
                    </form>
                {/* </div> */}
            </Modal>
        </div>
    )
}

export default Admin
