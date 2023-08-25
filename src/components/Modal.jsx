import React from "react";

function Modal({ selectedItem, closeModal }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg w-3/4 shadow-md font-mont">
        <h2 className="text-xl font-semibold mb-2">
          {selectedItem.rocket_name}
        </h2>
        <p className="text-gray-600">{selectedItem.description}</p>
        <p className="text-gray-600 mt-2">
          <strong>First Flight:</strong> {selectedItem.first_flight}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Country:</strong> {selectedItem.country}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Company:</strong> {selectedItem.company}
        </p>
        <div className="font-bold text-[20px] underline my-4">Stats</div>
        <p className="text-gray-600 mt-2">
          <strong>Height:</strong> {selectedItem.height.meters} meters
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Diameter:</strong> {selectedItem.diameter.meters} meters
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Mass:</strong> {selectedItem.mass.kg} Kilograms
        </p>
        <a href={selectedItem.wikipedia} target="_blank">
          <p className="my-8 text-blue-500">More details</p>
        </a>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
