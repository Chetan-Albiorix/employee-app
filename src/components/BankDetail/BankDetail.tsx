import {
  Box,
  Grid,
  TextField,
} from '@material-ui/core'
import React, {
  forwardRef,
  useImperativeHandle,
} from 'react'
import { useState } from 'react'
import {
  PaperWrapper,
  StepperContainerWrapper,
} from '../../common/Global.Style'
import BankDetailModal from '../../modals/BankDetailModal'

interface BankDetailStateProps {
  bankDetailState: BankDetailModal
  ref: any
}

const BankDetail: React.FC<BankDetailStateProps> =
  forwardRef(({ bankDetailState }, ref) => {
    const [bankDetail, setBankDetail] =
      useState<BankDetailModal>(bankDetailState)

    const updateBankDetail = (
      value: string,
      propertyName: string
    ) => {
      const bankDetailTemp = { ...bankDetail }
      ;(bankDetailTemp as any)[propertyName] =
        value
      setBankDetail(bankDetailTemp)
    }

    useImperativeHandle(
      ref,
      () => ({
        getBankDetailState: () => {
          return bankDetail
        },
      }),
      [bankDetail]
    )

    return (
      <>
        <StepperContainerWrapper>
          <PaperWrapper>
            <h2>Bank Detail</h2>
            <Grid container>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="Bank Name"
                    fullWidth
                    value={bankDetail.bankName}
                    onChange={(event) =>
                      updateBankDetail(
                        event.target.value,
                        'bankName'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="Account Name"
                    fullWidth
                    value={bankDetail.accountName}
                    onChange={(event) =>
                      updateBankDetail(
                        event.target.value,
                        'accountName'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="Bank Account Number"
                    fullWidth
                    value={
                      bankDetail.bankAccountNo
                    }
                    onChange={(event) =>
                      updateBankDetail(
                        event.target.value,
                        'bankAccountNo'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="IFSC Code"
                    fullWidth
                    value={bankDetail.ifscCode}
                    onChange={(event) =>
                      updateBankDetail(
                        event.target.value,
                        'ifscCode'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="Aadhaar Card Number"
                    fullWidth
                    value={
                      bankDetail.aadhaarCardNumber
                    }
                    onChange={(event) =>
                      updateBankDetail(
                        event.target.value,
                        'aadhaarCardNumber'
                      )
                    }
                  />
                </Box>
              </Grid>
              <Grid xs={6}>
                <Box mx={3} my={1}>
                  <TextField
                    id="standard-disabled"
                    label="PAN CARD Number"
                    fullWidth
                    value={
                      bankDetail.panCardNumber
                    }
                    onChange={(event) =>
                      updateBankDetail(
                        event.target.value,
                        'panCardNumber'
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
  })

export default BankDetail
