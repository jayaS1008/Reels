import * as React from 'react';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext ,Image } from 'pure-react-carousel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Button, CardActionArea, CardActions } from '@mui/material';
import './login.css';
export default function Login() {
  return (
     <div className='signWrapper' >
     <div className="imgcar" >
     <div clasName="car" style={{backgroundImage:"url(https://i5.walmartimages.com/asr/8e7b3ce3-ff35-4929-a5f2-e1ff91dde45c_1.0812d6f76f32e47ba5075dd509e4758f.jpeg) " , backgroundSize:"110% 80%" ,backgroundRepeat:'no-repeat', marginright:"400px"}}>
     <CarouselProvider
        visibleSlides={1}
        naturalSlideWidth={100}
        naturalSlideHeight={140}
        isPlaying={true}
        infinite={true}
        dragEnabled={false}
        touchEnabled={false}
        totalSlides={3}
        className="cou"
      >
        <Slider className='slid'>
          <Slide index={0}><Image className='couImg' src="https://th.bing.com/th/id/OIP.HoFkn4_9ONI1awoRoF1DEwHaNJ?w=182&h=324&c=7&r=0&o=5&dpr=1.25&pid=1.7"/></Slide>
          <Slide index={1}><Image className='couImg' src="https://wallpapercave.com/wp/wp4309473.jpg"/></Slide>
          <Slide index={2}><Image className='couImg' src="https://wallpapercave.com/wp/wp4309506.jpg"/></Slide>
        </Slider>
        <ButtonBack hidden>Back</ButtonBack>
        <ButtonNext hidden>Next</ButtonNext>
      </CarouselProvider>
      </div>
     </div> 
         <div class="signCard">
         <Card >
         <CardActionArea>
          <img src="https://th.bing.com/th/id/OIP.gwj_E-_8LwsdZLagimGL6AHaHZ?w=212&h=211&c=7&r=0&o=5&dpr=1.25&pid=1.7" className="logo"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Login
          </Typography>
          {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
          <TextField className="outlined-basic" size ="small" label="Username" variant="outlined" fullWidth="true" margin="dense"/>   
          <TextField className="outlined-basic" size ="small" label="Password" variant="outlined" fullWidth="true"margin="dense" />
          <br></br>
        </CardContent>
      </CardActionArea>
      <typography variant="subtitle1" color="blue" margin="dense"><Link href="./forgot">Forgot Password ?</Link></typography>
      <CardActions><Button color="primary" variant="contained" margin="dense" fullWidth="true">Login</Button></CardActions>
    </Card>
    <Card variant="elevation">
    <Typography variant="subtitle1">Not having an account ? <Link href='/signup' underline="hover">Sign Up</Link></Typography>
    </Card>
         </div>
     </div>

  );
}
