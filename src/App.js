import React, { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [action, setAction] = useState('');

  useEffect(() => {
    setTimeout(() => {
      fetch("https://648478f7ee799e321626ba3d.mockapi.io/api/v1/users")
        .then((res) => res.json())
        .then((data) => {
          setList(data);
          console.log(data);
        });
    }, 5000);
  }, []);

  useEffect(() => {
    if (action) {
      fetch(`https://648478f7ee799e321626ba3d.mockapi.io/api/v1/${action}`)
        .then((res) => res.json())
        .then((data) => {
          setList(data);
        });
    }
  }, [action]);

  return (
    <div className="App">
      <button onClick={() => setAction('product')}>Update</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
