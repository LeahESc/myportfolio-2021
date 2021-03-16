import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div className="my-work" id="projects">
                <h2 className="section__title--work">Technical Projects</h2>
                <p className="section__subtitle--work">A few examples of my most recent work</p>

    
                <div className="video-container">
                    <iframe src="https://www.youtube.com/embed/4yJX0-LJ02w" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>

                <p className="project-description">
                    <strong>Small Shops Big Community</strong> was built with a React/Redux frontend and Rails API backend. This yelp-style application allows a user to search for a type of business and community of business owners they'd like to support with their conscious consumer dollars.
                </p>
         

                
            <div className="video-container">   
                <iframe src="https://www.youtube.com/embed/v6jWvsM1jN0?start=4" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

                <p className="project-description">
                    <strong>Vacation Homes Manager</strong> has a Rails frontend and backend. It allows for third-party authentication through GitHub and Google. Users can sign up or login to manage their luxurious vacation home properties. 
                </p>
            
             <div class="video-container">  
                <iframe src="https://www.youtube.com/embed/SR-Ia6gjizM?start=2" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

                <p className="project-description">
                    <strong>Trip Itinerary Maker </strong> is a vanilla Javascript project that allows users to plan detailed itineraries for upcoming travel destinations.
                </p>

            </div>
        )
    }
}
