import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { CheckoutProductsInfo } from '../Redux/Slice/CheckoutSlice';

const Checkout = () => {
    const dispatch = useDispatch()
     const Location = useLocation();
     useEffect(() => {

        dispatch(CheckoutProductsInfo(Location.state.data))
     }, [])
     console.log(Location.state.data)
  return (
    <div>
        Your bill 
    </div>
  )
}

export default Checkout