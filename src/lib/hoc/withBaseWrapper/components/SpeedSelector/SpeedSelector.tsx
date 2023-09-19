import { useVisualizerConfigs } from '@hooks/useVisualizerConfigs';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SpeedSelector = () => {
  const [{ delayTime }, dispatch ] = useVisualizerConfigs();
  
  const handleChange = (event: SelectChangeEvent) => {
    const speed = Number(event.target.value)
    dispatch({delayTime: speed})
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 85}} size='small'>
        <InputLabel id="speed-label">Speed</InputLabel>
        <Select
          labelId="speed-select-label"
          id="speed"
          value={delayTime.toString()}
          onChange={handleChange}
          autoWidth
          label="Speed"
        >
          <MenuItem value={0.2}>0.2 seconds</MenuItem>
          <MenuItem value={0.3}>0.3 seconds</MenuItem>
          <MenuItem value={0.5}>0.5 seconds</MenuItem>
          <MenuItem value={0.8}>0.8 seconds</MenuItem>
          <MenuItem value={1}>1 second</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
