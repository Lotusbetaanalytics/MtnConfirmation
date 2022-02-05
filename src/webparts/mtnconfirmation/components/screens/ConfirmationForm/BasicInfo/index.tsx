import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Header, Input } from '../../../Containers';


const BasicInfo = () => {
    // Helpers
    const history = useHistory()


    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [formNo, setFormNo] = useState("")
    const [title, setTitle] = useState("")

    const prevHandler = () => {
        history.push("/")
    }

    const nextHandler = () => {
        history.push("/staffInfo")
    }

    return <div className="">
        <Header title="Employee Confirmation Form" />
        <div className='mtn__contents'>
            <div className='mtn__formContainer'>
                <div className='mtn__InputFlex'>
                    <Input
                        title="Employee Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                    />
                    <Input
                        title="Employee ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        type="text"
                    />

                    <Input
                        title="Form No."
                        value={formNo}
                        onChange={(e) => setFormNo(e.target.value)}
                        type="text"
                    />
                    <Input
                        title="Job Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
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

export default BasicInfo;
