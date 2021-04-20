import React from 'react'
import smallshops from '../images/smallshops.png'
import vacationhomes from '../images/vacationhomes.png'
import tripmaker from '../images/tripmaker.png'

const Work = () => {
    return (
        <div className="my-work" id="projects">    
            <h2 className="section__title--work">Technical Projects</h2>
                
                <div className="project-container">
                    <div className="projectimage-container">
                        <div className="projectimage">
                            <a href="https://www.youtube.com/watch?v=4yJX0-LJ02w"><img src={smallshops} alt="Small Shops Big Community"></img></a>
                        </div>
                    </div>

                    <div className="description-container">
                        <p className="project-description">
                            <p className="project-title">Small Shops Big Community</p> was built with a React/Redux frontend and a Ruby on Rails backend. 
                            This yelp-style application allows a user to search for a type of business and select one or many 'community-parameters' that they'd like to support with their conscious consumer dollars. 
                            For example: a user can search for 'bakeries' owned by individuals who identify as  BIPOC, LGBTQ+, WOMEN/WOMXN, or have a social impact commitment. 
                        </p>

                        <div className="btn-container">
                            <a href="https://github.com/LeahESc/small-shops-big-community-react" className="btn btn-home" >Frontend</a> 
                            <a href="https://github.com/LeahESc/small-shops-big-community" className="btn btn-home" >Backend</a> 
                            <a href="https://www.youtube.com/watch?v=4yJX0-LJ02w" className="btn btn-home" >Demo</a> 
                        </div>
                    </div>
                </div>

            <div className="project-container">
                <div className="projectimage-container">
                    <div className="projectimage">
                        <a href="https://www.youtube.com/watch?v=v6jWvsM1jN0"><img src={vacationhomes} alt="Vacation Homes Management Application"></img></a>
                    </div>
                </div>
                
                <div className="description-container">
                    <p className="project-description">
                        <p className="project-title">Vacation Homes Manager</p> was built with Ruby on Rails and SQLite. It allows for third-party authentication through GitHub and Google. 
                        Users sign up or login to manage their luxurious vacation home properties. A user can create a new property, adding details such as images,
                        location, number of bedrooms/bathrooms as well as other amenities.
                    </p>
                    <div className="btn-container">
                        <a href="https://github.com/LeahESc/vacation-homes-manager-app" className="btn btn-work" >Frontend</a> 
                        <a href="https://github.com/LeahESc/vacation-homes-manager-app" className="btn btn-work" >Backend</a> 
                        <a href="https://www.youtube.com/watch?v=v6jWvsM1jN0" className="btn btn-work" >Demo</a>   
                    </div>
                </div>
            </div>
            
            <div className="project-container">
                <div className="projectimage-container" >
                    <div className="projectimage">
                        <a href="https://www.youtube.com/watch?v=v6jWvsM1jN0"><img src={tripmaker} alt="Trip Maker"></img></a>
                    </div>
                </div>
            
                <div className="description-container">
                    <p className="project-description">
                        <p className="project-title">Trip Itinerary Maker </p> is for people who love to plan! 
                        This application invites users to plan detailed intineraries for future international and domestic journeys. Built with JavaScript and HTML/CSS on the frontend and Ruby on Rails on the backend.
                    </p>
                    <div className="btn-container">
                        <a href="https://github.com/LeahESc/trip-itinerary-maker/tree/main/trip-itinerary-maker-frontend" className="btn btn-work" >Frontend</a> 
                        <a href="https://github.com/LeahESc/trip-itinerary-maker/tree/main/trip-itinerary-maker-backend" className="btn btn-work" >Backend</a> 
                        <a href="https://www.youtube.com/watch?v=SR-Ia6gjizM" className="btn btn-work" >Demo</a>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Work;