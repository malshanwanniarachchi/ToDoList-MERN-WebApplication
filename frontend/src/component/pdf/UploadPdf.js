import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './style.css';
import NavBar from '../navBar/NavBar';

const UploadPdf = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name); // Use lowercase 'name'
    formData.append('description', description);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/api/pdf/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: response.data.message,
      }).then(() => {
        window.location.assign("/list");
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to upload PDF',
      });
    }
  };

  return (
    <div>
      <NavBar />
      <div id="uploadPdfContainer"> 
        <h2><b>Add New Task</b></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="pdfName">Task Name:</label>
            <input type="text" id="pdfName" value={name} onChange={handleNameChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="pdfDescription">Description:</label>
            <input type="text" id="pdfDescription" value={description} onChange={handleDescriptionChange} required />
          </div>
          
          <div className="form-group">
            <label htmlFor="pdfFile">Attach:</label>
            <input type="file" id="pdfFile" onChange={handleFileChange} required/>
          </div>
          <button type="submit" id="uploadButton">Add</button>
        </form>
      </div>
    </div>
  );
};

export default UploadPdf;
