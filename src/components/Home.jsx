import React from 'react'
import "../App.css"
import {Carousel} from 'react-bootstrap'




const Home = () => {
  return (
    <div className='home'>
      <h1 className='hometext' >Welcome To Our Site</h1>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/outdoor-movie-theater-night-with-friends-watching-film-big-screen-with-sound-system-open-air-cinema-backyard-theater-gear-concept-vector-illustration_194360-146.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
       
      
    </div>
  
  )
}

export default Home