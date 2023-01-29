import React from "react";
import { useState } from "react";

function FoodList() {
  const order = useState({
    row1: {
      slot1: 0,
      slot2: 0,
      slot3: 0,
      slot4: 0,
      slot5: 0,
      slot6: 0,
      slot7: 0,
      slot8: 0,
      slot9: 0,
      slot10: 0,
    },
  });
  const foodItems = [
    [
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 0,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
    ],
    [
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
    ],
    [
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
    ],
    [
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
      {
        item: "Lays",
        imageUrls:
          "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3",
        price: 40,
        slot: 1,
        available: 10,
        order: 0,
      },
    ],
  ];
  const dropdown = [0, 0, 0, 0];

  const dropDownOnclick = () => {
    let tags = document.querySelectorAll('[id="/ROW1>*/"]');

    console.log(tags);
  };

  return (
    <div>
      <div className="font-mono text-2xl text-center m-[10px]">Grab a snack🍟</div>
      <div className="flex flex-col place-items-center w-screen ">
        {foodItems.length &&
          foodItems.map((items, indexRow) => (
            <div
              className="rounded-md  w-[80vw] my-[5px] "
              id={indexRow}
              onClick={dropDownOnclick}
            >
              <div className="flex flex-row justify-between h-[50px] border-4 py-[10px] rounded-xl ">
                <div className="flex flex-row h-[30px]">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                  <div className="">row {indexRow + 1}</div>
                </div>
                <div className="mr-[5px]">Total:50</div>
              </div>
              {items.length &&
                items.map((item, indexCol) => (
                  <div
                    className="flex flex-col justify-center items-center"
                    id={"ROW " + indexRow + " COL " + indexCol}
                  >
                    <div className="flex flex-row w-[80vw]  rounded-xl bg-[#0081C9] p-[10px] my-2">
                      <img
                        src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3 "
                        className="rounded-xl max-w-[100px] max-h-[100px]"
                      />
                      <div className="ml-[3vw] w-full">
                        <div className="flex flex-row justify-between">
                          <div className="text-2xl">Lays</div>
                          <div className="flex flex-row justify-evenly place-content-center">
                            <button className="bg-green-400 w-[30px] rounded-md">
                              -
                            </button>
                            <div className="w-[20px] text-center">0</div>
                            <button className="bg-red-500 w-[30px] rounded-md">
                              +
                            </button>
                          </div>
                        </div>
                        <div>
                          <span>&#8377;</span>50
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="">slot: {item.slot}</div>
                          <div>Available:30</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className="grid place-items-center">
        <button className="w-[200px] h[50px]  p-[5px] m-[10px] bg-slate-500 rounded-md bg-[#FA7070]">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default FoodList;
