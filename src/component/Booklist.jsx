// BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Booklist = ({ authorEmail }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8043/api/authors/books?authorEmail=${authorEmail}`)
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, [authorEmail]);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.description}
            {/* Add additional book details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;




// // BookList.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Booklist = ({ authorEmail }) => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8099/api/authors/books?authorEmail=${authorEmail}`);
//                 setBooks(response.data);
//             } catch (error) {
//                 console.error('Error fetching books:', error);
//             }
//         };

//         fetchBooks();
//     }, [authorEmail]);

//     return (
//         <div>
//             <h2>Your Books</h2>
//             <ul>
//                 {books.map((book) => (
//                     <li key={book.id}>
//                         <strong>{book.title}</strong> - {book.description}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Booklist;
