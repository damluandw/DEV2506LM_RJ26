import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from './api/api-local';
import axios from './api/api-online';
import CreateProduct from './components/CreateProduct';
import UpadateProduct from './components/UpadateProduct';

function App() {
  const [products, setProducts] = useState([{
    id: "",
    cid: "",
    name: "",
    price: 0,
    status: true
  }]);

  const [product, setProduct] = useState({
    id: "",
    cid: "",
    name: "",
    price: 0,
    status: true
  });
  const getProduct = async () => {
    let res = await axios.get("product");
    console.log(res.data);
    setProducts(res.data);
  }
  useEffect(() => {
    console.log("data1" + products);
    getProduct();
    console.log("data2" + products);
  }, [])

  const handerDelete = async (id: any) => {

    await axios.delete("product/" + id);
    getProduct();
  }
  const handerCreate = () => {
    getProduct();
  }
  const handerViewUpdate = async (id: any) => {
    let res = await axios.get("product/" + id);
    setProduct(res.data);
  }
  return (
    <div className="App">
      <div id='list-product'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>CID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item, index) => {
                return <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.cid}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.status ? "Còn hàng" : "Hêt hàng"}</td>
                  <td>
                    <button className='btn btn-primary'>Create</button>
                    <button className='btn btn-warning' onClick={() => handerViewUpdate(item.id)}>Update</button>
                    <button onClick={() => handerDelete(item.id)} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <CreateProduct onCreate={handerCreate} ></CreateProduct>
      <UpadateProduct product ={product} onUpdate={handerCreate} ></UpadateProduct>
      
    </div>
  );
}

export default App;
