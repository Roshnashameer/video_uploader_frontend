import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHistory, getAllHistory } from '../services/allapis';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function History() {
    const [histories, setHistories] = useState([])
    const getHistories = async () => {
        const { data } = await getAllHistory()
        setHistories(data);

    }
    useEffect(() => {
        getHistories()
    }, [])
    // console.log(histories);
    const removeHistory = async (id) => {
         await deleteHistory(id)

        getHistories()

    }
    return (
        <div>
            <h1 className='text-center p-5'>Watch History</h1>
            <div className='text-end pe-5 pb-3'>
                <Link to={'/home'}>
                    <Button className="btn  rounded">Go Back</Button>
                </Link>
            </div>
            {histories.length > 0 ? (
                <Table className='w-75 container pb-5 mb-5' striped bordered hover variant='info'>
                    <thead className='text-center fs-5'>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Video URL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {histories?.map((i, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{i?.date}</td>
                                <td>{i?.video_title}</td>
                                <td>{i?.url} </td>
                                <td className='text-center'>
                                    <Trash2 onClick={() => { removeHistory(i.id) }} 
                                    size={50} className='btn text-black'></Trash2>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </Table>) :
                <h1 className='text-center p-5'>No Watch history</h1>
            }
        </div>
    )
}

export default History