import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = ({ authorEmail }) => {
  const [books, setBooks] = useState([]);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({});
  const [serialNumber, setSerialNumber] = useState(1);

  useEffect(() => {
    fetchBooks();
  }, [authorEmail]);

  const fetchBooks = () => {
    axios.get(`http://localhost:8043/api/authors/books?authorEmail=${authorEmail}`)
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  };

  const handleUpdateBook = (bookId, updatedBook) => {
    axios.put(`http://localhost:8043/api/authors/books/${bookId}?authorEmail=${authorEmail}`, updatedBook)
      .then(response => {
        if (response.status === 200) {
          alert('Book updated successfully:', response.data);
          fetchBooks();
        } else {
          alert('Failed to update book. Status:', response.status);
        }
      })
      .catch(error => {
        console.error('Error updating book:', error);
        alert('Failed to update book. Check the console for details.');
      });
  };

  const handleDeleteBook = (bookId) => {
    axios.delete(`http://localhost:8043/api/authors/books/${bookId}?authorEmail=${authorEmail}`)
      .then(response => {
        if (response.status === 204) {
          alert('Book deleted successfully');
          fetchBooks();
        } else {
          alert('Failed to delete book. Status:', response.status);
        }
      })
      .catch(error => {
        console.error('Error deleting book:', error);
        alert('Failed to delete book. Check the console for details.');
      });
  };

  const openUpdateModal = (book) => {
    setUpdatedBook(book);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdatedBook({});
    setUpdateModalOpen(false);
  };

  const handleUpdate = () => {
    handleUpdateBook(updatedBook.id, updatedBook);
    closeUpdateModal();
  };

  return (
    <div>
      <h3>Book List</h3>
      <button onClick={() => fetchBooks()}>Fetch Books</button>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{serialNumber + index}</td>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td>
                <button onClick={() => openUpdateModal(book)}>Update</button>
                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isUpdateModalOpen && (
        <div>
          <h3>Update Book</h3>
          <form>
            <label>Title:</label>
            <input
              type="text"
              value={updatedBook.title}
              onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })}
            />
            <label>Description:</label>
            <input
              type="text"
              value={updatedBook.description}
              onChange={(e) => setUpdatedBook({ ...updatedBook, description: e.target.value })}
            />
            <button type="button" onClick={handleUpdate}>Update</button>
            <button type="button" onClick={closeUpdateModal}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookList;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BookList = ({ authorEmail }) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     // Fetch and update the list of books when the component mounts or when authorEmail changes
//     fetchBooks();
//   }, [authorEmail]);

//   const fetchBooks = () => {
//     axios.get(`http://localhost:8043/api/authors/books?authorEmail=${authorEmail}`)
//       .then(response => setBooks(response.data))
//       .catch(error => console.error('Error fetching books:', error));
//   };

//   const handleUpdateBook = (bookId, updatedBook) => {
//     axios.put(`http://localhost:8043/api/authors/books/${bookId}?authorEmail=${authorEmail}`, updatedBook)
//       .then(response => {
//         if (response.status === 200) {
//           alert('Book updated successfully:', response.data);
//           // Optionally: Fetch and update the list of books after updating
//           fetchBooks();
//         } else {
//           alert('Failed to update book. Status:', response.status);
//         }
//       })
//       .catch(error => {
//         console.error('Error updating book:', error);
//         alert('Failed to update book. Check the console for details.');
//       });
//   };

//   const handleDeleteBook = (bookId) => {
//     axios.delete(`http://localhost:8043/api/authors/books/${bookId}?authorEmail=${authorEmail}`)
//       .then(response => {
//         if (response.status === 204) {
//           alert('Book deleted successfully');
//           // Optionally: Fetch and update the list of books after deleting
//           fetchBooks();
//         } else {
//           alert('Failed to delete book. Status:', response.status);
//         }
//       })
//       .catch(error => {
//         console.error('Error deleting book:', error);
//         alert('Failed to delete book. Check the console for details.');
//       });
//   };

//   return (
//     <div>
//       <h3>Book List</h3>
//       <button onClick={fetchBooks}>Fetch Books</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Serial Number</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book, index) => (
//             <tr key={book.id}>
//               <td>{index + 1}</td>
//               <td>{book.title}</td>
//               <td>{book.description}</td>
//               <td>
//                 <button onClick={() => handleUpdateBook(book.id, /* updatedBook */)}>Update</button>
//                 <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookList;


