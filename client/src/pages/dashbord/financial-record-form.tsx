import { useState } from "react"
import {useUser} from '@clerk/clerk-react'
import { useFinancialRecords } from "../../contexts/financial-record-contesxt";
import {useNavigate} from 'react-router-dom'

export const FinacialRecordForm = () =>{

    const navigate = useNavigate();
    const {user} = useUser();

    const [description ,setDescription] = useState<string>("");
    const [amount ,setAmount] = useState<string>("");
    const [catogary ,setCatogary] = useState<string>("");
    const [paymentMethod ,setPaymentMethod] = useState<string>("");
    const { addRecord } = useFinancialRecords();

    const handleSubmit= (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const newRecord = {
            userId: user?.id ??"",
            date: new Date(),
            description: description,
            amount: parseFloat(amount),
            category: catogary,
            paymentMethod:paymentMethod
        }

        addRecord(newRecord)
        
        setDescription("");
        setAmount("");
        setCatogary("");
        setPaymentMethod("");

    }

    return (
        <div className="form-container">
            
            {user &&
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label >Description</label>
                    <input type="text" required className="input" value={description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="form-field">
                    <label >Amount</label>
                    <input 
                        type="number" required 
                        className="input" 
                        value={amount} 
                        onChange={(e)=>setAmount(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label>Catogary</label>
                    <select 
                        className="input" required
                        value={catogary} 
                        onChange={(e)=>setCatogary(e.target.value)}
                    >
                        <option value="">Select a catogary</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>payment Method</label>
                    <select required 
                        className="input"
                        value={paymentMethod} 
                        onChange={(e)=>setPaymentMethod(e.target.value)}
                    >
                        <option value="">Seclect a Payment Methode</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit"><span></span>Add record</button>
                <button onClick={()=>{navigate("/")}}><span></span>Home</button>
                    
                


            </form>
        }
        
        </div>
    )
}