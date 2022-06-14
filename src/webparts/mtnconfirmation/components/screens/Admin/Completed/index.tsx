import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Select, AdminHeader, Input, Navigation, Helpers, MenuBar, Spinner, Modal, PeoplePicker } from '../../../Containers';
import MaterialTable from "material-table";
import { sp, } from "@pnp/sp"
import swal from 'sweetalert';
import { graph } from "@pnp/graph";
import '@pnp/graph/users';

const AdminCompleted = () => {
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
        { title: "Employee Name", field: "EmployeeName", type: "string" as const },
        { title: "Employee ID", field: "EmployeeID", type: "string" as const },
        { title: "Form No", field: "FormNo", type: "string" as const },
        { title: "Job Title", field: "JobTitle", type: "string" as const },
        { title: "Staff Level", field: "Level", type: "string" as const },
        { title: "Location", field: "Location", type: "string" as const },
        { title: "Division", field: "Division", type: "string" as const },
        { title: "Department", field: "Department", type: "string" as const },
        { title: "Phone Number", field: "Phone", type: "string" as const },
        { title: "Rater", field: "Rater", type: "string" as const },
        { title: "Employment Date", field: "EmploymentDate", type: "string" as const },
        { title: "Confirmation Date", field: "ConfirmationDate", type: "string" as const },
        { title: "Start Date", field: "StartDate", type: "string" as const },
        { title: "End Date", field: "EndDate", type: "string" as const },
        { title: "Status", field: "ConfirmationStatus", type: "string" as const },
        { title: "Approvals", field: "Approvals", type: "string" as const },
    ]);
    const [data, setData] = React.useState([])
    const [name, setName] = React.useState("")
    const [role, setRole] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    const [id, setID] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        sp.web.lists.getByTitle(`Confirmation`).items.filter(`ConfirmationStatus eq 'Completed'`).get().then
            ((res) => {
                setData(res)
                setLoading(false)
            })

    }, [])



    const editHandler = (e) => {
        e.preventDefault()
        sp.web.lists.getByTitle("Confirmation").items.getById(id).update({
            Title: name,
            Email: email,
            Role: role,
        }).then((res) => {
            swal("Success", "Confirmation Edited Successfully", "success");
            sp.web.lists.getByTitle(`Confirmation`).items.get().then
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
            sp.web.lists.getByTitle("Confirmation").items.getById(id).delete().then((res) => {
                swal("Success", "Confirmation has been deleted", "success");
                sp.web.lists.getByTitle(`Confirmation`).items.get().then
                    ((res) => {
                        setData(res)
                    })
            });
        }
    }




    return <div className="appContainer">
        <Navigation complete={`active`} />
        <div className='contentsRight'>
            <AdminHeader title="Completed Requests" />
            {loading ? <Spinner /> : <MaterialTable
                title=""
                columns={columns}
                data={data}
                options={{
                    exportButton: true,
                    actionsCellStyle: {
                        backgroundColor: "none",
                        color: "#FF00dd",
                    },
                    actionsColumnIndex: 0,

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
            />}

        </div>
    </div>;
};

export default AdminCompleted;
