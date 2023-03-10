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
  useEffect(() => {
    dispatch(
      CheckoutProductsInfo(
        Object.fromEntries(
          Object.entries(Location.state.data).filter(
            ([key, value]) => value > 0
          )
        )
      )
    );
  }, []);

  const { productLoading } = useSelector((state) => state.CheckOutInfo);

  return (
    <div>
      {productLoading ? (
        <div className="grid w-screen h-1/2 place-items-center mt-[30vh]">
          <div className="text-xl">Checking Avilability</div>

          <Lottie
            animationData={Loader}
            loop={true}
            className="w-[60vw] h-[40vh]"
          />
        </div>
      ) : (
        <div>not loading</div>
      )}
    </div>
  );
};

export default Checkout;
