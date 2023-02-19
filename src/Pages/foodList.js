import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { GetProductsInfo } from "../Store/Slice/GetProductsslice";

//reuse comp
import ItemCard from "../Components/reuse comp/itemCard/ItemCard";
function FoodList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProductsInfo());
  }, []);
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
                    Id:columns._id,
                    Quantity:columns.Quantity
                  }}
                />
              ))}
          </div>
        ))}</div>
        <div>Checkout</div>
    </div>
  );
}

export default FoodList;
