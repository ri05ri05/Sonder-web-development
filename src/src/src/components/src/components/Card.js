import React from "react";

const Card = ({ title, children, image, footer }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div>{children}</div>
      </div>
      {footer && (
        <div className="p-4 bg-gray-100 dark:bg-gray-900">{footer}</div>
      )}
    </div>
  );
};

export default Card;
