import React, { useState } from 'react'

import axios from '../api/api-local';
export default function CreateProduct({ onCreate }: any) {
    // const [product, setProduct] = useState([{
    //     id: "",
    //     cid: "",
    //     name: "",
    //     price: 0,
    //     status: true
    // }])
    const [id, setId] = useState("");
    const [cid, setCid] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [status, setStatus] = useState(true);

    const handerSumbit = async (evt: any) => {
        evt.preventDefault();
        let product = {
            id: id,
            cid: cid,
            name: name,
            price: price,
            status: status
        }
        await axios.post("products", product);
        onCreate();
        setId("");
        setCid("");
        setName("");
        setPrice(0);
        setStatus(true)
    }
    return (
        <div className='row'>
            <h2>CreateProduct</h2>
            <form action="" className='col-3' id=''>
                <div>
                    <label htmlFor="id"> Id</label>
                    <input type="text" value={id} name="id" id="id" onChange={(evt) => setId(evt.target.value)} />
                </div>
                <div>
                    <label htmlFor="cid">Category Id</label>
                    <input type="text" value={cid} name="cid" id="cid" onChange={(evt) => setCid(evt.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={name} name="name" id="name" onChange={(evt) => setName(evt.target.value)} />
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" value={price} name="price" id="price" onChange={(evt) => setPrice(parseInt(evt.target.value))} />
                </div>
                <div>

                    <label htmlFor="con">Còn hàng</label>
                    <input type="radio" name="status" id="con" onChange={(evt) => setStatus(true)} />
                    <label htmlFor="het">Hết hàng</label>
                    <input type="radio" name="status" id="het" onChange={(evt) => setStatus(false)} />
                </div>
                <input onClick={(evt) => handerSumbit(evt)} type="submit" name="submit" id="submit" value={"Thêm"} />
            </form>
        </div>
    )
}
