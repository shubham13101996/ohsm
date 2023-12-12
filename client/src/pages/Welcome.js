import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #ff69b4; /* Pink */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ff69b4; /* Pink */
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #ff69b4; /* Pink */
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e05595; /* Lighter pink on hover */
  }
`;

const Welcome = () => {
  const [property, setProperty] = useState({
    propertyType: '',
    propertyName: '',
    phone: '',
    email: '',
    address:'',
    state:'',
    city:'',
    pincode:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({ ...prevProperty, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    console.log('Submitted:', property);
  };

  return (
    <Container>
      <Title>Property Setup Form</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Property Type:
          <br/>
          <Input
            type="text"
            name="propertyType"
            value={property.propertyType}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Property Name :
          <br/>
          <Input
            type="text"
            name="propertyName"
            value={property.propertyName}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Phone Number :
          <br/>
          <Input
            type="number"
            name="phone"
            value={property.phone}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Email Address:
          <br/>
          <Input
            type="email"
            name="email"
            value={property.email}
            onChange={handleChange}
          />
        </Label>

        <Label>
           Address :
           <br/>
          <Input
            type="text"
            name="address"
            value={property.address}
            onChange={handleChange}
          />
        </Label>

        <Label>
          State :
          <br/>
          <Input
            type="text"
            name="state"
            value={property.state}
            onChange={handleChange}
          />
        </Label>


        <Label>
          City :
          <br/>
          <Input
            type="type"
            name="city"
            value={property.city}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Pincode :
          <br/>
          <Input
            type="text"
            name="pincode"
            value={property.pincode}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Complete Your Setup</Button>
      </Form>
    </Container>
  );
};

export default Welcome;
