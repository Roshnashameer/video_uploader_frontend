import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Trash2 } from 'react-feather';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import format from 'date-fns/format';

function VideoCards({ video, deleteFunc }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // body
    // id
    var id = uniqid()
    // title
    var video_title = video.caption
    // url
    var url = video.video_url
    // date
    var date = format(new Date(), 'yyyy-MM-dd h:mm:ss a')
    // console.log(date);
    const body = { id, video_title, url, date }
    if (body) {
      // api call
      const result = await addHistory(body)
      //  console.log(result);
    }

  }

  const handleDelete = async (id) => {
    const result = await deleteVideo(id)
    // console.log(result);
    if (result.status >= 200 && result.status < 300) {
      deleteFunc(result.data)
    }
  }
  const dragStart=(e,id)=>{
    // console.log("drag started....id"+id);
    // store dragged data
    e.dataTransfer.setData("cardId",id)
  }
  return (
    <div>
      <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='border mt-3'
        style={{ width: '18rem' }}  >
        <Card.Img onClick={handleShow}
          style={{ height: '250px', width: '100%' }} variant="top" src={video.coverImage} />
        <Card.Body>
          <Card.Title><h5>{video.caption}</h5>
            <div className='text-end'>
              {/* <i class="fa-solid fa-trash-can text-danger fa-1x" ></i> */}
              <Trash2 onClick={() => handleDelete(video.id)} size={56} className='text-danger btn'></Trash2>
            </div></Card.Title>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="424" height="238" src={video.video_url}
          title=" 𝒍𝑻 " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCards