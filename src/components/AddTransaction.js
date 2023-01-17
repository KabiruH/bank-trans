import React from "react";
import { useState } from "react";


function AddTransaction() {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    

    function handleSubmit(e) {
        

        fetch('http://localhost:3000/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                date: date,
                description: description,
                category: category,
                amount: amount,
              
            })
            
        })
        alert ("Added transaction")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="formId">  
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
                <button className='adbut' type='submit'>
                    Add Transaction
                </button>
            </form>

        </div>)
}

export default AddTransaction

