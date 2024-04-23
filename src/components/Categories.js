import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCat, getVideo, updateCategory } from '../services/allapis';
import { Trash } from 'react-feather';
import { Link } from 'react-router-dom';

function Categories() {
  // state to hold input,id and video array
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videoes: []
  })

  const [show, setShow] = useState(false);
  const [categories,setCategories]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setInputs = (e) => {
    const { value, name } = e.target
    setCatInputs({ ...catInputs, [name]: value })

  }
  const removeCategory=async(id)=>{
   const result= await deleteCat(id)
   if (result.status >= 200 && result.status < 300) {
     //refresh category list   
    getAllCategories()
  }
  }
  const addData = async() => {
    let id = uniqid()
    setCatInputs({ ...catInputs, ["id"]: id })

    const { name } = catInputs
    if (name == "") {
      toast.error('Pls provide caption', {
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
      // api call
      const result=await addCategory(catInputs)
      if (result.status >= 200 && result.status < 300) {
        setShow(false)
        getAllCategories()
        toast.success(`${result.data.name} Added`, {
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
    }   

  }
  // console.log(catInputs); 
  const getAllCategories=async()=>{
    const result=await getAllCat()
    if (result.status >= 200 && result.status < 300) {
        
      setCategories(result.data)
    }
  }
  console.log(categories);
  useEffect(()=>{
    getAllCategories()
  },[])
  const dragOver=(e)=>{
    e.preventDefault()
    // console.log("dragged over the category");
  }
  const dropped=async(e,id)=>{
    console.log("dropped cat id"+id);
    // video id access
    const videoId=e.dataTransfer.getData("cardId")
    console.log(videoId);
    // access video data from bckend
    const {data}=await getVideo(videoId)
    console.log(data);
    // select dropped category from all categories
    const selectedCategory=categories.find(i=>i.id==id)
    console.log(selectedCategory);
    // update category object with video data
    selectedCategory.videoes.push(data)
    console.log(selectedCategory);
    // api call to update the changed category in backend
    await updateCategory(id,selectedCategory)
    getAllCategories()
  }
  return (
    <div>
      <Button className='w-100 ' variant="info" onClick={handleShow}>
        Add Categories
      </Button>
      {
        categories.length>0?(
          categories.map(i=>(
            <div droppable 
            onDragOver={(e)=>dragOver(e)}
            onDrop={(e)=>dropped(e,i?.id)}
            className='border mt-1 p-1'>
              <Link style={{textDecoration:'none'}} to={`/subcategories/${i.id}`}>
              <p className='fs-1'>{i.name}</p></Link>
              <div className='text-end'>
                <Trash onClick={()=>{removeCategory(i.id)}} size={50} className='text-danger btn'></Trash>
              </div>
              {
                i.videoes.map(j=>(
                
                    <img style={{height:'60px',width:'60px', padding:'5px'}} 
                    src={j.coverImage} alt=''/>
                  
                 ) )
                }
            </div>
          ))
        ):<h1>No category added yet</h1>
      }
      <Modal show={show} onHide={handleClose} animation={false}>

        <Modal.Body className='border mt-2'>
          <Modal.Title><h3>Add New Category</h3></Modal.Title>


          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3 mt-5" >
            <Form.Control onChange={(e) => setInputs(e)} name='name' type='text' />
          </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
  </div >
  )
}

export default Categories