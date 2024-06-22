import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css"; // Import the CSS file

export default function UpdatePdf() {
  const { id } = useParams();
  const history = useHistory();
  const [pdf, setPdf] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/pdf/pdf/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPdf(res.data.pdf);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, token]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setPdf({
      ...pdf,
      [name]: value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/pdf/update/${id}`, 
        pdf,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Updated Successfully!",
      }).then(() => {
        history.push("/add-pdf");
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!pdf) {
    return <>Loading the data...</>;
  }

  return (
    <div>
      <div id="uploadPdfContainer">
        <h2>
          <b>Edit Task</b>
        </h2>
        <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="pdfName">Task Name:</label>
            <input
              type="text"
              id="pdfName"
              name="Name"
              defaultValue={pdf.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pdfDescription">Description:</label>
            <input
              type="text"
              id="pdfDescription"
              name="description"
              defaultValue={pdf.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" value="submit" id="uploadButton">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
