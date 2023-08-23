import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useVisualizerConfigs } from '../../../../components';
import { generate } from '../../../../utils';
import { useState } from 'react';

export const LengthSelector = () => {
  const [ , dispatch ] = useVisualizerConfigs();
  const [length, setLength] = useState('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setLength(event.target.value);
    const number = Number(event.target.value)
    const array = generate(number)
    dispatch({array: array})
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="array-length-label">Array Length</InputLabel>
        <Select
          labelId="array-length-select-label"
          id="length-length"
          value={length}
          onChange={handleChange}
          autoWidth
          label="Array Length"
          defaultValue='10'
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
