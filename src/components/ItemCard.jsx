import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setItems(data.slice(0, 9));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleScroll = () => {
    const container = document.getElementById('item-container');
    if (container) {
      const isAtBottom =
        container.scrollTop + container.clientHeight === container.scrollHeight;
      if (isAtBottom) {
        const nextPage = currentPage + 1;
        fetch(`./data.json?=${nextPage}`)
          .then((response) => response.json())
          .then((data) => {
            setItems([...items, ...data.slice(0, 3)]);
            setCurrentPage(nextPage);
          })
          .catch((error) => {
            console.error('Error fetching more data:', error);
          });
      }
    }
  };

  useEffect(() => {
    const container = document.getElementById('item-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      // Remove the event listener when the component unmounts
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentPage]);

  return (
    <div
      id="item-container"
      className="w-80 h-80 overflow-y-scroll border border-gray-500"
    >
      <div className="flex flex-wrap">
        {items.map((item) => (
          <div key={item.id} className="w-1/3 p-4">
            {/* Render your item card here */}
            <div className="bg-white p-4 shadow-md">
              <h2 className="text-xl">{item.name}</h2>
              <img src={item.picture} alt={item.name} className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
