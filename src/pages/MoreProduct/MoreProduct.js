import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdInput} from 'react-icons/md';




const MoreProduct = ({product}) => {
    const {productName,img,price,description,_id} = product;
    return (
       <> 
       
        <div className="product-container">
        
        <Col className="card-body">
  <Card className="card" border="warning"> 
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title className="text-primary fw-bold">Name : {productName}</Card.Title>
      <Card.Text className="text-danger fw-bold">Price :BDT {price}</Card.Text>
      <Card.Text >{description}</Card.Text>
      

      {/* dynamic route */}

      <Link to={`/buynow/${_id}`}
      ><button className="btn btn-dark"> <span className="text-warning"></span><MdInput/> Buy this Product</button></Link>
    </Card.Body>
  </Card>
</Col>
    </div>
       </>
    );
};

export default MoreProduct;