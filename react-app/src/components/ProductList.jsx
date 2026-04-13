import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList({addToCart}){
    const[products, setProducts] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            console.log("response:", res.data); 
            setProducts(res.data);
            setLoading(false);
        })
        .catch ((err) => {
            console.error("error:", err);
            setLoading(false);
        })
    }, []);
    if (loading) return <h2>loading products</h2>
return (
    <div>
        {products.map(p => (
            <div key={p.id}>
                <img src={p.image} alt={p.title} />
                <p>{p.title}</p>
                <p>${p.price}</p>

                <button onClick={() => 
                    addToCart ({
                        id: p.id,
                        name: p.title,
                        price: p.price
                    })
                }>
                    Add to Cart
                </button>
                </div>
        ))}
    </div>
    );
}
export default ProductList