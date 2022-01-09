import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Row,Button,Spinner  } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Head';
import useContextBase from './../hooks/useContextbase';
import Swal from 'sweetalert2';

const BuyNow = () => {
    const {productId} =useParams();

    const [singleProducts,setSingleProducts] =useState([]);
    const [singleProduct,setSingleProduct] =useState({});
    const {user}=useContextBase();


    // Booking Section 
    const packageNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const dateRef = useRef();
    const contactRef = useRef();

    // LOADING DATA BY ID 
    useEffect(()=>{
      fetch('https://rocky-mesa-18729.herokuapp.com/getAddNewProduct')
        .then(res=>res.json())
        .then(data=>setSingleProducts(data))
    },[])

    useEffect(()=>{
        const foundProduct = singleProducts.find(product=> product._id == productId)
        setSingleProduct(foundProduct)
    },[singleProducts])


    // BOOKING FORM 
  
    const handleBookProduct =e=>{
const packageName = packageNameRef.current.value;
const userName = userNameRef.current.value;
const email =  emailRef.current.value;
const address =  addressRef.current.value;
const date =  dateRef.current.value;
const contact =  contactRef.current.value;
const status='Pending'

e.preventDefault();
   

const newPackage = {packageName,userName, email,address,date,contact,status}
fetch('https://rocky-mesa-18729.herokuapp.com/allBookedProducts',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  
  body:JSON.stringify(newPackage)
})
.then(res=>res.json())
.then(data=>{
  if(data.insertedId){
    // alert('Product Booked Successfully, Check Dashboard')
    // import Swal from 'sweetalert2';
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Package Booked SuccessFully go to Dash-Board',
      showConfirmButton: false,
      timer: 2000
    })
    e.target.reset();
  }
})
    }

    return (
      <>
      <Header></Header>
        <div className="mt-5 m-5 pt-4">
            <h2 className="text-warning bg-dark p-2 mb-3 fw-bold rounded-3 shadow-3">Review Your Item and Buy This Item</h2>
            
            {
                !singleProduct?.img && <Button variant="danger">
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Please wait a moment......
              </Button>
            }
            <Row>
            <Col className="mb-3" xs={12} md={6} lg={6}>
      <Card border="warning"> 
        <Card.Img className="mx-auto" style={{width:"85%"}} variant="top" src={singleProduct?.img} />
        <Card.Body>
          <Card.Title className="text-primary fw-bold">Name : {singleProduct?.productName}</Card.Title>
          <Card.Text className="text-danger fw-bold">Price :BDT {singleProduct?.price}</Card.Text>
          <Card.Text >{singleProduct?.description}</Card.Text>
          <Link to="/home#products"
          ><button className="btn btn-dark"> <span className="text-warning"></span> Buy Another Product</button></Link>
          </Card.Body>
      </Card>
    </Col>

    <Col xs={12} md={6} lg={6}>
    <form onSubmit={handleBookProduct}  className="booking-form" >
            <h4 className="bg-success text-dark fw-bold mt-3 p-3 rounded-3 shadow-3">Fill up the form to book this</h4>
            <Row>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input disabled style={{width:'85%'}} type="text" ref={packageNameRef} defaultValue={singleProduct?.productName} /> 
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input disabled style={{width:'85%'}} type="text" ref={userNameRef} defaultValue={user.displayName} placeholder="Enter Name "/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input disabled style={{width:'85%'}} type="text" ref={emailRef} defaultValue={user.email} placeholder="Enter Email "/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input required style={{width:'85%'}}  type="text" ref={addressRef}  placeholder="Enter Your Current Address"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input required style={{width:'85%'}} type="date" ref={dateRef}   placeholder="Journey Date D.M.Y"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input required style={{width:'85%'}} type="text" ref={contactRef}  placeholder="Your Contact Number"/>
              </Col>
              <Col className="mt-2" xs={12} md={12} lg={12}>
              <input style={{width:'85%'}}className="btn btn-warning fw-bold mx-auto" type="submit" value="Book This Package"/>
              </Col>

            </Row>
 
                </form>
    </Col>
            </Row>
          

        </div>
        </>
    );
};

export default BuyNow;