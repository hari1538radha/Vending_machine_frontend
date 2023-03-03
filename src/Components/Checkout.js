import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutProductsInfo } from "../Redux/Slice/CheckoutSlice";

//Lottie
import Lottie from "lottie-react";
import Loader from "../Assests/loader.json";

const Checkout = () => {
  const dispatch = useDispatch();
  const Location = useLocation();
  console.log( Object.fromEntries(
    Object.entries(Location.state.data).filter(
      ([key, value]) => value.orderedQuantity > 0
    )
  ))

  useEffect(() => {
    dispatch(
      CheckoutProductsInfo(
        Object.fromEntries(
          Object.entries(Location.state.data).filter(
            ([key, value]) => value.orderedQuantity > 0
          )
        )
      )
    );
  }, []);

  const { productLoading } = useSelector((state) => state.CheckOutInfo);
  return (
    <div>
      {productLoading ? (
        <div className="grid w-screen h-screen place-items-center">
          <Lottie
            animationData={Loader}
            loop={true}
            className="w-[60vw] h-[40vh]"
          />
          <div>Checking Avilability</div>
        </div>
      ) : (
        <div>not loading</div>
      )}
    </div>
  );
};

export default Checkout;
