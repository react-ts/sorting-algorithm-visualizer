import { useVisualizerConfigs } from '@hooks';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IAlgorithm } from 'src/interfaces';
import * as algorithms from '../../../../../algorithms';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const algorithmsList = Object.keys(algorithms).map((key) => (algorithms as any)[key]);
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

export const AlgorithmSelector = () => { 
  const [{ selectedAlgorithms }, dispatch] = useVisualizerConfigs();
  const handleChange = (event: SelectChangeEvent<typeof selectedAlgorithms>) => {
    const {
      target: { value },
    } = event;

    if (typeof value !== 'string') {
      dispatch({ selectedAlgorithms: value })
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="multiple-chip-label">Algorithms</InputLabel>
        <Select
          labelId="multiple-chip-labelId"
          id="multiple-chipId"
          multiple
          value={selectedAlgorithms}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-algorithms" label="Algorithms" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.name} label={value.name} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {algorithmsList.map((algorithm: IAlgorithm) => (
            <MenuItem
              key={algorithm.name}
              value={ algorithm as any}
            >
              {algorithm.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
