import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core'
import React from 'react'
import { TableWrapper } from '../../common/Global.Style'
import EducationDetailModal from '../../modals/EducationDetailModal'
import SaveIcon from '@material-ui/icons/Save'
import ClearIcon from '@material-ui/icons/Clear'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

interface EmployeeTableProps {
  isEdit: boolean
  currentIndex: number
  tableHeaderItem: string[]
  tableItemList: any[]
  updateItemDetail: (
    value: string,
    index: number,
    propertyName: string
  ) => void
  saveEducationDetail: (index: number) => void
  cancelEducationDetail: (index: number) => void
  editEducationDetail: (index: number) => void
  deleteEducationDetail: (index: number) => void
}

const EmployeeTable: React.FC<EmployeeTableProps> =
  ({
    isEdit,
    currentIndex,
    tableHeaderItem,
    tableItemList,
    updateItemDetail,
    saveEducationDetail,
    cancelEducationDetail,
    editEducationDetail,
    deleteEducationDetail,
  }) => {
    const isDisabledRow = (index: number) => {
      return !(isEdit && currentIndex === index)
    }

    const generateTextField = (
      educationDetail: EducationDetailModal,
      index: number
    ) => {
      const fieldList = Object.keys(
        educationDetail
      )
      return fieldList.length > 0 ? (
        <>
          {fieldList.map((item) => {
            if (item === '_id') {
              return ''
            }
            return (
              <TableCell
                component="th"
                scope="row"
              >
                <TextField
                  id="standard-multiline-flexible"
                  label={camelToTitle(item)}
                  value={
                    (educationDetail as any)[
                      item
                    ] as string
                  }
                  fullWidth
                  onChange={(event) =>
                    updateItemDetail(
                      event.target.value,
                      index,
                      item
                    )
                  }
                  disabled={isDisabledRow(index)}
                />
              </TableCell>
            )
          })}
        </>
      ) : (
        ''
      )
    }

    const camelToTitle = (value: string) =>
      value
        .replace(
          /([A-Z])/g,
          (match) => ` ${match}`
        )
        .replace(/^./, (match) =>
          match.toUpperCase()
        )
        .trim()

    return (
      <TableWrapper>
        <TableContainer
          component={Paper}
          elevation={1}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHeaderItem.length > 0 &&
                  tableHeaderItem.map(
                    (name: string) => {
                      return (
                        <TableCell align="left">
                          {name}
                        </TableCell>
                      )
                    }
                  )}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableItemList.length > 0 ? (
                tableItemList.map(
                  (
                    educationDetail: EducationDetailModal,
                    index: number
                  ) => (
                    <TableRow key={index}>
                      {generateTextField(
                        educationDetail,
                        index
                      )}
                      <TableCell align="center">
                        {isEdit &&
                        currentIndex === index ? (
                          <>
                            <Button
                              onClick={() =>
                                saveEducationDetail(
                                  index
                                )
                              }
                            >
                              <SaveIcon
                                color="primary"
                                style={{
                                  fontSize: 28,
                                }}
                              />
                            </Button>
                            <Button
                              onClick={() =>
                                cancelEducationDetail(
                                  index
                                )
                              }
                            >
                              <ClearIcon
                                color="error"
                                style={{
                                  fontSize: 28,
                                }}
                              />
                            </Button>
                          </>
                        ) : (
                          <Button
                            onClick={() =>
                              editEducationDetail(
                                index
                              )
                            }
                          >
                            <EditIcon
                              color="primary"
                              style={{
                                fontSize: 28,
                              }}
                            />
                          </Button>
                        )}
                        <Button
                          onClick={() =>
                            deleteEducationDetail(
                              index
                            )
                          }
                        >
                          <DeleteIcon
                            color="secondary"
                            style={{
                              fontSize: 28,
                            }}
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                )
              ) : (
                <Grid xs={12}>
                  <b> No Data Added</b>
                </Grid>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    )
  }

export default EmployeeTable
