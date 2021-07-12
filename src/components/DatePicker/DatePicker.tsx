import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

interface DateTimePickerProps {
  label: string
  date: Date | null
  disableFuture: boolean
  onDateChanged: (date: Date | null) => void
}

const DatePicker: React.FC<DateTimePickerProps> =
  ({
    label,
    date,
    disableFuture,
    onDateChanged,
  }) => {
    const [selectedDate, setSelectedDate] =
      React.useState<Date | null>(date)

    const handleDateChange = (
      date: Date | null
    ) => {
      setSelectedDate(date)
      onDateChanged(date)
    }
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <Grid
          container
          justifyContent="space-around"
        >
          <KeyboardDatePicker
            animateYearScrolling
            disableFuture={disableFuture}
            format="MM/dd/yyyy"
            id="date-picker-inline"
            label={label}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            fullWidth
          />
        </Grid>
      </MuiPickersUtilsProvider>
    )
  }

export default DatePicker
