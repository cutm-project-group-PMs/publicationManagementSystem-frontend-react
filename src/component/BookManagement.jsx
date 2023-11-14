// BookManagement.js
import React, { useState } from 'react';
import axios from 'axios';
import BookList from './Booklist';
import GetAuthorId from './GetAuthorId';
import './BookManagement.css'; // Import the CSS file

const BookManagement = ({ authorEmail }) => {
  // const [newBook, setNewBook] = useState({
  //   title: '',
  //   description: '',
  // });
  const [newBook, setNewBook] = useState({
    title: '',
    description: '',
    link: '', // new field
  });


  const handleAddBook = () => {
    axios.post(`http://localhost:8043/api/authors/addbooks?authorEmail=${authorEmail}`, newBook)
      .then(response => {
        if (response.status === 201) {
          alert('Book added successfully:', response.data);
        } else {
          console.error('Unexpected response status:', response.status);
          alert('Failed to add book. Unexpected response status.');
        }
      })
      .catch(error => {
        console.error('Error adding book:', error);
        alert('Failed to add book. Check the console for details.');
      });
  };

  return (
    <div className="book-management-container">
      <div className="book-form">
        <h2>Book Management</h2>
        <div>
          <label>Title:</label>
          <input type="text" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={newBook.description} onChange={(e) => setNewBook({ ...newBook, description: e.target.value })} />
        </div>
        <div>
          <label>Link:</label>
          <input type="text" value={newBook.link} onChange={(e) => setNewBook({ ...newBook, link: e.target.value })} />
        </div>

        <button onClick={handleAddBook}>Add Book</button>
      </div>
      {/* Render the list of books using the BookList component */}
      <BookList authorEmail={authorEmail} />

        {/* to show author id to the author */}
        <div>
          <GetAuthorId authorEmail={authorEmail} />
        </div>

    </div>
  );
};

export default BookManagement;






