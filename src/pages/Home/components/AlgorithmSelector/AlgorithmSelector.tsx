import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useVisualizerConfigs } from '../../../../components';
import { IMovement } from '../../../../interfaces';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

let algorithmsImported: any;

(async () => {

  algorithmsImported =  await import('../../../../algorithms') as any

})();

export const AlgorithmSelector = () => { 

  const [{ algorithms }, dispatch] = useVisualizerConfigs();

  const algorithmsList: typeof algorithms = []

  const exportedFunctions = Object.keys(algorithmsImported).map(key => algorithmsImported[key]) as ((array: number[]) => IMovement[])[]

  exportedFunctions.forEach(func => {
    algorithmsList.push(func)
  })

  const handleChange = (event: SelectChangeEvent<typeof algorithms>) => {
    const {
      target: { value },
    } = event;

    if (typeof value !== 'string') {
      dispatch({ algorithms: value })
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
          value={algorithms}
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
          {algorithmsList.map((algorithm) => (
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
