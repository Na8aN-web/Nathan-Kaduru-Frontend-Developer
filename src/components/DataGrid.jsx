import React, { useState } from "react";
import Modal from "./Modal";

function DataGrid({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-8">
      {data.map((item) => (
        <div
          className="bg-white hover:bg-[#f4f4f4] border p-4 rounded-lg shadow-md font-mont hover:cursor-pointer"
          key={item.id}
          onClick={() => openModal(item)}
        >
          <h2 className="text-xl font-semibold mb-2">{item.rocket_name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600 mt-2">
            <strong>First Flight:</strong> {item.first_flight}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Country:</strong> {item.country}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Company:</strong> {item.company}
          </p>
        </div>
      ))}
      {selectedItem && (
        <Modal selectedItem={selectedItem} closeModal={closeModal} />
      )}
    </div>
  );
}

export default DataGrid;
