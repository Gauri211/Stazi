import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the page number from the URL
import CarCard from './CarCard'; // Assuming you have a CarCard component
import Pagination from './Pagination';
import { BsChevronCompactDown } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import carData from '../data/data.json'; // Import your car data

const CarList = () => {
  const [cars] = useState(carData); // Assuming you have car data imported
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const { page } = useParams(); // Get the page number from the URL using useParams

  // Filter cars based on the search query
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Update the currentPage when the URL changes
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [page]);

  // Calculate the index of the last and first post to display on the current page
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredCars.slice(firstPostIndex, lastPostIndex);

  // Change Page
  const paginate = (pageNo) => setCurrentPage(pageNo);

  return (
    <div>
      {/* Search Bar */}
      <header className="bg-sky-200 p-4 mr-10 ml-10 rounded-lg">
        <div className="container mx-auto flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by car name..."
              className="h-10 rounded-md p-4 pl-10 w-150"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-400" />
            </div>
          </div>
          <h1 className='mt-2 mr-5 ml-7 font-semibold text-gray-600 flex cursor-pointer'>Relevance <BsChevronCompactDown className='mt-1 ml-1'/></h1>
          <h1 className='mt-2 mr-5 ml-5 font-semibold text-gray-600 flex cursor-pointer'>All brands <BsChevronCompactDown className='mt-1 ml-1'/></h1>
        </div>
      </header>

      <div className="container mx-auto p-4">
        {/* Display Filtered Car Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {currentPosts.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className='justify-end mt-5'>
          {/* Pagination */}
          <Pagination postsPerPage={postsPerPage} paginate={paginate} />
        </div>
      </div>
    </div>
  );
};

export default CarList;
