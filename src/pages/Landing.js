import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landing() {
    return (
        <div>
            <Container>
                <Row className='mt-5'>
                    <Col lg={6}>
                        <div>
                            <h1><span>V</span>ideo <span>U</span>ploader</h1>
                            <p className='fs-4 mt-4 p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate placeat tempora sunt aut aspernatur repellendus asperiores architecto, iusto tenetur officia quis sit, ab voluptate cum voluptas dolor harum quibusdam. Libero!</p>

                            <Link to={'/home'}>
                                <Button id='b1' className='btn ms-3'><b>Get Started </b><i class="fa-brands fa-google-play fa-beat-fade"></i></Button></Link>
                        </div>
                    </Col>
                    <Col>
                        <img className='w-50' src="https://i.postimg.cc/RFxXgtvQ/cartoon-snail-loading-loading-gif-animation-2734139.gif" alt="" />
                    </Col>
                </Row>
                <hr />

                <Row className='mt-5 mb-5 py-5'>
                    <h1 className='mb-5 text-center'>Features</h1>
                    <Col>
                        <Card className='borde border-dark text-dark' style={{ width: '100%' }}>
                            <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/V6nkFt2w/loading.gif" />
                            <Card.Body className='p-5'>
                                <Card.Title><h3 className='mb-4'>Managing Videos</h3></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='borde border-dark text-dark' style={{ width: '100%' }}>
                            <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/500mYxr8/header.gif" />
                            <Card.Body className='p-5'>
                                <Card.Title><h3 className='mb-4'>Categorise Videos</h3></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='borde border-dark text-dark' style={{ width: '100%' }}>
                            <Card.Img style={{ height: '200px' }} variant="top" src="https://i.postimg.cc/fTrkDMc6/ac1a6fc199d663a1d844f14b55f7584d-w200.gif" />
                            <Card.Body className='p-5'>
                                <Card.Title><h3 className='mb-4'>Watch History</h3></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing