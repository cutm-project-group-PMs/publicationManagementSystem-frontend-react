// BookManagement.js
import React, { useState } from 'react';
import axios from 'axios';
import Booklist from './Booklist';

const BookManagement = ({ authorEmail }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    description: '',
  });

  const handleAddBook = () => {
    axios.post(`http://localhost:8043/api/authors/books?authorEmail=${authorEmail}`, newBook)
      .then(response => console.log('Book added:', response.data))
      .catch(error => console.error('Error adding book:', error));
  };

  // Implement update and delete book functions as needed

  return (
    <div>
      <h2>Book Management</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={newBook.description} onChange={(e) => setNewBook({ ...newBook, description: e.target.value })} />
      </div>
      <button onClick={handleAddBook}>Add Book</button>
      {/* Render the list of books using the BookList component */}
      <Booklist authorEmail={authorEmail} />
    </div>
  );
};

export default BookManagement;









// // AddBookForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddBookForm = ({ authorEmail, onBookAdded }) => {
//     const [newBook, setNewBook] = useState({
//         title: '',
//         description: '',
//     });

//     const handleChange = (e) => {
//         setNewBook({
//             ...newBook,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`http://localhost:8099/api/authors/books/add?authorEmail=${authorEmail}`, newBook);
//             console.log(response.data);
//             // Handle successful book addition
//             onBookAdded();
//         } catch (error) {
//             console.error('Error adding book:', error);
//             // Handle book addition error
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Title:
//                 <input type="text" name="title" value={newBook.title} onChange={handleChange} />
//             </label>
//             <br />
//             <label>
//                 Description:
//                 <input type="text" name="description" value={newBook.description} onChange={handleChange} />
//             </label>
//             <br />
//             <button type="submit">Add Book</button>
//         </form>
//     );
// };

// export default AddBookForm;
