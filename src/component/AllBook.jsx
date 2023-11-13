import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AllBook.css';

const AllBook = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all books from the server when the component mountssss
    axios.get('http://localhost:8043/api/getBooks')
      .then(response => {
        setBooks(response.data);
        setFilteredBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleSearch = () => {
    // Filter the books based on the search term
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <>
      <div>
        <h2>Book List</h2>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="scrollable-container">
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Title</th>
              <th>Author Email</th>
              <th>Book Description</th>
              <th>Book Link</th>
              {/* Add more columns based on your book structure */}
              {/* Example: <th>Published Date</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.title && typeof book.title === 'string' ? book.title : 'N/A'}</td>
                <td>{book.author && typeof book.author === 'string' ? book.author : (book.author && book.author.email ? book.author.email : 'N/A')}</td>
                <td>{book.description && typeof book.description === 'string' ? book.description : 'N/A'}</td>
                <td>{book.link && typeof book.link === 'string' ? <a href={book.link} target="_blank" rel="noopener noreferrer">Link</a> : 'N/A'}</td>
                
                {/* Add more cells based on your book structure */}
                {/* Example: <td>{book.publishedDate && typeof book.publishedDate === 'string' ? book.publishedDate : 'N/A'}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBook;



{/* <td>
    {book.link && typeof book.link === 'string' ? (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                window.open(book.link, '_blank');
            }}
        >
            Link
        </a>
    ) : 'N/A'}
</td> */}

