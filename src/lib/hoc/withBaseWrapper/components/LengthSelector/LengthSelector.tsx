import { useVisualizerConfigs } from '@hooks/useVisualizerConfigs';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { generate } from '../../../../../utils';

export const LengthSelector = () => {
  const [{ array }, dispatch ] = useVisualizerConfigs();
  
  const handleChange = (event: SelectChangeEvent) => {
    const length = Number(event.target.value)
    dispatch({array: generate(length)})
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 85}} size='small'>
        <InputLabel id="array-length-label">Length</InputLabel>
        <Select
          labelId="array-length-select-label"
          id="length-length"
          value={array.length.toString()}
          onChange={handleChange}
          autoWidth
          label="Length"
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
