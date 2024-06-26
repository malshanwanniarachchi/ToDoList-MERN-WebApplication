const Pdf = require("../models/Pdf");
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const addPdf = async (req, res) => {
  const { name, description } = req.body; // Use lowercase 'name'
  const { file } = req;

  if (!file) {
    return res.status(400).json({ message: "PDF file is required!" });
  }

  const pdf = new Pdf({
    Name: name, // Assign to Name field in Pdf model
    description,
    file: file.buffer,
    contentType: file.mimetype
  });

  try {
    await pdf.save();
  } catch (error) {
    return res.status(500).json({ message: "Add Task failed!" });
  }

  return res.status(201).json({ message: "Add Task successfully!", pdf });
};

const getAllPdf = async (req, res) => {
  let pdf;
  try {
    pdf = await Pdf.find().select("-_v -createdAt -updatedAt -addedBy");
  } catch (err) {
    return res.status(500).json({ message: "Fetching pdf failed!" });
  }

  if (!pdf) {
    return res.status(404).json({ message: "No pdf found!" });
  }
  return res.status(200).json({ pdf });
};

const viewPdf = async (req, res) => {
  const pdfId = req.params.id;

  let pdf;
  try {
    pdf = await Pdf.findById(pdfId);
  } catch (err) {
    return res.status(500).json({ message: "Fetching PDF failed!" });
  }

  if (!pdf) {
    return res.status(404).json({ message: "No PDF found!" });
  }

  res.contentType(pdf.contentType);
  res.send(pdf.file);
};

const deletePdf = async (req, res) => {
  const pdfId = req.params.id;

  let pdf;
  try {
    pdf = await Pdf.findById(pdfId);
  } catch (err) {
    return res.status(404).json({ message: "File not found!" });
  }

  try {
    await pdf.deleteOne();
  } catch (err) {
    return res.status(500).json({ message: "Deleting task failed!", err });
  }

  return res.status(200).json({ message: "Task deleted successfully!" });
};

//update

const updatePdf = async (req, res) => {
  const  pdfId = req.params.id;
  const { Name, description} = req.body;

  let pdf;
  try {
      pdf = await Pdf.findById(pdfId).select("Name description");
    if (!pdf) {
      return res.status(404).json({ message: "Task not found!" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error finding Task!" });
  }

  if (Name !== undefined) {
      pdf.Name = Name;
  }
  if (description !== undefined) {
      pdf.description = description;
  }

  try {
    await pdf.save();
    return res
      .status(200)
      .json({ message: "Task updated successfully!", pdf});
  } catch (err) {
    return res.status(500).json({ message: "Updating Task failed!" });
  }
};



const getDataById = async (req, res) => {
  const pdfId = req.params.id;

  let pdf;
  try {
      pdf = await Pdf.findById(pdfId).select('Name description');
      if (!pdf) {
        return res.status(404).json({ message: "Pdf not found!" });
      }
  } catch (err) {
    return res.status(500).json({ message: "Error retrieving PDF!" });
  }

  return res.status(200).json({ pdf });
};


module.exports = {
  addPdf,
  getAllPdf,
  viewPdf,
  deletePdf,
  updatePdf,
  getDataById
};
