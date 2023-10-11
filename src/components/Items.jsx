import React, { useState, useEffect, useRef } from 'react';

const Items = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);
  const [afterFirst, setAfterFirst] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('data.json') 
      .then((response) => response.json())
      .then((data) => {
        setItems(data.slice(0, afterFirst));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const fetchNextItems = () => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        const startIndex = afterFirst;
        const endIndex = startIndex + 3;

        const nextItems = data.slice(startIndex, endIndex);

        setItems((prevItems) => [...prevItems, ...nextItems]);
        setAfterFirst(afterFirst + 3);
      })
      .catch((error) => console.error('Error fetching more data:', error));
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container && container.scrollTop + container.clientHeight === container.scrollHeight) {
      fetchNextItems();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [afterFirst]);
 

  return (
    <div className='mx-auto  rounded-md  h-[90vh]' >
      <div className="flex  p-3 justify-between">
        <div className="relative group">
          <div>
            <button type="button" class="inline-flex justify-center items-center px-4 py-1 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Please Select
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative group">
          <div>
            <button type="button" class="inline-flex justify-center items-center px-4 py-1 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover.bg-gray-50 focus.outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Please Select
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative group">
          <div >
            <button type="button" class="inline-flex justify-center items-center px-4 py-1 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover.bg-gray-50 focus.outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Please Select
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container px-2 mt-1">
        <div ref={containerRef} className="h-[370px] w-full overflow-auto shadow-md">
          <div className="p-2 grid grid-cols-3 grid-rows-3 md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 gap-2">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-3 shadow-md rounded-md items-center transform hover.bg-gray-50 hover:scale-105 transition duration-50 ease-in-out">
                <div className="img bg-cover justify-center items-center">
                  <img
                    src={item.images[currentIndex]}
                    alt={`Image for ${item.name}`}
                    className="w-full h-auto object-fill rounded-sm"
                  />
                </div>
                <h2 className="text-xs text-blue-700 mt-1 text-center font-semibold mb-1">{item.name}</h2>
                <p className="text-xs text-gray-800 text-center font-semibold">Rs. {item.price} | {item.quantity} pc</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
