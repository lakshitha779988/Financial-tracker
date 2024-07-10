import { useUser } from '@clerk/clerk-react';
import {useNavigate} from 'react-router-dom'
import { useFinancialRecords } from '../../contexts/financial-record-contesxt';
import { useMemo } from 'react';
import './home.css';

export  const Home = ()=>{
    const { user } = useUser();
    const { records } = useFinancialRecords();
  
    const totalMonthly = useMemo(() => {
      let totalAmount = 0;
      records.forEach((record) => {
        totalAmount += record.amount;
      });
  
      return totalAmount;
    }, [records]);
  


const navigate = useNavigate();
    const addRecord= ()=>{
        navigate("/addrecord")
    }
    const viewRecord = ()=>{
        navigate("/records")
    }
    let color= 'blue'
    totalMonthly<0 ? color= 'red' : color= 'blue' ;
    return(
        <div className='home'>
           
           <div className='content'>
                <h1>Wellcome to Finance Tracker</h1>
                <p>this is place you can track your work and see how well </p>
                <p style={{color:color}}>Total Monthly: $ {totalMonthly}</p>
                <button onClick={addRecord}><span></span>add</button>
            
            <button onClick={viewRecord}><span></span>view all record</button>


           </div>
           
        </div>
    )
}