import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Categories from '../components/Categories'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom';

function Home() {
  // state for state-lifting
  const [addUpdate, setAddUpdate] = useState({})
  return (
    <div className='mt-5'>
      <Row>
        <Col>
          <h1 className='ms-5 ps-5'><span> S</span>tart<span> U</span>ploading
            <span> V</span>ideos <span> F</span>or <span> F</span>ree </h1>
          <div className='m-5 fs-3 ps-5'>
            <Link to={'/watch-history'} style={{ textDecoration: 'none' }} >
              <a className='text-info' style={{ textDecoration: 'none', fontFamily: 'Satisfy' }}>
                <i class="fa-solid fa-clock fa-spin"></i> View Watch History</a></Link>
            <p className='mt-3 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente velit neque soluta voluptatum perspiciatis veritatis ipsam </p>
          </div>
        </Col>
        <Col className='text-center'>
          <img style={{ width: '300px', height: '300px' }}
            src="https://i.postimg.cc/W3HR63WF/free-youtube-live-streaming-5396197-4511583.png" alt="" />
        </Col>
      </Row>


      <Row className='p-3'>
        <Col lg={1}>
          <Add update={setAddUpdate}></Add>
        </Col>
        <Col lg={7}>
          <View updatedState={addUpdate}></View>
        </Col>
        <Col lg={4}>
          <Categories></Categories>
        </Col>
      </Row>

    </div>
  )
}

export default Home