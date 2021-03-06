import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { Icon, Col, Card, Typography,Row, Checkbox } from 'antd';
const { Title }= Typography;
const { Meta } = Card;

function HomePage() {

    const [Products, setProducts] = useState([])
     // load more function

     useEffect(()=>{
        Axios.get('/api/ngo/getNgos')
        .then(response=>{
            if(response.data.success){
                    setProducts(response.data.ngos)
                }
            else{
                alert('Failed to fetch product data')
            }
        })
    },[]);
    // cards to display on homepage
    const renderCards = Products.map((ngo, index) => {

        return <Col  xs={24}>
            <div style={{position:'relative'}}>
                <a href={`/ngo/${ngo._id}`}>
                <div className='container m-3 p-2' style={{border:'1px  #d3d3d3'}}>
                        <h3 className='pl-5'>NGO name:<em><b>{ngo.name}</b></em></h3>
                    <div  className='row'>
                    <div className='col sm-4 pl-5' style={{border:'1px solid #d3d3d3'}}>
                        <p>NGO description:<em>{ngo.discription}</em></p>
                    </div>
                    <div className='col sm-4 pl-5' style={{border:'1px solid #d3d3d3'}}>
                        <p>NGO website:<em>{ngo.website}</em></p>
                    </div>
                    <div className='col sm-4 pl-5' style={{border:'1px solid #d3d3d3'}}>
                        <p>NGO Address:<em>{ngo.address}</em></p>
                    </div>
                    </div>
                    </div>
                </a>
            </div>
        </Col>
    })
    
    return (

        <div style={{ width: '85%', margin: '3rem auto'}}>
            <Title level={1}>NGOs</Title>
            <hr />
            <br />
            

            {renderCards}
        </div>
    )
}

export default HomePage
