import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Cards = ({ cartData, sendDataToParent }) => {
  Cards.propTypes = {
    cartData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        // Add other prop types as needed
      })
    ).isRequired,
    sendDataToParent: PropTypes.func.isRequired,
  };

  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // Call sendDataToParent with the final count after state updates
  sendDataToParent(count);

  return (
    <div className='row d-flex justify-content-center'>
      {cartData.map((data) => (
        <div key={data.id} className="container card col-xxl-3 col-xl-5 col-lg-5 col-md-5 m-2 p-2 shop-card">
          <img src={data.image} className='m-auto' alt="Sample" />
          <div className="card-body">
            <h4 className="card-title text-center">{data.title}</h4>
            <h4 className="text-center"><b>Category:</b> {data.category}</h4>
            <p className='text-center'><b>Description:</b> {data.description}</p>
            <h4 className="text-center">Rating: {data.rating.rate}</h4>
            <h4 className="text-center">Sold: {data.rating.count}</h4>
            <h1 className="card-text text-center">${data.price}</h1>
           <div className='d-flex justify-content-center'>
              <button onClick={addCount} className="btn btn-success btn-card m-3">Add Cart</button>
              <button onClick={decreaseCount} className="btn btn-danger btn-card m-3">Remove Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
