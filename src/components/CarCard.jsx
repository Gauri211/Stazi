import React from 'react';
import {GoPeople} from 'react-icons/go'
import { BiGasPump } from 'react-icons/bi'
import { SlSpeedometer } from 'react-icons/sl'
import { PiSteeringWheelBold } from 'react-icons/pi'
import { AiOutlineHeart } from 'react-icons/ai'

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <div className='flex justify-between'>
        <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
        <div className='border border-dashed border-teal-500 pl-1 pr-1 h-7 rounded-md'>
            {car.year}
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <p className="text-gray-600 flex"><GoPeople style={{marginTop: '3px', marginRight: '5px'}}/> {car.seats} People</p>
        <p className="text-gray-600 flex "><BiGasPump style={{marginTop: '3px', marginRight: '5px'}}/> {car.engine}</p>    
      </div>
      <div className='grid grid-cols-2 gap-4 mt-5 mb-5'>
        <p className="text-gray-600 flex"><SlSpeedometer style={{marginTop: '3px', marginRight: '5px'}}/> {car.speed}</p>
        <p className="text-gray-600 flex "><PiSteeringWheelBold style={{marginTop: '3px', marginRight: '5px'}}/> {car.mode}</p>    
      </div>
      <hr className='bg-gray-300'/>
      <div className='flex justify-between mt-3'>
            <div>
                <h1 className='text-xl'>${car.price} <span className='text-sm'> / month</span></h1>
            </div>
            <div className='flex'>
                <div className='bg-sky-500 rounded-lg mr-4 p-2 font-semibold text-white cursor-pointer'><AiOutlineHeart/></div>
                <button className='bg-sky-500 rounded-lg p-1 pl-2 pr-2 font-semibold text-white'>Rent Now</button>
            </div>
      </div>
    </div>
  );
};

export default CarCard;
