const ProductsList = ({ productsData, deleteProduct,selectProduct}) => {
    return (
    <div>
      <h1 className="title-products">Listado de productos</h1>
      {productsData?.map((product) => (
            <div className="containerList" key={product.id}>
              <h4>
                <span>Nombre:</span> {product.name} 
              </h4>
              <h4>
                <span>categoria:</span> {product.category}
              </h4>
              <h4>
                <span>Precio:</span>$ARS {product.price}
              </h4>
              <h4>
                <span>disponibilidad:</span> {(product.isAvailable)? "True": "False"}
              </h4>
              <div className="button">
                <button className="button-editar" onClick={() => selectProduct(product)}>Editar</button>
                <button className="button-elimimar" onClick={() => deleteProduct(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
    </div>
    );
  };
  
  export default ProductsList;