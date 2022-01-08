import React, { useEffect, useState } from 'react';
import { Row,Carousel,Card } from 'react-bootstrap';
import { FaGrinStars} from 'react-icons/fa';
import Rating from 'react-rating';



const Reviews = () => {
    const [usersReview,setUsersReview] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/getReviews')
        .then(res=>res.json())
        // .then(data=>console.log(data));
        .then(data=>setUsersReview(data));
    },[])
    return (
        <div className="banner mt-3">
            <h5 className="bg-warning text-dark fw-bold rounded-3 m-4 p-2"><FaGrinStars/> Our Top Clients Says <FaGrinStars/> </h5>

            <Row xs={1} md={3} lg={5} className="g-3 m-3 rounded">
            {
                usersReview.map(review =><Carousel key={review._id}>
                    <Carousel.Item>
                    <Card className="card" border="warning">         
        <Card.Body style={{height:"250px"}}>
            <Card.Title className="text-light fw-bold bg-success p-2 rounded">{review.userName}</Card.Title>
            <Card.Text className="text-dark fw-bold">{review.description}</Card.Text>
            <p className="text-warning fw-bold">Rating : {review.rating}/5</p>
            <Rating className="text-danger" readonly initialRating={review.rating}
           emptySymbol="far fa-star"
           fullSymbol="fas fa-star"
        ></Rating>
        </Card.Body>
                    </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card className="card" border="warning"> 
        
      <Card.Body style={{height:"250px"}}>
        <Card.Title className="text-primary fw-bold bg-dark p-2 rounded">{review.userName}</Card.Title>
        <Card.Text className="text-dark fw-bold">{review.description}</Card.Text>
        <p className="text-danger fw-bold">Rating : {review.rating}/5</p>      
        <Rating className="text-warning" readonly initialRating={review.rating}
           emptySymbol="far fa-star"
           fullSymbol="fas fa-star"
        ></Rating>
    
      </Card.Body>
      </Card>
                    </Carousel.Item>
                    </Carousel>
                
                
                )   
                
                
            }
            </Row>
          
          
        
        </div>
    );
};

export default Reviews;


