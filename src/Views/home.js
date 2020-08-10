import React, { Component } from 'react';
import {  Row, Col, CardText,Container,Card,Button } from 'reactstrap';
import '../Styles/style.css'
import Header from '../Component/header.js'
import Products from '../Component/products.js'
import Category from '../Component/carousel.js'
import Footer from '../Component/footer.js'
import deliver from '../Images/delivery.jpg'
class Home extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            prod:[],
            oil:[],
            nut:[],
            pulse:[],
            rice:[],
            spice:[],
            beauty:[]
        }
    }
    async componentDidMount()
    {
        var output,oil,rice,spice,pulse,beauty,nut;
    output = await (await fetch('http://13.233.120.227:8080/api/products')).json()
    oil= await(await fetch('http://13.233.120.227:8080/api/products?category=Oil')).json()
    rice= await(await fetch('http://13.233.120.227:8080/api/products?category=Rice')).json()
    spice= await(await fetch('http://13.233.120.227:8080/api/products?category=Spice')).json()
    pulse= await(await fetch('http://13.233.120.227:8080/api/products?category=Pulse')).json()
    beauty= await(await fetch('http://13.233.120.227:8080/api/products?category=Beauty products')).json()
    nut= await(await fetch('http://13.233.120.227:8080/api/products?category=Nut')).json()
    this.setState({ prod: output,fetched:true,oil:oil,spice:spice,nut:nut,rice:rice,beauty:beauty,pulse:pulse })
    }
    render() {
        return (
            <div>
           
                <br /><br />
                <Row style={{margin:'0px'}}>
                    <Col md={4}>
                     <img style={{height:'370px',width:'370px'}} src={deliver}/>
                    </Col>
                    <Col  md={8}>
                    <Header />
                    </Col>
                </Row>
                <br /><br />
                <Category state={this.state}/>
                <br /><br />
                  <Products product={this.state.prod}/>
                  <br /><br />
                  <h4 className="text">Follow Us</h4>
                  <Container>
  <Row>
    <Col md={4}>
       <Card style={{backgroundColor:'#d3d3d3'}}>
           <CardText className="text">
               <i className="fa fa-instagram fa-4x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4><span style={{color:'rgb(51, 163, 47)'}}>@Organic</span>Care</h4>
               <h5>Follow us on instagram</h5><br />
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  

           </CardText>
       </Card>
    </Col>
    <Col md={4}>
       <Card style={{backgroundColor:'#d3d3d3'}}>
           <CardText className="text">
               <i className="fa fa-whatsapp fa-4x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4><span style={{color:'rgb(51, 163, 47)'}}>@Organic</span>Care</h4>
               <h5>Follow us on whatsapp</h5><br />
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  

           </CardText>
       </Card>
    </Col>
    <Col md={4}>
       <Card style={{backgroundColor:'#d3d3d3'}}>
           <CardText className="text">
               <i className="fa fa-linkedin fa-4x" style={{color:'rgb(51, 163, 47)'}} /><br />
               <h4><span style={{color:'rgb(51, 163, 47)'}}>@Organic</span>Care</h4>
               <h5>Follow us on LinkedIn</h5><br />
               <Button style={{color:"white",backgroundColor:'rgb(51, 163, 47)'}}>
            Follow Us
            </Button>  

           </CardText>
       </Card>
    </Col>
    </Row>
    </Container>
                  <br /><br />
            <Footer />
            
            </div>
        )
    }
}

export default Home;