import React from 'react';
import "./Career.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function Career() {

  return (
    <div className="c">
    <div className="c-left">
      <Card sx={{ maxWidth: 500, marginRight: 2 }}>
      <CardContent>

      <Typography variant="h3" component="div" sx={{fontWeight: 500, fontSize: 25, mb: 1.5}}>
          Information Technology Specialist
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Meidän IT ja talous Oy
        </Typography>
        <Typography variant="body1">
          1/2022 - Present
     
        </Typography>
      </CardContent>

    </Card>
    </div>
    <div className="c-right">
      <Card sx={{ maxWidth: 500 }}>
      <CardContent>

        <Typography variant="h3" component="div" sx={{fontWeight: 500, fontSize: 25, mb: 1.5}}>
          Data Engineer
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Productivity Leap Oy
        </Typography>
        <Typography variant="body1">
          11/2021 - 6/2022
        </Typography>
      </CardContent>
    </Card>
    
    </div>
 
    </div>
  );
}

export default Career;
