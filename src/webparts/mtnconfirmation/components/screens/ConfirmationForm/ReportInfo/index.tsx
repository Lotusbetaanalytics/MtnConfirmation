import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Header, Input, Select } from '../../../Containers';


const Report = () => {
    // Helpers
    const history = useHistory()


    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [report, setReport] = useState("")

    const prevHandler = () => {
        history.push("/basicInfo")
    }

    const nextHandler = () => {
        history.push("/locationInfo")
    }

    return <div className="">
        <Header title="Employee Confirmation Form" />
        <div className='mtn__contents'>
            <div className='mtn__formContainer'>
                <div className='mtn__InputFlex'>

                    <Input
                        title="Period Supervised (Start Date)"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        type="date"
                    />
                    <Input
                        title="Period Supervised (End Date)"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        type="date"
                    />
                    <div className="mtn__InputContainer mtn__child">
                        <label>Does the employee have direct report?</label>
                        <div className='most__RadioContainer'>
                            <span>Yes <input
                                type="radio"
                                onChange={(e) => setReport(e.target.value)}
                                value={report}
                                name="report"
                            /></span>
                            <span>No <input
                                type="radio"
                                onChange={(e) => setReport(e.target.value)}
                                value={report}
                                name="report"
                            /></span>
                        </div>

                    </div>
                    <div className="mtn__InputContainer mtn__child"></div>
                </div>
                <div className='mtn__btnContaainer'>
                    <div> <button className='mtn__btn mtn__blackOutline' type='button' onClick={prevHandler}>Back</button></div>
                    <div> <button className='mtn__btn mtn__black' type='button' onClick={nextHandler}>Submit</button></div>
                </div>

            </div>
        </div>
    </div>;
};

export default Report;
