import './App.css';
import './style.css'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [record, setRecord] = useState([]);
  const [datarecord, setRecordData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setRecord(data.users))
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, []);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then((res) => {
        // Update the datarecord state with the retrieved data
        setRecordData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 style={{ color: 'darkblue' }}>Fetch Api</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>MaidenName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {record.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.maidenName}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>
                  <img src={data.image} alt={`Image for ${data.firstName}`} style={{ width: '70px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <h1 style={{ color: 'darkblue' }}>Axios Api</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>description</th>
              <th>Price</th>
              <th>rating</th>
              <th>stock</th>
              <th>brand</th>
            </tr>
          </thead>
          <tbody>
            {datarecord.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.description}</td>
                <td>{val.price}</td>
                <td>{val.rating}</td>
                <td>{val.stock}</td>
                <td>{val.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
