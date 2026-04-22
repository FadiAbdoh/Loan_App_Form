
import './LoanForm.css';
import PopScreen from './PopScreen';
import { useState } from 'react';

export default function LoanForm() {

    const [showPop, setShowPop] = useState({show: false, err: ''});
    const [infos, setInfos] = useState({
        name: '', 
        phone: '', 
        isStudent: false, 
        age: '',
        salary: ''
    });

    function handelBtnSub(e) {
        e.preventDefault();
        console.log(infos)

        if( +infos.age < 18 || +infos.age > 100) {
            setShowPop({show: true, err: 'Age must be between 18 and 100'})
        } else if( !/^07\d{8}$/.test(infos.phone) ) {
            setShowPop({show: true, err: 'Phone must start with 07 and be 10 digits'})
        } else {
            setShowPop({show: true, err: ''})
        }
    }

    function isButtonDisabled() {
        return !infos.name.trim() || !infos.phone.trim() || !infos.age.trim();
        // return !(infos.name.trim() !== '' && infos.phone.trim() !== '' && infos.age.trim() !== '');
        //nothing empty ==> return false 
    }

    return (
        <div className="mainDiv" onClick={() => {
            if (showPop.show) setShowPop({ show: false, err: '' });
        }}>
            <form>
                <h1>Requesting a Loan</h1>
                <hr/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" value={infos.name} onChange={(e) => {
                    setInfos({...infos, name: e.target.value});
                }}/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="07xxxxxxxx" value={infos.phone} onChange={(e) => {
                    setInfos({...infos, phone: e.target.value});
                }}/>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" placeholder="22" value={infos.age} onChange={(e) => {
                    setInfos({...infos, age: e.target.value});
                }}/>

                <div className='div_std'>
                    <label htmlFor='std'>Are you student ??</label>
                    <input type="checkbox" id="std" checked={infos.isStudent} onChange={(e) => {
                        setInfos({...infos, isStudent: e.target.checked})
                    }}/>
                </div>

                <label htmlFor="salary">Salary</label>
                <select id='salary' value={infos.salary} onChange={(e) => {
                    setInfos({...infos, salary: e.target.value})
                    }}>
                    <option value="">Select salary</option>
                    <option>Less than 500$</option>
                    <option>Between 500$ and 2000$</option>
                    <option>Above 2000$</option>
                </select>
                
                <button type='submit' className={isButtonDisabled() ? 'disabled' : ''} disabled={isButtonDisabled()} onClick={handelBtnSub}>Submit</button>

            </form>

            <PopScreen isVisible={showPop.show} errorMsg={showPop.err} />

        </div>
    );
}