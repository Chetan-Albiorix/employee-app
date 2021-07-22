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
import {
  DeleteEmployeeDetailApi,
  GetEmployeeDetailListApi,
} from '../../api/EmployeeController'
import Spinner from '../Spinner/Spinner'
import CustomSnackbar from '../CustomSnackbar/CustomSnackbar'

const EmployeeList: React.FC = (props: any) => {
  const [
    isOpenConfirmationDialog,
    setIsOpenConfirmationDialog,
  ] = useState<boolean>(false)

  const [
    selectedEmployeeId,
    setSelectedEmployeeId,
  ] = useState<string>('')

  const [isLoading, setIsLoading] =
    useState<boolean>(false)

  const [isShownSnackbar, setIsShownSnackbar] =
    useState<boolean>(false)

  const [responseMessage, setResponseMessage] =
    useState<string>('')

  const [employeeData, setEmployeeData] =
    useState<EmployeeDetailModal[]>([])

  useEffect(() => {
    setIsLoading(true)
    GetEmployeeDetailListApi()
      .then((res) => {
        if (res.data) {
          setEmployeeData(res.data)
        } else {
          console.log('handle error')
        }
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error.message)
      })
  }, [])

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
    setIsLoading(true)
    DeleteEmployeeDetailApi(selectedEmployeeId)
      .then((res) => {
        if (res.data) {
          const tempEmployeeData = [
            ...employeeData,
          ]
          const index =
            tempEmployeeData.findIndex(
              (x) => x.id === res.data
            )
          if (index !== -1) {
            tempEmployeeData.splice(index, 1)
            setEmployeeData(tempEmployeeData)
          }
          setIsShownSnackbar(true)
          setResponseMessage(
            'Employee Detail Deleted Successfully'
          )
        } else {
          console.log('handle error')
        }
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error.message)
      })
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
      {isLoading && <Spinner />}
      {isShownSnackbar && (
        <CustomSnackbar
          message={responseMessage}
          handleClose={setIsShownSnackbar}
        />
      )}
    </>
  )
}

export default withRouter(EmployeeList)
