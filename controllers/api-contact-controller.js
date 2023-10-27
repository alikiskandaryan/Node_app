const Contact = require ('../models/contact');
const handleError = (res,error) => {
  res.status(500).send(error.message)
};
const getContacts = (req, res) => {
  Contact
    .find()
    .sort({ createdAt: -1 })
    .then((contact) => res.status(200).json(contact))
    .catch((error) => handleError(res, error));
}

const addContacts = (req,res) => {
  const { name, link } = req.body;
  const contact = new Contact({ name, link });
    contact
      .save()
      .then((contact) => res.status(200).json(contact))
      .catch((error) => handleError(res,error))
  
};

const getContact = (req,res) => {
  Contact
      .findById(req.params.id)
      .then((contact) => res.status(200).json(contact))
      .catch((error) => handleError(res,error))
}

const deleteContact = (req,res) => {
  const { id } = req.params;
  Contact
      .findByIdAndDelete(req.params.id)
      .then((contact) => res.status(200).json(id))
      .catch((error) => handleError(res,error))
}

const ediitContact = (req,res) => {
  const { name, link } = req.body;
  const { id } = req.params;
  Contact
      .findByIdAndUpdate(id ,{ name, link },{ new: true } )
      .then((contact) => res.status(200).json(contact))
      .catch((error) => handleError(res,error))
}


module.exports = {
  addContacts,
  getContacts,
  getContact,
  deleteContact,
  ediitContact,
}
