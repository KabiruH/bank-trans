import React from "react";
import { useState } from "react";

function AddTransaction() {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [id, setId] = useState('')

    const handleSubmit = () => {
        const newTransaction = { id, date, description, category, amount }

        fetch('http://localhost:3000/transactions', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTransaction),
        }).then(() => { });
    }

    return (
        <div >
            <form>
                <div className="formId" key={setId}>
                    <input
                        className="textinput"
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                        className="textinput"
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input
                        className="textinput"
                        type='text'
                        name='category'
                        placeholder='Category'
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                    <input
                        className="textinput"
                        type='number'
                        name='amount'
                        placeholder='Amount'
                        step='0.01'
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </div>
                <button className='adbut' type='submit' onClick={handleSubmit}>
                    Add Transaction
                </button>
            </form>

        </div>)
}

export default AddTransaction

