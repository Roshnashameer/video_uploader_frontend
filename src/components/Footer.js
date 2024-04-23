import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <div className='text-lg-start p-5'>
        <hr/>
        <Row className='mt-3 p-2'>
            <Col lg={3} md={6} sm={12} xs={12}>
            <img
          alt=""
          src="https://i.postimg.cc/1RkKKfBq/upload-video-3197626-2670118.png"
          width="50"
          height="30"
          className="d-inline-block align-top me-1 mt-2"/>{' '}
          <h1><span>V</span>ideo <span>U</span>ploader</h1>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12} className='ps-3'>
            <h4>Links</h4>
            <a className='fs-4' style={{textDecoration:'none',color:'blue'}} href=" ">Landing Page</a><br/>
            <a className='fs-4' style={{textDecoration:'none',color:'blue'}} href=" "></a>Home<br/>
            <a className='fs-4' style={{textDecoration:'none',color:'blue'}} href=' '></a>Watch History<br/>
            </Col>
            
            <Col lg={3} md={6} sm={12} xs={12}><h4>Guidedes</h4>
            <h5>react</h5>
            <h5>react bootstrap</h5>
            <h5>routing</h5>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}><h4 className='text-info'>Contact Us</h4>
            <input type='text' className='form-control w-100' placeholder='enter email'/>
            <button className='btn btn-info w-50'>Send</button>
            </Col>

            
        </Row>
    </div>
  )
}

export default Footer