import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectProduct, fetchProduct, PRODUCT_REJECTED, PRODUCT_FULFILLED, PRODUCT_IDLE, PRODUCT_LOADING } from "./features/productSlice"
import { InfoBar } from "./app/components/InfoBar";
import { SalesGraph } from "./app/components/SalesGraph";
import { ProductDataTable } from "./app/components/ProductDataTable"

import logo from "./static/logo.png"

import "antd/dist/antd.css";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const productStatus = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    if (productStatus === PRODUCT_IDLE) {
      dispatch(fetchProduct())
    }
  }, [productStatus, dispatch]);

  if (productStatus === PRODUCT_LOADING) {
    return <div>Loading..</div>
  }
  if (productStatus === PRODUCT_REJECTED) {
    return <div>{error}</div>
  }
  
  if (productStatus === PRODUCT_FULFILLED) {
    return (
      <div className="App">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="stackline logo" />
          </div>
        </div>
        <div className="main">
            <div className="info-bar">
              <InfoBar 
                imgSrc={product.image}
                title={product.title}
                subtitle={product.subtitle}
                tags={product.tags}
              />
            </div>
            <div className="data-section">
              <SalesGraph
                salesData={product.sales}
              />
              <ProductDataTable 
                salesData={product.sales}
              />
            </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading..</div>
  }
  
}

export default App;
