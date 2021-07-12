import React from 'react'
import './App.css'
import AddOrEditEmployeeDetail from './components/AddOrEditEmployeeDetail/AddOrEditEmployeeDetail'
// import EmployeeList from "./components/EmployeeList/EmployeeList";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* this for listing employee  */}
      {/* <EmployeeList /> */}
      <AddOrEditEmployeeDetail />
    </div>
  )
}

export default App
