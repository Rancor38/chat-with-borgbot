import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';
import axios from 'axios'

function Form() {
    const [formData, setFormData] = useState({ message: '' });
    const { setMessage } = useContext(Context)

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post('http://localhost:4000/api/', formData)
          console.log(response.data)
          setMessage({message: response.data});
      } catch (error) {
        console.error(error);
        setMessage('An error occurred');
      }

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
