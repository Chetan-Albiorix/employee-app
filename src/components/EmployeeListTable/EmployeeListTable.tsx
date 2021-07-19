import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import EmployeeDetailModal from '../../modals/EmployeeDetailModal'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Button } from '@material-ui/core'

interface Column {
  id:
    | 'name'
    | 'department'
    | 'designation'
    | 'email'
    | 'mobileNo'
    | 'action'
  label: string
  minWidth?: number
  align?: 'right' | 'center' | 'left'
  action?: any
}

interface Employee {
  id: string
  name: string
  department: string
  designation: string
  email: string
  mobileNo: string
  action: any
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
})

interface EmployeeListTableProps {
  employeeDetailList: EmployeeDetailModal[]
  onEditRow: (id: string) => void
  onDeleteRow: (id: string) => void
}

const EmployeeListTable: React.FC<EmployeeListTableProps> =
  ({
    employeeDetailList,
    onEditRow,
    onDeleteRow,
  }) => {
    const classes = useStyles()

    const [employeeRecord, setEmployeeRecord] =
      useState<Employee[]>([])

    const [page, setPage] = React.useState(0)

    const [rowsPerPage, setRowsPerPage] =
      React.useState(5)

    const handleChangePage = (
      event: unknown,
      newPage: number
    ) => {
      setPage(newPage)
    }

    useEffect(() => {
      const employeeListTemp: Employee[] = []
      if (
        employeeDetailList &&
        employeeDetailList.length > 0
      ) {
        employeeDetailList.forEach(
          (
            employeeDetail: EmployeeDetailModal
          ) => {
            const tableRow: Employee = {
              id: '',
              name: '',
              department: '',
              designation: '',
              email: '',
              mobileNo: '',
              action: '',
            }
            tableRow.id = employeeDetail.id
            tableRow.name =
              employeeDetail.personalDetail
                ? employeeDetail.personalDetail
                    .firstName +
                  '' +
                  employeeDetail.personalDetail
                    .lastName
                : ''
            tableRow.department =
              employeeDetail.professionalDetail
                ? employeeDetail
                    .professionalDetail.department
                : ''
            tableRow.designation =
              employeeDetail.professionalDetail
                ? employeeDetail
                    .professionalDetail
                    .designation
                : ''
            tableRow.email =
              employeeDetail.personalDetail
                ? employeeDetail.personalDetail
                    .email
                : ''
            tableRow.mobileNo =
              employeeDetail.personalDetail
                ? employeeDetail.personalDetail
                    .mobileNumber
                : ''
            employeeListTemp.push(tableRow)
          }
        )
        setEmployeeRecord(employeeListTemp)
      } else {
        setEmployeeRecord([])
      }
    }, [employeeDetailList])

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    }

    const columns: Column[] = [
      {
        id: 'name',
        label: 'Name',
        minWidth: 200,
      },
      {
        id: 'department',
        label: 'Department',
        minWidth: 100,
        align: 'center',
      },
      {
        id: 'designation',
        label: 'Designation',
        minWidth: 100,
        align: 'center',
      },
      {
        id: 'email',
        label: 'Email',
        minWidth: 150,
        align: 'center',
      },
      {
        id: 'mobileNo',
        label: 'Mobile Number',
        minWidth: 150,
        align: 'center',
      },
      {
        id: 'action',
        label: '',
        minWidth: 100,
        align: 'right',
        action: (id: string) => {
          return (
            <>
              <Button
                onClick={() =>
                  onEditBtnClicked(id)
                }
              >
                <EditIcon
                  color="primary"
                  style={{
                    fontSize: 28,
                  }}
                />
              </Button>
              <Button
                onClick={() =>
                  onDeleteBtnClicked(id)
                }
              >
                <DeleteIcon
                  color="secondary"
                  style={{
                    fontSize: 28,
                  }}
                />
              </Button>
            </>
          )
        },
      },
    ]

    const onEditBtnClicked = (id: string) => {
      onEditRow(id)
    }

    const onDeleteBtnClicked = (id: string) => {
      onDeleteRow(id)
    }

    return (
      <Paper className={classes.root}>
        <TableContainer
          className={classes.container}
        >
          <Table
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeRecord
                .slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      {columns.map((column) => {
                        const value =
                          row[column.id]
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                          >
                            {column.action
                              ? column.action(
                                  row.id
                                )
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={employeeRecord.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={
            handleChangeRowsPerPage
          }
        />
      </Paper>
    )
  }
export default EmployeeListTable
