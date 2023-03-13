import React, { useState } from "react";
import "./itemcard.css";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Redux/Slice/OrderSlice";

function ItemCard({ props }) {
  const [onClickStyle, setStyle] = useState({});
  const dispatch = useDispatch();
  const orderQuantity = useSelector(
    (state) => state.OrderInfo.orders[props.Id]
  );
  const onClickHandler = () => {
    if (onClickStyle.transform == undefined) {
      setStyle({ transform: "rotateY(180deg)" });
      setTimeout(() => {
        setStyle({});
      }, 3000);
    }
  };

  const addToCart = (id, Quantity, Price) => {
    dispatch(addItem({ id, Quantity, Price }));
  };
  const removeFromCart = (id, Quantity, Price) => {
    dispatch(removeItem({ id, Quantity, Price }));
  };

  return (
    <div className="flip-card w-[18vw] h-[23vh] m-1">
      <div
        className="flip-card-inner"
        style={onClickStyle}
        onClick={() => {
          onClickHandler();
        }}
      >
        <div className="flip-card-front bg-green-100 items-center rounded-xl ">
          <div className="absolute top-[-2%] left-[83%] bg-blue-700 px-[3px] rounded-full text-center">
            {orderQuantity ? orderQuantity : 0}
          </div>
          <img src={props.ImageURL} className="title w-[80px] h-[80px]" />
          <p className="text-xl">{props.SlotName}</p>
          <div>
            <span>&#8377;</span> {props.Price}
          </div>
        </div>
        <div className="flip-card-back bg-black text-white rounded-xl items-center justify-evenly">
          <div>
            <span>&#8377;</span> {props.Price}
          </div>
          <div>
            {orderQuantity ? orderQuantity : 0} / {props.Quantity}
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                removeFromCart(props.Id, props.Quantity, props.Price);
              }}
              className="bg-red-500 py-[10px] px-[11px] rounded-md mr-2"
            >
              -
            </button>

            <button
              onClick={() => {
                addToCart(props.Id, props.Quantity, props.Price);
              }}
              className="bg-green-500 py-[10px] px-[10px]  rounded-md"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
