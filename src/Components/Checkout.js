import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutProductsInfo } from "../Redux/Slice/CheckoutSlice";

//Lottie
import Lottie from "lottie-react";
import Loader from "../Assests/loader.json";

const Checkout = () => {
  const dispatch = useDispatch();
  const Location = useLocation();
  const [AvialableProducts,setAvailableProducts ]= useState([])
  const orders = Object.fromEntries(
    Object.entries(Location.state.data).filter(([key, value]) => value > 0)
  );
  const CartData = {
    orders,
  };
  console.log(CartData);
  const { CheckoutData, productLoading } = useSelector(
    (state) => state.CheckOutInfo
  );
  useEffect(() => {
    dispatch(CheckoutProductsInfo(CartData));
  }, []);
  if(!productLoading)
  for(var i = 0 ; i<=CheckoutData[0].length-1 ;i++)
  {
    AvialableProducts.push(CheckoutData[0][i])
  }


console.log(AvialableProducts)

  // var TotalPrice = 0;
  // for(var i = 0; i<CheckoutData.length-1 ;i++)
  // {
  //   var TotalPrice  = TotalPrice + CheckoutData[i].Price

  // }
  // console.log(CheckoutData[i].Price)
  const handelQuantity = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    const data = CheckoutData[1].find(({ id }) => id === e.target.id);
    console.log(data)
    console.log(AvialableProducts)
    setAvailableProducts(...AvialableProducts,data)
  };
  console.log(CheckoutData, productLoading);
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
        <div>
          {
            <div>
              {AvialableProducts.length > 0 &&
                AvialableProducts.map((obj) => (
                  <div className="flex">
                    <div>
                      <img src={obj.ImageURL}></img>
                    </div>
                    <div className="flex-col items-center justify-center">
                      <div>ProductName: {obj.ProductName}</div>
                      <div>Price :₹{obj.Price}</div>
                      <div>Ordered: {obj.Ordered}</div>
                      <div>
                        Total :{obj.Ordered}*{obj.Price}= ₹
                        {obj.Ordered * obj.Price}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          }
          <div className="h-1 bg-slate-500 w-screen"></div>
          {
            <div>
              {CheckoutData[1].length > 0 &&
                CheckoutData[1].map((obj, key) => (
                  <div className="flex">
                    <div>
                      <img src={obj.ImageURL}></img>
                    </div>
                    <div className="flex-col items-center justify-center">
                      <div>ProductName: {obj.ProductName}</div>
                      <div>Price :₹{obj.Price}</div>
                      <div>
                        <div>Ordered: {obj.Ordered}</div>
                        <div>Avilable :{obj.QuantityAvailable}</div>
                      </div>
                      <div>
                        Total :{obj.Ordered}*{obj.Price}= ₹
                        {obj.Ordered * obj.Price}
                      </div>
                      <button id={obj.id} onClick={handelQuantity}>
                        added the available qty
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          }
          <div>
            {/* <p>
              Total Price :{TotalPrice}
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
