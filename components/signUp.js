import * as React from 'react';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Button, CardActionArea, CardActions } from '@mui/material';
import './signUp.css';
export default function SignUp() {
  return (
     <div className='signWrapper' >
         <div class="signCard">
         <Card >
         <CardActionArea>
          <img src="https://th.bing.com/th/id/OIP.gwj_E-_8LwsdZLagimGL6AHaHZ?w=212&h=211&c=7&r=0&o=5&dpr=1.25&pid=1.7" className='logo'></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sign Up
          </Typography>
          {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
          <TextField className="outlined-basic" size ="small" label="Email"    variant="outlined" fullWidth="true" margin="dense"/>
          <TextField className="outlined-basic" size ="small" label="Password" variant="outlined" fullWidth="true"margin="dense" />
          <TextField className="outlined-basic" size ="small" label="Username" variant="outlined" fullWidth="true" margin="dense"/>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button color="secondary" fullWidth="true" variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label">Upload
      <input type="file" accept="image/*" hidden></input> </Button>
      </CardActions>
      <CardActions><Button color="primary" variant="contained" margin="dense" fullWidth="true">Sign Up</Button></CardActions>
      <Typography variant="subtitle1">By signing up , you agree to our Terms and Conditions.</Typography>
    </Card>
    <Card variant="elevation">
    <Typography variant="subtitle1">Having an account ? <Link href='/login' underline="hover">Login</Link></Typography>
    </Card>
         </div>
     </div>

  );
}
