import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom'
import './App.css'
import AddOrEditEmployeeDetail from './components/AddOrEditEmployeeDetail/AddOrEditEmployeeDetail'
import EmployeeList from './components/EmployeeList/EmployeeList'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            children={<EmployeeList />}
          />
          {/* <Route
            path="/employee/:id"
            children={<AddOrEditEmployeeDetail />}
          /> */}
          <Route
            path="/employee"
            exact
            children={<AddOrEditEmployeeDetail />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
