import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard({post}) {
  return (
    <Card sx={{ minWidth: 275 }} style={{marginTop:8}}>
      <CardContent>
        <Typography variant='h6'  sx={{ fontSize: 16 }} gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body.substring(0,100)} ...
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/posts/${post.id}`}><Button size="small">Read More</Button></Link>
      </CardActions>
    </Card>
  );
}