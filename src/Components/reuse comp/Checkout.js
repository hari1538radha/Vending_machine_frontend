import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { CheckoutProductsInfo } from '../../Store/Slice/CheckoutSlice';
const Checkout = () => {
    const dispatch = useDispatch()
     const Location = useLocation();
     console.log(Location.state.data)
     useEffect(() => {

        dispatch(CheckoutProductsInfo(Location.state.data))
     }, [])
     
  return (
    <div>
        Your bill 
    </div>
  )
}

export default Checkout