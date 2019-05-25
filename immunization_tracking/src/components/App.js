import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import { Route, Link } from 'react-router-dom';

import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';
import { fetchPatients } from '../actions';
import RegisterPatient from './RegisterPatient';

import {
  Navbar,
  NavLink,
  NavbarBrand,
  Nav,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardText,
  Media,
  CardFooter,
  Button
} from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import styled from 'styled-components';
import splashImage from '../assets/childAndMom.jpg';
const Footer = styled.footer`
background-color: black;
padding: 2rem;
color: white;
`


// import { fromEventPattern } from 'rxjs';
// import ChildPatientDashboard from './ChildPatientDashboard';
// import {  } from 'reactstrap';

class App extends Component {
  componentDidMount() {
    console.log(`------------------CDM: fetch patients`);
    this.props.fetchPatients();
  }

  render() {
    return (
      <div className="App">
        <Navbar color='dark' light>
          <Nav>
            <NavbarBrand>
              <h1 className='text-light'>Immunization Tracker</h1>
            </NavbarBrand>

            <NavLink>
              <Link to="/patient-login">
                <Button className="btn-success">Patient Login</Button>
              </Link>
            </NavLink>
            <NavLink />
          </Nav>
        </Navbar>
        <Container>
        <Route path="/patient-login" component={PatientLogin} />
          <Row className="py-5">
            <Col>
              <Media
                object
                className="img-fluid shadow-lg rounded"
                src={splashImage}
                alt="mother and child"
              />
            </Col>
            <Col>
              <Card className="p-2">
                <CardTitle>
                  <h1>
                    They mean <br />
                    everything to you <FiHeart color="#ff0000" />
                  </h1>
                </CardTitle>
                <CardSubtitle>
                  <h3 className="text-right pr-5">
                    Let us help you keep them safe.
                  </h3>
                </CardSubtitle>
                <CardBody>
                  <CardText>
                    <h5>Immunization Tracker will:</h5>
                    <ul>
                      <li>
                        Help you track the immunization schedule for all of your
                        dependents dependents from one central dashboard
                      </li>
                      <li>
                        Connect Immunization Tracker with your child's
                        pediatrician for automated updates and notifications
                      </li>
                      <li>
                        Keep your imformation private! You have complete control
                        over your information, and the ability to remove your
                        data from our servers at any time
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Link to="/new-patient">
                    <Button className="">Sign Up Today!</Button>
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer className='footer'>
          <Row>
            <Col>Immunization tracker, All Rights Reserved</Col>
            <Col className='text-right'>A Project by Lambda School Students</Col>
          </Row>

          </Footer>

        
        <Route
          path="/new-patient"
          component={props => (
            <RegisterPatient
              {...props}
              isRegistering={this.props.isRegistering}
              register={this.props.register}
            />
          )}
        />
        <PrivateRoute
          exact
          path="/patient-dashboard"
          component={props => (
            <PatientDashboard
              {...props}
              patients={this.props.patients}

              // deleteProfile={this.deleteProfile}
            />
          )}
        />
        {/* <PrivateRoute exact path="/add-dependent" component={AddDependent} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients,
    fetchPatients: state.fetchPatients,
    error: state.error,
    isRegistering: state.isRegistering
  };
};

export default connect(
  mapStateToProps,
  { fetchPatients }
)(App);
