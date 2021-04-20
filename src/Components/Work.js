import React, { Component } from 'react'
import smallshops from '../images/smallshops.png'
import vacationhomes from '../images/vacationhomes.png'
import tripmaker from '../images/tripmaker.png'

class Work extends Component {


    handleHover = (e) => {
        // return <p>Click to view demo</p>
    }

    render() {
        return (
            <div className="my-work" id="projects">    
                <h2 className="section__title--work">Technical Projects</h2>
                {/* <p className="section__subtitle--work">A few examples of my most recent work</p> */}
                {/* <Grid columns={2} >
                    <Grid.Row >
                    <Grid.Column width={8}>  */}
                    <div className="project-container">
                        <div className="projectimage-container" onHover={this.handleHover}>
                            <div className="projectimage">
                            <img src={smallshops}></img>
                           </div>
                        </div>
                       
                    {/* </Grid.Column>
                    <Grid.Column width={8}> */}
                    <div className="description-container">
                        <p className="project-description">
                            <p className="project-title">Small Shops Big Community</p> was built with a React/Redux frontend and a Ruby on Rails backend. 
                            This yelp-style application allows a user to search for a type of business and select one or many 'community-parameters' that they'd like to support with their conscious consumer dollars. 
                            For example: a user can search for 'bakeries' owned by individuals who identify as  BIPOC, LGBTQ+, WOMEN/WOMXN, or have a social impact commitment. 
                            </p>
                                <br/>
                                <br/>
                                <div className="btn-container">
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-home" >Frontend</a> 
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-home" >Backend</a> 
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-home" >Demo</a> 
                                </div>
                            
                            {/* <strong> The Why:</strong> I was inspired to make this project by the independently-generated google sheets and excel documents that circulated throughout LA in the summer of 2020 highlighting black-owned businesses in Los Angeles.
                            I wanted this application to echo that sentiment of conscious consumerism as well as celebrate the diversity of business-owners in Los Angeles. */}

                            {/* <strong>The Challenge:</strong> There were a number of challenges with this project, one of the biggest ones was figuring out how to properly structure and organize the Redux store. A user has the ability to add new shops as well as
                            new reviews. Instead of having separate state objects for shops and reviews, I wanted to nest each of these within the larger 'category' object. A single category knows about all of its shops and
                            all of its shops' reviews. Figuring out the proper nesting structure took a lot of trial and error but eventually I was able to have everything in global state relate to a category object. */}
                        
                        </div>
                        </div>
                    {/* </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row> */}
                    {/* <Grid.Row>
                    <Grid.Column width={8}>  */}
                     <div className="project-container">
                        <div className="projectimage-container">
                            <div className="projectimage">
                                <img src={vacationhomes}></img>
                            </div>
                        </div>
                    {/* </Grid.Column>
                    <Grid.Column width={8}> */}
                    <div className="description-container">
                        <p className="project-description">
                            <strong>Vacation Homes Manager</strong> was built with Ruby on Rails and SQLite. It allows for third-party authentication through GitHub and Google. 
                            Users sign up or login to manage their luxurious vacation home properties. A user can create a new property, adding details such as images,
                            location, number of bedrooms/bathrooms as well as other amenities.
                            <br/>
                            <br/>
                            </p>
                            <div className="btn-container">
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-work" >Frontend</a> 
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-work" >Backend</a> 
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-work" >Demo</a>   
                                </div>
                            {/* <strong> The Why:</strong> I wanted to build an application that would allow porperty-owners to manage and track their various vacation homes.
                            In a future build-out I'd like to add the option to add whether a particular property is being rented at the current moment. */}
                        
                        </div>
                        </div>
                    {/* </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={8}>  */}
                    <div className="project-container">
                        <div className="projectimage-container" >
                            <div className="projectimage">
                                <img src={tripmaker}></img>
                            </div>
                        </div>
                    {/* </Grid.Column>
                    <Grid.Column width={8}> */}
                     <div className="description-container">
                        <p className="project-description">
                            <strong>Trip Itinerary Maker </strong> is a vanilla Javascript project that allows users to plan detailed itineraries for upcoming travel destinations.
                            <br/>
                            <br/>
                            </p>
                            <div className="btn-container">
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-work" >Frontend</a> 
                                    <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-work" >Backend</a> 
                            </div>
                            {/* <strong> The Why:</strong> When I travel I like to create google documents outlining all of the museums, sights, and restaurants I want to visit at every destination. I wanted to create 
                            an application that would keep all that information in one place, organized by category and trip destination. */}
                       
                    </div>
                    </div>
                        
                    {/* </Grid.Column>
                    </Grid.Row> */}
                {/* </Grid> */}
                
            </div>
        )
    }
}

export default Work;