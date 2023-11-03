import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import Button from '@mui/material';

import { IconButton } from "@mui/material"

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img className="w-full h-full object-cover object-top" src="https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="ml-5 space-y-1">
            <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
            <p className="opacity-70">Size: L,White</p>
            <p className="opacity-70 mt-2">Seller: Crishtaliyo 2fashion</p>
            <div className="flex space-x-5 items-center text-gray-900 pt-6">
              <p className='font-semibold'>$199</p>
              <p className='opacity-50 line-through'>$150</p>
              <p className="text-green-600 font-semibold">5% Off</p>
            </div>
        </div>

        

      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">3</span>
                <IconButton sx={{color:'RGB(145 85 253)'}}>
                <AddCircleOutlineIcon/>
                </IconButton>
                
            </div>

            <div>
                <button>Remove</button>
            </div>

        </div>
    </div>
  )
}

export default CartItem
