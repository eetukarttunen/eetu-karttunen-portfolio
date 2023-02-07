import React from 'react';
import "./Career.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
;
function Career() {

  return (
    <div>
      <h2 class="c-header">Experience</h2>
      <div className="c">
        <div className="c-left">
          <Card sx={{ maxWidth: 500, marginRight: 2 }}>
            <CardContent>
              <Typography variant="h3" component="div" sx={{ fontWeight: 500, fontSize: 25, mb: 1.5 }}>
                Information Technology Specialist
              </Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                Meidän IT ja talous Oy
              </Typography>
              <Typography variant="body1">
                Software Development
                <br />
                1/2022 - Present
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="c-right">
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography variant="h3" component="div" sx={{ fontWeight: 500, fontSize: 25, mb: 1.5 }}>
                Data Engineer
              </Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                Productivity Leap Oy
              </Typography>
              <Typography variant="body1">
                Data Warehouse automation
                <br />
                11/2021 - 6/2022
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="c">
        <div className="c-left">
          <Card sx={{ maxWidth: 500, marginRight: 2 }}>
            <CardContent>
              <Typography variant="h3" component="div" sx={{ fontWeight: 500, fontSize: 25, mb: 1.5 }}>
                Information Technology Trainee
              </Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                Meidän IT ja talous Oy
              </Typography>
              <Typography variant="body1">
                Software Development
                <br />
                5/2021 - 8/2021

              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="c-right">
          <Card sx={{ maxWidth: 500 }}>
            <CardContent>
              <Typography variant="h3" component="div" sx={{ fontWeight: 500, fontSize: 25, mb: 1.5 }}>
                Customer Advisor
              </Typography>
              <Typography sx={{ mb: 1 }} color="text.secondary">
                Opset Oy (OP Financial Group)
              </Typography>
              <Typography variant="body1">
                Customer Service
                <br />
                4/2020 - 9/2020
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Career;
