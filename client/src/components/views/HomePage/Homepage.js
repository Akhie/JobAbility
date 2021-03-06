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
                
                <div className='container m-3 p-2' style={{border:'1px  #d3d3d3'}}>
                <a href={`/ngo/${ngo._id}`}>
                        <h3 className='pl-5'>NGO name:<b>{ngo.name}</b></h3>
                        </a>
                    <div  className='row'>
                    <div className='col sm-4 pl-5' style={{border:'1px solid #d3d3d3'}}>
                        <p>NGO description:<em>{ngo.discription}</em></p>
                    </div>
                    <div className='col sm-4 pl-5' style={{border:'1px solid #d3d3d3'}}>
                    <a href={ngo.website}><p>NGO website:<em>{ngo.website}</em></p></a>
                    </div>
                    <div className='col sm-4 pl-5' style={{border:'1px solid #d3d3d3'}}>
                        <p>NGO contactNo:<em>{ngo.contact}</em></p>
                    </div>
                    <div className='col sm-4 pl-5' style={{border:'1px solid #d3d3d3'}}>
                        <p>NGO Address:<em>{ngo.address}</em></p>
                    </div>
                    </div>
                    </div>
                 
            </div>
        </Col>
    })
    
    return (

        <div style={{ width: '85%', margin: '3rem auto'}}>
            <Title level={1}>Non-Government organizations with us.</Title>
            <hr />
            <br />
            

            {renderCards}
        </div>
    )
}

export default HomePage
