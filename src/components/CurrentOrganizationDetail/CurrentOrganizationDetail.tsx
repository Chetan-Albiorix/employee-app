import {
  Box,
  Grid,
  TextField,
} from '@material-ui/core'
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react'
import {
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'
import CurrentOrganizationDetailModal from '../../modals/CurrentOrganizationDetailModal'
import DatePicker from '../DatePicker/DatePicker'

interface CurrentOrganizationDetailProps {
  currentOrganizationDetailState: CurrentOrganizationDetailModal
  ref: any
}

const CurrentOrganizationDetail: React.FC<CurrentOrganizationDetailProps> =
  forwardRef(
    ({ currentOrganizationDetailState }, ref) => {
      const [
        currentOrganizationDetail,
        setCurrentOrganizationDetail,
      ] = useState<CurrentOrganizationDetailModal>(
        currentOrganizationDetailState
      )

      const updateCurrentOrganizationDetail = (
        value: string,
        propertyName: string
      ) => {
        const currentOrganizationDetailTemp = {
          ...currentOrganizationDetail,
        }
        ;(currentOrganizationDetailTemp as any)[
          propertyName
        ] = value
        setCurrentOrganizationDetail(
          currentOrganizationDetailTemp
        )
      }

      const updateJoiningOrNextAppraisalDate = (
        date: Date | null,
        propertyName: string
      ) => {
        const currentOrganizationDetailTemp = {
          ...currentOrganizationDetail,
        }
        ;(currentOrganizationDetailTemp as any)[
          propertyName
        ] = date
        setCurrentOrganizationDetail(
          currentOrganizationDetailTemp
        )
      }

      useImperativeHandle(
        ref,
        () => ({
          getCurrentOrganizationDetailState:
            () => {
              return currentOrganizationDetail
            },
        }),
        [currentOrganizationDetail]
      )

      return (
        <>
          <StepperContainerWrapper>
            <PaperWrapper>
              <h2>Current Organization Detail</h2>
              <Grid container>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <DatePicker
                      date={new Date()}
                      label="Joining Date"
                      disableFuture={true}
                      onDateChanged={(
                        date: Date | null
                      ) => {
                        updateJoiningOrNextAppraisalDate(
                          date,
                          'joiningDate'
                        )
                      }}
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <DatePicker
                      date={new Date()}
                      label="Next Appraisal Date"
                      disableFuture={false}
                      onDateChanged={(
                        date: Date | null
                      ) => {
                        updateJoiningOrNextAppraisalDate(
                          date,
                          'nextAppraisalDate'
                        )
                      }}
                    />
                  </Box>
                </Grid>
                <Grid xs={6}>
                  <Box mx={3} my={1}>
                    <TextField
                      id="standard-disabled"
                      label="Current CTC"
                      fullWidth
                      value={
                        currentOrganizationDetail.currentCtc
                      }
                      onChange={(event) =>
                        updateCurrentOrganizationDetail(
                          event.target.value,
                          'currentCtc'
                        )
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
            </PaperWrapper>
          </StepperContainerWrapper>
        </>
      )
    }
  )

export default CurrentOrganizationDetail
