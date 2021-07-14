import {
  Button,
  Grid,
  Paper,
} from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import React from 'react'
import EmployeeListTable from '../EmployeeListTable/EmployeeListTable'
import {
  EmployeeListContainer,
  EmployeeListHeader,
  EmployeeTableContainer,
} from './EmployeeList.Style'
import { withRouter } from 'react-router'
import EmployeeDetailModal from '../../modals/EmployeeDetailModal'

const EmployeeList: React.FC = (props: any) => {
  let employeeData: EmployeeDetailModal[] = []
  let employeeDetailList = localStorage.getItem(
    'employeeDetailList'
  )

  if (employeeDetailList) {
    employeeData = JSON.parse(employeeDetailList)
  }

  const addNewEmployeeDetail = () => {
    props.history.push('/employee')
  }
  const onDeleteRow = (id: string) => {}

  const onEditRow = (id: string) => {
    const employeeDetail = employeeData.find(
      (x) => x.id === id
    )
    props.history.push({
      pathname: '/employee/' + id,
      state: [employeeDetail], // employee detail record
    })
  }

  return (
    <>
      <EmployeeListContainer
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Paper className="employee-wrapper">
          <Grid xs={12}>
            <h1>Employee Management System</h1>
          </Grid>
          <EmployeeListHeader xs={12}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PersonAddIcon />}
              onClick={addNewEmployeeDetail}
            >
              Employee
            </Button>
          </EmployeeListHeader>
          <EmployeeTableContainer xs={12}>
            <EmployeeListTable
              employeeDetailList={employeeData}
              onDeleteRow={() => {}}
              onEditRow={onEditRow}
            />
          </EmployeeTableContainer>
        </Paper>
      </EmployeeListContainer>
    </>
  )
}

export default withRouter(EmployeeList)
