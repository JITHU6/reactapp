import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from './Article'


const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CoursesList extends Component {
 
    render() {
        return (
            <div>
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"   
                            margin="normal"
                            
                            />
                        <Grid container spacing={24} style={{padding: 30}}>
                            
                                <Grid item xs={12} sm={6} lg={4} xl={3} spacing={24}>
                                    <Course  />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} xl={3} spacing={24}>
                                    <Course  />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course  />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course  />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course  />
                                    
                                </Grid>
                                
                           
                        </Grid>
                    </div>
            </div>
        )
    }
}
export default CoursesList;