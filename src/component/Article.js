import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
const Course = (props) => {
    console.log(props)
    return(
        <div>
                <Card style={{padding: 24}}>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                       "AAAAAAAAAAAAA"
                    </Typography>
                    <Typography component="p">
                        "SSSSSSSSSSSSSSSSSSS"
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href="#" target="_blank">
                        Go To Course
                    </Button>
                    </CardActions>
                </Card>
        </div>
    )
}
export default Course