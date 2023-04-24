import React, { useEffect, useState } from 'react'
import Item from '../ProductsList/Item'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

function CartPage ({ items, onAddOne, onRemoveOne }) {

  const [totalBill, setTotalBill] = useState(0);
  const [cart, setCart] = useState([]);
  const [countItem, setCountItem] = useState(0);

  useEffect(() => {
    setCart(items);
  }, [])

  const addToCart = item => { 
    item.count += 1; 
    let index = cart.findIndex(i => i.id === item.id);
    console.log('index founderad', index)
    console.log('countis?', item.count)
    setTotalBill(totalBill + item.price);    
    setCart(prevCart => [...prevCart, item]);
  };
  
  const removeItem = item => {
    let index = cart.findIndex(i => i.id === item.id);
    console.log('index founder', index)
    if (index >= 0) {   
      console.log('index found', cart)
      item.count -= 1;
      setCountItem(countItem - 1);   
      setTotalBill(totalBill - item.price);
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      })
    }
  }
  
  return (

    <ul className="CartPage-items">
      {console.log('items are', cart)}
      {items.map(((item, index) =>
        <li key={index} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                className="CartItem-removeOne"
                // onClick={() => onRemoveOne(item)}>&ndash;
                onClick={() => removeItem(item)}>&ndash;
              </button>
              <span className="CartItem-count">{item.count}</span>
              <button
                className="CartItem-addOne"
                // onClick={() => onAddOne(item)} >+
                onClick={() => addToCart(item)} >+
              </button>
            </div>
          </Item>
        </li>
      ))}
      <Row> &nbsp;</Row>
      <Row><b> Total Bill : {totalBill} </b> </Row>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;
        {items.map((element, index) => {
          if (index === 0) {
            return <h5 ><Link to={"/cartDetails/" + totalBill}>Confirm Order</Link> </h5>;
          }
        }
        )}
      </div>

      <div>
        {totalBill > 0 && <h5 ><Link to={"/cartDetails/" + totalBill}>Confirm Order</Link> </h5>}
      </div>

    </ul>

  )
}
export default CartPage