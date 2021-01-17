import React from "react";
import { MDBProgress } from 'mdbreact';

const LoadingPage = () => {
    
  return (
      <div className="loading">
        <MDBProgress material value={100} animated />
        <h1>BK</h1>
      </div>
  );
}

export default LoadingPage;