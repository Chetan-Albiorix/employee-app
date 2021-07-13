import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export interface ListItem {
  id: number
  value: string
}

interface MultiSelectProps {
  label: string
  placeHolder: string
  optionsList: ListItem[]
  selectedOptions: string[]
  updateSelectedOption: (
    selectedOptions: string[]
  ) => void
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  placeHolder,
  optionsList,
  selectedOptions,
  updateSelectedOption,
}) => {
  const getSelectedValue = (
    selectedOptions: string[]
  ) => {
    return selectedOptions.length > 0
      ? optionsList.filter((item: ListItem) => {
          return selectedOptions.includes(
            item.value
          )
            ? item
            : false
        })
      : []
  }

  const onSelectionChanged = (
    selectedOptions: ListItem[]
  ) => {
    updateSelectedOption(
      selectedOptions.length > 0
        ? selectedOptions.map(
            (item) => item.value
          )
        : []
    )
  }

  return (
    <>
      <Autocomplete
        multiple
        options={optionsList}
        getOptionLabel={(option: ListItem) =>
          option.value
        }
        value={getSelectedValue(selectedOptions)}
        onChange={(
          event,
          values: ListItem[],
          reason: string
        ) => {
          onSelectionChanged(values)
        }}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder={placeHolder}
          />
        )}
      />
    </>
  )
}

export default MultiSelect
