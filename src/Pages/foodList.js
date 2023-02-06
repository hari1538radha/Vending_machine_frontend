import React, { useEffect, useState } from "react";
import laysImg from "./lays.png";
import { useDispatch,useSelector } from "react-redux";
import { GetProductsInfo } from "../Store/Slice/GetProductsslice";

function FoodList() {
  const dispatch = useDispatch();

 useEffect(() => {
 dispatch(GetProductsInfo())
 }, [])
 console.log()
 
  const available = [
    [
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
    ],
    [
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
    ],
    [
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
    ],
    [
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
      {
        Price: 50,
        imageUrl: laysImg,
        order: 0,
      },
    ],
  ];
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const itemOnclick = (e) => {
    var operaionId = e.target.className.split(" ");
    operaionId = operaionId[operaionId.length - 1];
    var operaionElement = document.getElementById(operaionId);
    const tempVariable = operaionElement.style.visibility;
    operaionElement.style.visibility =
      tempVariable === "hidden" ? "visible" : "visible";
  };
  return (
    <div className="border-[10px] border-black w-[100vw] rounded-md">
      <div className="text-center bg-black p-[5px] text-white  text-2xl">
        <i>Grab a Snack 🍟</i>
      </div>
      <div className="bg-green-400 text-center p-[10px] m-[15px] rounded-md">
        Total : <span>&#8377;</span>50
      </div>
      <div className="">
        {available.length &&
          available.map((rows, rowIndex) => (
            <div className="flex">
              {rows.map((items, colIndex) => (
                <div
                  className={
                    "grid place-items-center border-b-[3px] w-[20vw] relative p-[5px] mb-[20px] " +
                    "row_" +
                    rowIndex +
                    "col_" +
                    colIndex
                  }
                  onClick={(event) => itemOnclick(event)}
                >
                  <div className="absolute  top-[-10px] right-[-7px] bg-yellow-300 rounded-xl px-[10px]">
                    {items.order}
                  </div>
                  <img
                    src={items.imageUrl}
                    className={
                      "w-[70px] h-[70px] " +
                      "row_" +
                      rowIndex +
                      "col_" +
                      colIndex
                    }
                    onClick={(event) => itemOnclick(event)}
                  />
                  <div>
                    <span>&#8377;</span>
                    {items.Price}
                  </div>
                  <div
                    className="absolute"
                    style={{ visibility: "hidden" }}
                    id={"row_" + rowIndex + "col_" + colIndex}
                  >
                    <button className="p-[5px] bg-red-400 rounded-md w-[30px] mr-[5px]">
                      -
                    </button>
                    <button className="p-[5px] bg-green-400 rounded-md w-[30px]">
                      +
                    </button>
                  </div>
                </div>
              ))}{" "}
              c
            </div>
          ))}
      </div>
      <div className="grid place-items-center ">
        <button className="bg-green-400 p-[10px] m-[10px] rounded-xl">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default FoodList;
