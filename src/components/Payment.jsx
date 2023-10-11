import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import{BiArrowFromTop} from 'react-icons/bi'

const Payment = () => {
  return (
    <div className="flex h-15  p-1 w-full shadow-sm bg-gray-50 absolute bottom-0">
      {/* Left Div */}
      
      <div className="w-[65%] bg-white  shadow-sm grid grid-cols-4 gap-3 p-2 rounded-md pl-4 ml-1">
  <button class="bg-blue-700 hover:bg-blue-900 text-white  font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
  <p className='text-left text-sm'>New Button</p>
  </button>
  <button class="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
  <p className='text-left text-sm'>Discount</p>
  </button>
  <button class="bg-blue-700 hover:bg-blue-900  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
  <p className='text-left text-sm'>Tax</p>
  </button>
  <div class=" text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
   <p> Item Count :</p>
  </div>
  <button class="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
  <p className='text-left text-sm'>New Button</p>
  </button>
  <button class="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
  <p className='text-left text-sm'>Shipping</p>
  </button>
  <button class="bg-blue-700 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
  <p className='text-left text-sm'>Packaging</p>
  </button>
  <button class="bg-blue-700 hover:bg-blue-900  text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
   <p className='text-left text-sm'>Total</p>
  </button>
</div>


      {/* Right Div (35%) */}

      <div class="w-[35%] bg-white shadow-sm grid grid-cols-4 gap-4 p-2  rounded-md  mr-1 ml-2" >
  <button class="bg-green-500 hover:bg-green-600 text-sm text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
Cash
  </button>
  <button class="bg-yellow-500 hover:bg-yellow-600 text-sm text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
    Pay
  </button>
  <button class="bg-yellow-500 hover:bg-yellow-600 text-sm text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
    Card
  </button>
  <button class="bg-yellow-500 hover:bg-yellow-600 text-sm text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
    Credit
  </button>
  <button class="bg-blue-700 hover:bg-blue-900 text-sm text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
    Button
  </button>
  <button class="bg-blue-700 hover:bg-blue-900 text-sm text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
    Button
  </button>
  <button class="bg-blue-700 hover:bg-blue-900 text-sm text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
    Button
      </button>
  <button class="bg-blue-700 hover:bg-blue-900 text-sm text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
    Button
  </button>
</div>
    </div>
  );
};

export default Payment;
