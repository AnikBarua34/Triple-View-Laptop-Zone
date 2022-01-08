import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {Switch,Route,useRouteMatch,Link} from "react-router-dom";
import PrivateRoute from '../../AllRoutes/PrivateRoute/PrivateRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import PayNow from '../PayNow/PayNow';
import Review from '../Review/Review';
import AddProduct from './../AddProduct/AddProduct';
import useContextBase from './../../hooks/useContextbase';
import AdminRoute from './../../AllRoutes/AdminRoute/AdminRoute';


const DashboardHomee = () => {
    const {user,admin} =useContextBase();
    let{path,url} = useRouteMatch();
    return (
        <div>
            <h1 className='bg-warning p-2'>Wellcome {user.displayName}, to your Dashboard</h1>
            <Container>
                <Row>
                    <Col className="mt-2 border" style={{borderLeft:'2px solid red'}} xs={4} md={4} lg={4}>
                        <h2>Tripple-View-Store</h2>

                       {/* Normal USer  */}
                        {
         !admin && <>
                        <Link to ={`${url}/paynow`}><button className="btn btn-success" style={{textDecoration:'none', width:'100%'}}  >Pay Now</button></Link>
                        <Link to ={`${url}/review`}><button className="btn btn-warning" style={{textDecoration:'none', width:'100%'}}>Review</button></Link>
                        <Link to ={`${url}/myorders`}><button className="btn btn-primary" style={{textDecoration:'none', width:'100%'}}>My Orders</button></Link>
        </> }
                                {/* Admin Panel  */}
                {
                    admin && <>
                                
                        <Link to ={`${url}/manageAllOrders`}><button className="btn btn-dark" style={{textDecoration:'none', width:'100%'}}>Manage All Order</button></Link>
                        <Link to ={`${url}/manageProducts`}><button className="btn btn-success" style={{textDecoration:'none', width:'100%'}}>Manage Products</button></Link>
                        <Link to ={`${url}/addproduct`}><button className="btn btn-dark" style={{textDecoration:'none', width:'100%'}}>Add Products</button></Link>
                        <Link to ={`${url}/makeAdmin`}><button className="btn btn-success" style={{textDecoration:'none', width:'100%'}}>Make Admin</button></Link>
                </>}
                        <Link to ='/home'><button className="btn btn-danger mt-5"style={{textDecoration:'none', width:'100%'}}>Back to Home</button></Link>
                    </Col>


                    <Col className="mt-2 border" xs={8} md={8} lg={8}>
                    
                    <Switch>
                        <Route exact path={path}>
                        <Review></Review>
                        </Route>
                    <PrivateRoute  path={`${path}/paynow`}>
                        <PayNow></PayNow>
                    </PrivateRoute>
                    <PrivateRoute  path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                    <PrivateRoute  path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </PrivateRoute>

                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>

                    </Switch>
                    </Col>
                </Row>
            </Container>
         
        </div>
    );
};

export default DashboardHomee;