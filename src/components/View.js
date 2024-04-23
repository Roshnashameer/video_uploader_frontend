import React, { useEffect, useState } from 'react'
import VideoCards from './VideoCards'
import { getAllVideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'

function View({updatedState}) {
  const [allVideos,setAllVideos]=useState([])
  // state to update delete
  const [deleteUpdate,setDeleteUpdate]=useState({})
  const accessAllVideos=async()=>{
    const result=await getAllVideos()
    if(result.status>=200 && result.status<300){
      //console.log(result.data);
      setAllVideos(result.data)
    }

  }
  console.log(allVideos);
  useEffect(()=>{
    accessAllVideos()
  },[updatedState,deleteUpdate])
  return (
    <Row>{
      allVideos.length>0?(
        allVideos.map(i=>
          <Col lg={5} md={6}><VideoCards deleteFunc={setDeleteUpdate} video={i}></VideoCards></Col>
          )
        
      ):<h1>No videos in your collection</h1>
      }
      
      </Row>
  )
}

export default View