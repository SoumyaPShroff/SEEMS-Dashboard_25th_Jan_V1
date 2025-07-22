import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

export default function ProjectAutocompleteDropdown(props) {
  const { optionsList, handleChange, value, isLoading } = props;
  return (
    <Autocomplete
      disabled={isLoading}
      value={value}
      onChange={(event, newValue) => {
        handleChange(newValue);
      }}
      //optional to add new item to list
      // filterOptions={(options, params) => {
      //   const filtered = filter(options, params);

      //   const { inputValue } = params;
      //   // Suggest the creation of a new value
      //   //const isExisting = options.some((option) => inputValue === option.jobnumber);
      //   // if (inputValue !== '' && !isExisting) {
      //   //   filtered.push({
      //   //     inputValue,
      //   //     jobnumber: `Add "${inputValue}"`,
      //   //   });
      //   // }

      //   return filtered;
      // }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={optionsList}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => <TextField {...params} label="Select Manager" />}
    />
  );
}
