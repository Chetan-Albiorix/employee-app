import {
  Button,
  Grid,
  Paper,
} from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import React, { useEffect, useState } from 'react'
import EmployeeListTable from '../EmployeeListTable/EmployeeListTable'
import {
  EmployeeListContainer,
  EmployeeListHeader,
  EmployeeTableContainer,
} from './EmployeeList.Style'
import { withRouter } from 'react-router'
import EmployeeDetailModal from '../../modals/EmployeeDetailModal'
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog'
import { GetEmployeeDetailListApi } from '../../api/EmployeeController'

const EmployeeList: React.FC = (props: any) => {
  const [
    isOpenConfirmationDialog,
    setIsOpenConfirmationDialog,
  ] = useState<boolean>(false)
  const [
    selectedEmployeeId,
    setSelectedEmployeeId,
  ] = useState<string>('')

  let employeeDetailList = localStorage.getItem(
    'employeeDetailList'
  )

  useEffect(() => {
    let employeeDetailList = localStorage.getItem(
      'employeeDetailList'
    )
  }, [])

  useEffect(() => {
    GetEmployeeDetailListApi()
      .then((res) => {
        debugger
        console.log('res' + res)
      })
      .catch((error) => console.log(error))
  })

  let employeeDataTemp: EmployeeDetailModal[] = []
  if (employeeDetailList) {
    employeeDataTemp = JSON.parse(
      employeeDetailList
    )
  }
  const [employeeData, setEmployeeData] =
    useState<EmployeeDetailModal[]>(
      employeeDataTemp
    )

  const addNewEmployeeDetail = () => {
    props.history.push('/employee')
  }

  const onEditRow = (id: string) => {
    const employeeDetail = employeeData!.find(
      (x) => x.id === id
    )
    props.history.push({
      pathname: '/employee/' + id,
      state: [employeeDetail], // employee detail record
    })
  }

  const onDeleteRow = (id: string) => {
    setIsOpenConfirmationDialog(true)
    setSelectedEmployeeId(id)
  }

  const onAcceptClicked = () => {
    const employeeDataTemp = [...employeeData]
    const index = employeeDataTemp.findIndex(
      (x) => x.id === selectedEmployeeId
    )
    if (index !== -1) {
      employeeDataTemp.splice(index, 1)
      setEmployeeData(employeeDataTemp)
      localStorage.setItem(
        'employeeDetailList',
        ''
      )
      localStorage.setItem(
        'employeeDetailList',
        JSON.stringify(employeeDataTemp)
      )
    }
    setIsOpenConfirmationDialog(false)
  }

  const onCancelClicked = () => {
    setIsOpenConfirmationDialog(false)
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
              employeeDetailList={
                employeeData ? employeeData : []
              }
              onDeleteRow={onDeleteRow}
              onEditRow={onEditRow}
            />
          </EmployeeTableContainer>
        </Paper>
      </EmployeeListContainer>
      {isOpenConfirmationDialog && (
        <ConfirmationDialog
          onAcceptClicked={onAcceptClicked}
          onCancelClicked={onCancelClicked}
        />
      )}
    </>
  )
}

export default withRouter(EmployeeList)
