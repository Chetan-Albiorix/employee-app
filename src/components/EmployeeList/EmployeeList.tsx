import { Button, Grid } from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import React from 'react'
// import styled from 'styled-components'

// const TomatoButton: any = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `

const EmployeeList: React.FC = () => {
  return (
    <>
      <div>
        <h1>Employee Management System</h1>
        <Grid container spacing={1}>
          <Grid xs={11}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PersonAddIcon />}
            >
              Employee
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default EmployeeList
