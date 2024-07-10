import './App.css'
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom"
import { Dashboard } from './pages/dashbord'
import { Auth } from './pages/auth'
import { FinancialRecordProvider } from './contexts/financial-record-contesxt'
import { FinacialRecordForm } from './pages/dashbord/financial-record-form'
import { Home } from './pages/Home'
import { FinancialRecordList } from './pages/dashbord/finacial-record-list'




function App() {
 

  return (
    
    <Router>
      {/* <Navbar/> */}
      <Routes>
          <Route path='/dashbord' element={<FinancialRecordProvider><Dashboard/></FinancialRecordProvider>
           }/>
           <Route path='/' element={<FinancialRecordProvider><Home/></FinancialRecordProvider>}/>
           <Route path='/addrecord' element={<FinancialRecordProvider><FinacialRecordForm/></FinancialRecordProvider>}/>
           <Route path='/records' element={<FinancialRecordProvider><FinancialRecordList/></FinancialRecordProvider>}/>
          <Route path='/auth' element={<Auth/>}/>
        
      </Routes>


    </Router>
      
        
    
  )
}

export default App
