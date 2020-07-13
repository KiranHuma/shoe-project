import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SimpleImageSlider from "react-simple-image-slider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
	maxHeight: '100%',
	
  },
}));

function Home() {
	const images = [
		{ url: "./shoee.gif" },
		// { url: "./shoespicsidebar.png" },
		
	];

	return (
		<div className="img">
		<SimpleImageSlider
			width={1396}
			height={765}
			images={images}
		/>
    {/* <video width="750" height="500" controls >
      <source src="..Videos/video1.mp4" type="video/mp4"/>
     </video> */}
	
	</div>
  );
}

export default Home;