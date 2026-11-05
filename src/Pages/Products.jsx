import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div className='m-5'>
            <div className='row pt-5'>
                {/* Duplicate column according to products */}
                <div className="col-3">
                    {/* Cards */}
                    <Card className='shadow p-2'>
                        <Card.Img style={{height:"250px"}} variant="top" src="perfume.png" />
                        <Card.Body className='text-center'>
                            <Card.Title>Perfume</Card.Title>
                          <Link to={`/products/:id`} className='btn btn-info'>VIEW MORE</Link>
                        </Card.Body>
                    </Card>


                </div>

            </div>

        </div>
    )
}

export default Products
