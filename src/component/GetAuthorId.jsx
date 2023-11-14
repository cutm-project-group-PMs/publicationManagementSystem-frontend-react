import React, { useState } from 'react';
import './GetAuthorId.css'; // Import the CSS file
import './GetAuthorId.css';

const GetAuthorId = ({ authorEmail }) => {
  const [authorId, setAuthorId] = useState(null);

  const handleGetAuthorId = async () => {
    // make a GET request to your Spring Boot backend to get the author's ID
    const response = await fetch(`http://localhost:8043/api/authors/byEmail?email=${authorEmail}`);

    if (response.ok) {
      const id = await response.json();
      setAuthorId(id);
      console.log('Author ID:', id);
    } else {
      console.error('Failed to get Author ID');
    }
  };

  return (
    <div className="author-id-container"> {/* Apply a CSS class to the container */}
      <h2>Get Author ID</h2>
      <button onClick={handleGetAuthorId}>Get ID</button>

      {authorId && (
        <div className="author-id-result"> {/* Apply a CSS class to the result container */}
          <h3>Author ID:</h3>
          <p>{authorId}</p>
        </div>
      )}
    </div>
  );
};

export default GetAuthorId;















// without css====================
// import React, { useState } from 'react';

// const GetAuthorId = ({ authorEmail }) => {
//   const [authorId, setAuthorId] = useState(null);

//   const handleGetAuthorId = async () => {
//     // make a GET request to your Spring Boot backend to get the author's ID
//     const response = await fetch(`http://localhost:8043/api/authors/byEmail?email=${authorEmail}`);

//     if (response.ok) {
//       const id = await response.json();
//       setAuthorId(id);
//       console.log('Author ID:', id);
//     } else {
//       console.error('Failed to get Author ID');
//     }
//   };

//   return (
//     <div>
//       <h2>Get Author ID</h2>
//       <button onClick={handleGetAuthorId}>Get ID</button>

//       {authorId && (
//         <div>
//           <h3>Author ID:</h3>
//           <p>{authorId}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetAuthorId;
