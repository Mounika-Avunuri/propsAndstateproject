import React,{useState} from 'react';
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
function Banner(props) {
    console.log("i am rendered");
    const[state,setState]=useState("");
    const handleChange=(event)=>{
setState(event.target.value);
    }
    const addLink=()=>{
        console.log("link added");
        props.AddHeaderLinks(state);
    }
    return (

            <Container>
                <Row style={{marginTop:"50px"}}>
                    <Col>
                    <h3>Add Header Component</h3>
                    <h1>{state}</h1>
                    <Form>
  
    <Form.Control type="text" onChange={handleChange} placeholder="Enter Link Name" />
   
  

  
  <Button variant="primary" type="button" onClick={addLink}>
    Add Header Link
  </Button>
</Form>

                    </Col>
                    <Col>
                    <h3>Add Footer Component</h3>
                        </Col>
                    </Row>
                </Container>
            
        
    )
}

export default Banner
