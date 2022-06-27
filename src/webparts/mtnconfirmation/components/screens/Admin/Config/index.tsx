import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Select, AdminHeader, Input, Navigation, Helpers, MenuBar, Spinner, Modal, PeoplePicker } from '../../../Containers';
import MaterialTable from "material-table";
import { sp, } from "@pnp/sp"
import swal from 'sweetalert';
import { graph } from "@pnp/graph";
import '@pnp/graph/users';

const Roles = () => {
    // Helpers
    const history = useHistory()

    type IType =
        | "string"
        | "boolean"
        | "numeric"
        | "date"
        | "datetime"
        | "time"
        | "currency";
    const string: IType = "string";


    const [columns, setColumns] = React.useState([
        { title: "Name", field: "Title", type: "string" as const },
        { title: "Role", field: "Role", type: "string" as const },
    ]);

    const [data, setData] = React.useState([])
    const [name, setName] = React.useState("")
    const [role, setRole] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    const [id, setID] = React.useState(null)

    React.useEffect(() => {
        sp.web.lists.getByTitle(`Admin`).items.get().then
            ((res) => {
                setData(res)
            })

    }, [])



    // Menubar Items
    const menu = [
        { name: "Roles", url: "/admin/config", active: true, },
        { name: "Location", url: "/admin/location" },
        { name: "Division", url: "/admin/division" },
    ];


    const submitHandler = (e) => {
        e.preventDefault()
        sp.web.lists.getByTitle("Admin").items.add({
            Title: name,
            Email: email,
            Role: role,
        }).then((res) => {
            setOpen(false)
            swal("Success", "Admin added Successfully", "success");
            sp.web.lists.getByTitle(`Admin`).items.get().then
                ((res) => {
                    setData(res)
                })

        }).catch((e) => {
            swal("Warning!", "An Error Occured, Try Again!", "error");
            console.error(e);
        });

    }

    const editHandler = (e) => {
        e.preventDefault()
        sp.web.lists.getByTitle("Admin").items.getById(id).update({
            Title: name,
            Email: email,
            Role: role,
        }).then((res) => {
            setOpen(false)
            swal("Success", "Admin Edited Successfully", "success");
            sp.web.lists.getByTitle(`Admin`).items.get().then
                ((res) => {
                    setData(res)
                })
        }).catch((e) => {
            swal("Warning!", "An Error Occured, Try Again!", "error");
            console.error(e);
        });

    }
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete")) {
            sp.web.lists.getByTitle("Admin").items.getById(id).delete().then((res) => {
                swal("Success", "Admin has been deleted", "success");
                sp.web.lists.getByTitle(`Admin`).items.get().then
                    ((res) => {
                        setData(res)
                    })
            });
        }
    }
    const openHandler = () => {
        setOpen(true)
        setEdit(false)
    }


    const mailHandler = (e) => {
        setName(e.target.value)
        const staff = e.target.value
        graph.users.top(999).get().then((res) => {
            const filteredData = res.filter((x) => x.displayName === staff)
            setEmail(filteredData[0].mail)
        })
    }

    return <div className="appContainer">
        <Navigation config={`active`} />
        <div className='contentsRight'>
            <AdminHeader title="Roles" />
            <MenuBar menu={menu} />
            <div className='btnContainer right'>
                <button onClick={openHandler} className="mtn__btns mtn__blue" type='button'>Add Admin</button>
            </div>
            <MaterialTable
                title=""
                columns={columns}
                data={data}
                options={{
                    exportButton: true,
                    actionsCellStyle: {
                        backgroundColor: "none",
                        color: "#FF00dd",
                    },
                    actionsColumnIndex: -1,

                    headerStyle: {
                        backgroundColor: "#FFCC00",
                        color: "black",
                    },
                    rowStyle: {
                        fontSize: 13,
                    }

                }}
                style={{
                    boxShadow: "none",
                    width: "100%",
                    background: "none",
                    fontSize: "13px",
                }}
                // icons={{Add: () => 'Add Row'}}
                actions={[
                    {
                        icon: "visibility",
                        iconProps: { style: { fontSize: "11px", color: "gold" } },
                        tooltip: "Edit",

                        onClick: (event, rowData) => {
                            setEdit(true)
                            setOpen(true)
                            setID(rowData.ID)
                            setName(rowData.Title)
                            setRole(rowData.Role)

                        },
                    },
                    {
                        icon: "visibility",
                        iconProps: { style: { fontSize: "11px", color: "gold" } },
                        tooltip: "Delete",

                        onClick: (event, rowData) => {
                            deleteHandler(rowData.ID)
                        },
                    },
                ]}
                components={{
                    Action: (props) => (
                        <button
                            onClick={(event) => props.action.onClick(event, props.data)}
                            className="mtn__btn_table mtn__black"
                        >
                            {props.action.tooltip}
                        </button>
                    ),
                }}
            />
            <Modal
                isVisible={open}
                title="Admin"
                size='lg'
                content={

                    loading ? <Spinner /> : <div className="mtn__InputFlex">

                        <PeoplePicker
                            title="Name"
                            value={name}
                            onChange={mailHandler}
                            size='mtn__adult'
                            filter="displayName"
                        />
                        <Input
                            title="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} type="text"
                            size='mtn__adult'
                            readOnly={true}
                        />
                        <Select
                            title="Role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            size='mtn__adult'
                            options={Helpers.roles}
                        />

                        <button
                            onClick={edit ? editHandler : submitHandler}
                            type="button"
                            className='mtn__btn mtn__yellow'
                        >{edit ? "Edit Admin" : "Add Admin"}</button>

                    </div>

                }
                onClose={() => setOpen(false)}

                footer=""

            />
        </div>
    </div>;
};

export default Roles;