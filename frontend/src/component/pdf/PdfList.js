import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css";
import NavBar from '../navBar/NavBar';
import Swal from 'sweetalert2';

const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);
  const [message, setMessage] = useState('');

  const removePdf = async (pdfId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("User not authenticated. Redirecting to login page.");
        return;
      }

      const isConfirmed = await Swal.fire({
        title: 'Are you sure?',
        text: 'You want to delete this PDF?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (isConfirmed.isConfirmed) {
        const finalURL = `http://localhost:8000/api/pdf/${pdfId}`;
        await axios.delete(finalURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire(
          'Deleted!',
          'The PDF has been deleted.',
          'success'
        ).then(() => {
          // Reload the page to reflect changes
          window.location.reload(false);
        });
      }
    } catch (error) {
      console.log("Error deleting pdf:", error);
      Swal.fire(
        'Error!',
        'Failed to delete the PDF.',
        'error'
      );
    }
  };

  const downloadPdf = async (pdfId, pdfName) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("User not authenticated. Redirecting to login page.");
        return;
      }

      const response = await axios.get(`http://localhost:8000/api/pdf/${pdfId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', // Important: responseType as 'blob' for downloading files
      });

      // Create a blob object URL for the response blob
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Create a link element, set the URL as its href and add 'download' attribute
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', pdfName); // Set the download attribute with the filename
      document.body.appendChild(link);

      // Simulate click on the link to trigger the download
      link.click();

      // Clean up: remove the link and revoke the object URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading pdf:', error);
      Swal.fire(
        'Error!',
        'Failed to download the PDF.',
        'error'
      );
    }
  };

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pdf');
        setPdfs(response.data.pdf);
      } catch (error) {
        setMessage('Failed to fetch PDFs');
      }
    };

    fetchPdfs();
  }, []);

  return (
    <div>
      <NavBar />
      <div id="pdfListContainer"> 
        <h2 className="pageTitle"><b>Tasks List</b></h2>
        {message && <p id="errorMessage">{message}</p>} 
        <ul id="pdfList">
          {pdfs.map((pdf, index) => (
            <li key={pdf._id} className="pdfItem">
              <div className="pdfInfo">
                <a href={`http://localhost:8000/api/pdf/${pdf._id}`} target="_blank" rel="noopener noreferrer">
                  {index + 1}. {pdf.Name}
                </a>
              </div>
              <div>
              <button className="deleteButton" onClick={() => removePdf(pdf._id)}>Delete</button>&nbsp;
                <button className="downloadButton" onClick={() => downloadPdf(pdf._id, pdf.Name)}>Download</button>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PdfList;
