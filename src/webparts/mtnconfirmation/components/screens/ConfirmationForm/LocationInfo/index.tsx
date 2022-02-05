import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Header, Input, Select } from '../../../Containers';


const LocatioInfo = () => {
    // Helpers
    const history = useHistory()


    const [location, setLocation] = useState("")
    const [rater, setRater] = useState("")
    const [employementDate, setEmploymentDate] = useState("")
    const [confirmationDate, setConfirmationDate] = useState("")

    const prevHandler = () => {
        history.push("/basicInfo")
    }

    const nextHandler = () => {
        history.push("/reportInfo")
    }

    return <div className="">
        <Header title="Employee Confirmation Form" />
        <div className='mtn__contents'>
            <div className='mtn__formContainer'>
                <div className='mtn__InputFlex'>
                    <Select onChange={(e) => setLocation(e.target.value)} title="Location" value={location}>
                        <option>Select .....</option>
                        <option value="">Level 1</option>
                    </Select>
                    <Input
                        title="Rater"
                        value={rater}
                        onChange={(e) => setRater(e.target.value)}
                        type="text"
                    />

                    <Input
                        title="Employment Date"
                        value={employementDate}
                        onChange={(e) => setEmploymentDate(e.target.value)}
                        type="date"
                    />
                    <Input
                        title="Confirmation Date"
                        value={confirmationDate}
                        onChange={(e) => setConfirmationDate(e.target.value)}
                        type="date"
                    />

                </div>
                <div className='mtn__btnContaainer'>
                    <div> <button className='mtn__btn mtn__blackOutline' type='button' onClick={prevHandler}>Back</button></div>
                    <div> <button className='mtn__btn mtn__black' type='button' onClick={nextHandler}>Next</button></div>
                </div>

            </div>
        </div>
    </div>;
};

export default LocatioInfo;
