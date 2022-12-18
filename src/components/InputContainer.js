import { FormGroup, FormControlLabel, Slider, Switch, Stack } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const InputContainer = ({ displayText, handlePower, handleBank, handleVolume }) => {

  return (
    <FormGroup className='inputContainer'>
      <FormControlLabel control={<Switch defaultChecked onChange={handlePower} />} label="Power" labelPlacement='top'/>
      <div id="display">{displayText}</div>
      <Stack style={{width: '100%'}} spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
      <Slider style={{ width: '80%' }} aria-label="Volume" defaultValue={50} onChange={handleVolume} />
        <VolumeUp />
      </Stack>
      <FormControlLabel control={<Switch defaultChecked onChange={handleBank} />} label="Bank" labelPlacement='bottom' />
    </FormGroup>
  )
};

export default InputContainer;