import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ride from '../../../images/freeRide.png';
import './OurMission.css';
import { MdInput} from 'react-icons/md';
import Swal from 'sweetalert2';

const OurMission = () => {
    const bookFreeRide=()=>{
        alert('Free Gifts Coming SooN, Stay with us')
        // Swal.fire({
        //     position: 'center',
        //     icon: 'success',
        //     title: '',
        //     showConfirmButton: false,
        //     timer: 2000
        //   })
    }
    return (
        <div className="freeRide bg-success m-3 rounded mt-5">
            
            <Container className="mt-5">
            <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
                <img style={{width:'96%', height:'350px'}} src={ride} alt="" />
            </Col>


            <Col className="p-3" xs={12} sm={12} md={6} lg={6}>
            <h2 className="text-light fw-bold"><span className="text-dark">TAKE</span> A <span className="text-warning">FREE</span> Laptop <span className="text-dark">From Us</span></h2>
            <h5 className="text-dark">We are very serious with our Customers and so we have decided to give a Free Gift to our customers, If a user purchase more than 10 laptops from us, we will give a free laptop to that User as a gift. </h5>
                <button onClick={bookFreeRide} className="btn btn-danger"><MdInput/> Apply for a Free Gift</button>
            </Col>

            </Row>
            </Container>
        </div>
    );
};

export default OurMission;