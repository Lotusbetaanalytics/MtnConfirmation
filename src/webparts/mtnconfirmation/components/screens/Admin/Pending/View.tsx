import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Select, AdminHeader, Input, Navigation, Helpers, MenuBar, Spinner, Text } from '../../../Containers';
import MaterialTable from "material-table";
import { sp, } from "@pnp/sp"
import swal from 'sweetalert';
import { graph } from "@pnp/graph";
import '@pnp/graph/users';

const AdminViewPending = ({ match }) => {
    // Helpers
    const history = useHistory()
    const itemID = match.params.id

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [formNo, setFormNo] = useState("")
    const [title, setTitle] = useState("")
    const [level, setLevel] = useState("")
    const [division, setDivision] = useState("")
    const [department, setDepartment] = useState("")
    const [phone, setPhone] = useState("")
    const [location, setLocation] = useState("")
    const [rater, setRater] = useState("")
    const [employmentDate, setEmploymentDate] = useState("")
    const [confirmationDate, setConfirmationDate] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [report, setReport] = useState("")
    const [locations, setLocations] = useState([])
    const [divisions, setDivisions] = useState([])
    const [departments, setDepartments] = useState([])


    const [data, setData] = React.useState([])


    React.useEffect(() => {
        sp.web.lists.getByTitle(`Confirmation`).items.filter(`ID eq '${itemID}'`).get().then
            ((res) => {
                setName(res[0].EmployeeName)
                setId(res[0].EmployeeID)
                setFormNo(res[0].FormNo)
                setTitle(res[0].JobTitle)
                setLevel(res[0].Level)
                setDivision(res[0].Division)
                setDepartment(res[0].Department)
                setPhone(res[0].Phone)
                setLocation(res[0].Location)
                setRater(res[0].Rater)
                setEmploymentDate(res[0].EmploymentDate)
                setConfirmationDate(res[0].ConfirmationDate)
                setStartDate(res[0].StartDate)
                setEndDate(res[0].EndDate)
                setReport(res[0].DirectReport)
                sp.web.lists.getByTitle(`Division`).items.get().then
                    ((resp) => {
                        setDivisions(resp)
                        const filter = resp.filter((x) => x.Title === res[0].Division)
                        setDepartments(filter)
                    })
                sp.web.lists.getByTitle(`Location`).items.get().then
                    ((resps) => {
                        setLocations(resps)
                    })
            })
    }, [])


    const closeConfirmation = () => {
        setLoading(true)
        sp.web.lists.getByTitle("Confirmation").items.getById(itemID).update({
            Status: "Completed"
        }).then((res) => {
            swal("Success", "Success", "success");
            history.push("/admin/completed")
            setLoading(false)
        }).catch((e) => {
            swal("Warning!", "An Error Occured, Try Again!", "error");
            setLoading(false)
            console.error(e);
        });
    }



    return <div className="appContainer">
        <Navigation pending={`active`} />
        <div className='contentsRight'>
            <AdminHeader title="Pending Requests" />
            {loading ? <Spinner /> :
                <div className='textContainer'>
                    <Text title="Employee Name" value={name} />
                    <Text title="Employee ID" value={id} />
                    <Text title="Form No." value={formNo} />
                    <Text title="Job Title" value={title} />
                    <Text title="Staff Level" value={level} />
                    <Text title="Division" value={division} />
                    <Text title="Department" value={department} />
                    <Text title="Employee Phone Number" value={phone} />
                    <Text title="Location" value={location} />
                    <Text title="Rater" value={rater} />
                    <Text title="Employment Date" value={employmentDate} />
                    <Text title="Confirmation Date" value={confirmationDate} />
                    <Text title="Period Supervised (Start Date)" value={startDate} />
                    <Text title="Period Supervised (End Date)" value={endDate} />
                    <Text title="Does the employee have direct report?" value={report} />
                </div>
            }
            <div className='btnContainer'>
                <button className="mtn__btns mtn__blue" type='button' onClick={closeConfirmation}>Close Confirmation</button>
            </div>
        </div>
    </div>;
};

export default AdminViewPending;
