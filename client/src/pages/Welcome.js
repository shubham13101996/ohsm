import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import toast from "react-hot-toast";
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
    propertyType: "",
    propertyName: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({ ...prevProperty, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
    try {
      const res = await axios.post("/api/v1/setup", { property });
      setProperty({
        propertyType: "",
        propertyName: "",
        phone: "",
        email: "",
        address: "",
        state: "",
        city: "",
        pincode: "",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!!");
    }
    // console.log('Submitted:', property);
  };

  return (
    <Container>
      <Title>Property Setup Form</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Property Type:
          <br />
          <Input
            type="text"
            name="propertyType"
            value={property.propertyType}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Property Name :
          <br />
          <Input
            type="text"
            name="propertyName"
            value={property.propertyName}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Phone Number :
          <br />
          <Input
            type="number"
            name="phone"
            value={property.phone}
            required
            onChange={handleChange}
          />
        </Label>

        <Label>
          Email Address:
          <br />
          <Input
            type="email"
            name="email"
            value={property.email}
            required
            onChange={handleChange}
          />
        </Label>

        <Label>
          Address :
          <br />
          <Input
            type="text"
            name="address"
            value={property.address}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          State :
          <br />
          <Input
            type="text"
            name="state"
            value={property.state}
            required
            onChange={handleChange}
          />
        </Label>

        <Label>
          City :
          <br />
          <Input
            type="type"
            name="city"
            value={property.city}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Pincode :
          <br />
          <Input
            type="text"
            name="pincode"
            value={property.pincode}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Complete Your Setup</Button>
      </Form>
    </Container>
  );
};

export default Welcome;
