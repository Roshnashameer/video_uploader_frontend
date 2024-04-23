import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({update}) {
  //state to hold input datas
  const [inputs, setInputs] = useState({
    id: "",
    caption: "",
    coverImage: "",
    video_url: ""
  })
  //function for onChange
  const setValues = (e) => {
    let { value, name } = e.target
    // console.log(value,name);
    setInputs({ ...inputs, [name]: value })

  }
  console.log(inputs);
  //function to extract videos
  const extractUrl = (e) => {
    let videoUrl = e.target.value
    //console.log(videoUrl);
    if (videoUrl.includes("v=")) {
      let subUrl = videoUrl.split("v=")[1]
      // console.log(subUrl);
      let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`
      // console.log(finalUrl);
      setInputs({ ...inputs, ["video_url"]: finalUrl })
    }

  }

  const addHandle = async () => {
    let id = uniqid()
    
    // console.log(result);
    const { caption, coverImage, video_url } = inputs
    if (caption == "" || coverImage == "" || video_url == "") {
      toast.error('All fields are required', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      setInputs({ ...inputs, ["id"]: id })
     const result = await addVideo(inputs)

      if (result.status >= 200 && result.status < 300) {

        // update state of home
        update(result.data)
        toast.success('Video Added', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setShow(false);
      }
    }

  }
  //  console.log(inputs);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <i onClick={handleShow} class="fa-solid fa-upload fa-fade fa-3x text-info"></i>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Upload Video</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3 mt-5" >
            <Form.Control name='caption' onChange={(e) => setValues(e)} type='text' />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput1"
            label="Cover Image URL"
            className="mb-3 mt-5" >
            <Form.Control name='coverImage' onChange={(e) => setValues(e)} type='text' />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput2"
            label="Uutube Video URL"
            className="mb-3 mb-5" >
            <Form.Control name='video_url' onChange={(e) => extractUrl(e)} type='text' />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Add