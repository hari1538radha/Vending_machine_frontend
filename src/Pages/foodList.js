import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { GetProductsInfo } from "../Store/Slice/GetProductsslice";

//reuse comp
import ItemCard from "../Components/reuse comp/itemCard/ItemCard";
function FoodList() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const initialState = useSelector((state) => state.OrderInfo);
  console.log(initialState)
  useEffect(() => {
    dispatch(GetProductsInfo());
  }, []);
  const Checkout = () => {
    Navigate("/checkout", { state: { data: initialState } });
  };
  const { productsData, productLoading } = useSelector(
    (state) => state.ProductInfo
  );
  return (
    <div className="border-[5px] border-black h-screen">
      <div className="m-[20px]">Grab a snack</div>
      <div>
        {productsData.length &&
          productsData.map((rows) => (
            <div className="flex justify-evenly">
              {rows.length &&
                rows.map((columns) => (
                  <ItemCard
                    props={{
                      ImageURL: columns.ImageURL,
                      SlotName: columns.SlotName,
                      Price: columns.Price,
                      Id: columns._id,
                      Quantity: columns.Quantity,
                      ProductName: columns.ProductName,
                    }}
                  />
                ))}
            </div>
          ))}
      </div>
      <button onClick={Checkout}>Checkout</button>
    </div>
  );
}

export default FoodList;
