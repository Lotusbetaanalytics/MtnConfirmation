import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Select, AdminHeader, Input, Navigation, PeoplePicker, Helpers, Spinner } from '../../../Containers';
import { sp, } from "@pnp/sp"
import swal from 'sweetalert';

const EditConfirmation = ({ match }) => {
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



    const submitHandler = (e) => {
        setLoading(true)
        e.preventDefault()
        sp.web.lists.getByTitle("Confirmation").items.getById(itemID).update({
            EmployeeName: name,
            EmployeeID: id,
            FormNo: formNo,
            JobTitle: title,
            Level: level,
            Division: division,
            Department: department,
            Phone: phone,
            Location: location,
            Rater: rater,
            EmploymentDate: employmentDate,
            ConfirmationDate: confirmationDate,
            StartDate: startDate,
            EndDate: endDate,
            DirectReport: report,
        }).then((res) => {
            swal("Success", "Success", "success");
            history.push("/admin/pending")
            setLoading(false)
        }).catch((e) => {
            swal("Warning!", "An Error Occured, Try Again!", "error");
            setLoading(false)
            console.error(e);
        });

    }

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

    const divisionHandler = (e) => {
        setDivision(e.target.value)
        const filter = divisions.filter((x) => x.Title === e.target.value)
        setDepartments(filter)
    }



    return <div className="appContainer">
        <Navigation init={`active`} />
        <div className='contentsRight'>
            <AdminHeader title="Edit Confirmation Form" />
            {loading ? <Spinner /> : <form onSubmit={submitHandler}>
                <div className='mtn__InputFlex'>
                    <PeoplePicker
                        title="Employee Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        filter="displayName"
                        required={true}
                    />
                    <Input
                        title="Employee ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                        required={true}
                    />

                    <Input
                        title="Form No."
                        value={formNo}
                        onChange={(e) => setFormNo(e.target.value)}
                        type="text"
                        readOnly={true}
                    />
                    <Input
                        title="Job Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        required={true}
                    />
                    <Select onChange={(e) => setLevel(e.target.value)} title="Staff Level" value={level} required={true} options={Helpers.level} />



                    <Select onChange={divisionHandler} title="Division" value={division} required={true} options={divisions} filterOption="Title" filter={true} />


                    <Select onChange={(e) => setDepartment(e.target.value)} title="Department" value={department} required={true} options={departments} filterOption="Department" filter={true} />


                    <Input
                        title="Employee Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.slice(0, 11))}
                        type="number"
                        required={true}
                    />
                    <Select onChange={(e) => setLocation(e.target.value)} title="Location" value={location} required={true} options={locations} filterOption="Title" filter={true} />

                    <PeoplePicker
                        title="Rater"
                        value={rater}
                        onChange={(e) => setRater(e.target.value)}
                        filter="Email"
                        required={true}

                    />

                    <Input
                        title="Employment Date"
                        value={employmentDate}
                        onChange={(e) => setEmploymentDate(e.target.value)}
                        type="date"
                        required={true}
                    />
                    <Input
                        title="Confirmation Date"
                        value={confirmationDate}
                        onChange={(e) => setConfirmationDate(e.target.value)}
                        type="date"
                        required={true}
                    />
                    <Input
                        title="Period Supervised (Start Date)"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        type="date"
                        required={true}
                    />
                    <Input
                        title="Period Supervised (End Date)"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        type="date"
                        required={true}
                    />
                    <div className="mtn__InputContainer mtn__child">
                        <label>Does the employee have direct report?</label>
                        <div className='most__RadioContainer'>
                            <span>Yes <input
                                type="radio"
                                onChange={(e) => setReport("Yes")}
                                value={report}
                                name="report"
                            /></span>
                            <span>No <input
                                type="radio"
                                onChange={(e) => setReport("No")}
                                value={report}
                                name="report"
                            /></span>
                        </div>
                    </div>

                </div>
                <div className='btnContainer'>
                    <button className="mtn__btns mtn__blue" type='submit'>Save</button>
                </div>
            </form>
            }
        </div>
    </div>;
};

export default EditConfirmation;
