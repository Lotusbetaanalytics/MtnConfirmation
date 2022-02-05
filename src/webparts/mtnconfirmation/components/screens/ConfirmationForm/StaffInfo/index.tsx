import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Header, Input, Select } from '../../../Containers';


const StaffInfo = () => {
    // Helpers
    const history = useHistory()


    const [level, setLevel] = useState("")
    const [division, setDivision] = useState("")
    const [department, setDepartment] = useState("")
    const [phone, setPhone] = useState("")

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
                    <Select onChange={(e) => setLevel(e.target.value)} title="Staff Level" value={level}>
                        <option>Select .....</option>
                        <option value="">Level 1</option>
                    </Select>

                    <Select onChange={(e) => setDivision(e.target.value)} title="Division" value={division}>
                        <option>Select .....</option>
                        <option value="">Level 1</option>
                    </Select>

                    <Select onChange={(e) => setDepartment(e.target.value)} title="Department" value={department}>
                        <option>Select .....</option>
                        <option value="">Level 1</option>
                    </Select>

                    <Input
                        title="Employee Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.slice(0, 11))}
                        type="number"
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

export default StaffInfo;
