import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
class Formulaire extends Component {
render() {

return (
<div>
{<FormControl>
<TextField id="outlined-basic" label="Nom" variant="outlined" />

</FormControl> }
<FormControl>
<TextField id="outlined-basic" label="Prenom" variant="outlined" />

</FormControl>
<br></br>
<br></br>
<h4>civilité:</h4>
<Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        
        >
          
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={10}>Madame</MenuItem>
          <MenuItem value={20}>Monsieur</MenuItem>
          <MenuItem value={30}>Mademoiselle</MenuItem>
        </Select>
<br></br>

<br></br>
<FormControlLabel control={<Checkbox name="checkedC" />} label="Homme" />
<FormControlLabel control={<Checkbox name="checkedC" />} label="Femme" />
<br></br>
<TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    InputLabelProps={{
      shrink: true,
    }}
    
  /> 
  <br>
  </br>
  <br></br>
<Button variant="contained" color="primary">
  Save
</Button>
</div>
);
}
}
export default Formulaire;