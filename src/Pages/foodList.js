import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { GetProductsInfo } from "../Redux/Slice/GetProductsslice";

//reuse comp
import ItemCard from "../Components/itemCard/ItemCard";

//Lottie
import Lottie from "lottie-react";
import Loader from "../Assests/loader.json";

function FoodList() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const initialState = useSelector((state) => state.OrderInfo.orders);
  const totalPrice = useSelector((state) => state.OrderInfo.total);

  useEffect(() => {
    dispatch(GetProductsInfo());
  }, []);

  const Checkout = () => {
    Navigate("/checkout", {
      state: { data: initialState, totalPrice: totalPrice },
    });
  };

  const { productsData, productLoading } = useSelector(
    (state) => state.ProductInfo
  );
  return (
    <div>
      {" "}
      {productLoading ? (
        <div className="grid w-screen h-1/2 place-items-center mt-[30vh]">
          <div>Stocking Shelves</div>

          <Lottie
            animationData={Loader}
            loop={true}
            className="w-[60vw] h-[40vh]"
          />
        </div>
      ) : (
        <div className="border-[5px] border-black h-screen">
          <div className="m-[20px] text-center">Grab a snack</div>
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
          <button
            onClick={Checkout}
            className="bg-blue-700 p-[10px] rounded-xl"
          >
            Checkout {totalPrice}
          </button>
        </div>
      )}
    </div>
  );
}

export default FoodList;
