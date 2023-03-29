import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import FormProducts from "./components/FormProducts";
import ProductsList from "./components/ProductsList";



function App() {
  const [productUpdate, setProductUpdate] = useState(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
  };

  const addProduct = (productData) => {
    axios
      .post("https://products-crud.academlo.tech/products/",productData)
      .then(() => getData())
      .catch((error) => console.error(error));
  };

  const deleteProduct = (idProduct) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/ ${idProduct}/`)
      .then(() => {
        getData();
      })
      .catch((error) => console.error(error));
  };

  const selectProduct = (productData) => {
    setProductUpdate(productData);
  };

  const productActualization = (productData) => {
    axios
      .put(
        `https://products-crud.academlo.tech/products/${productData.id}/`,
        productData
      )
      .then(() => {
        getData();
        setProductUpdate(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="title">
        <h1>Administrar Productos</h1> 
      </div>
      <div className="container">
        <FormProducts
          createProduct={(data) => addProduct(data)}
          selectedProduct={productUpdate}
          updateProduct={(data) => productActualization(data)}
        />
        <ProductsList
          productsData={products}
          deleteProduct={(id) => deleteProduct(id)}
          selectProduct={(data) => selectProduct(data)}
        />
      </div>
    </>
  );
}

export default App;