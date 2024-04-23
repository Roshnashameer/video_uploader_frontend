import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { Trash2 } from 'react-feather';
import { singleCategory } from '../services/allapis';

function SubCategories() {
  const [categories, setCategories] = useState([])
  const param = useParams()

  var { id } = param //destructuring

  const getCategories = async (id) => {
    const result = await singleCategory(id)
    // console.log(result.data);

    setCategories(result.data);

  }
  // console.log(categories);

  useEffect(() => {

    getCategories(id)
  }, [])

  const removeVideoById = (categoryId, videoId) => {
    // Create a copy of the categories array and remove the video
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          videoes: category.videoes.filter(video => video.id !== videoId)
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };


  useEffect(() => {

    getCategories(id)
  }, [])

  return (
    <div className='mr-auto p-5'>
    {categories.map(category => (
      <div key={category.id}>
        <h1 className='text-center'>{category.name}</h1>
        <Container>
          <Row>
            {category.videoes ? (
              category.videoes.map(video => (
                <Col xs={6} lg={4} md={4} key={video.id}>
                  <Card style={{ width: '18rem' }} className='m-4'>
                    <Card.Img variant="top" src={video.coverImage} />
                    <Card.Body>
                      <Card.Title>{video.caption}</Card.Title>
                      <div className='text-end'>
                        <Trash2 onClick={() => removeVideoById(category.id, video.id)} size={56} className='text-danger btn' />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h3>No collections</h3>
            )}
          </Row>
        </Container>
      </div>
    ))}
  </div>
);
}

export default SubCategories;