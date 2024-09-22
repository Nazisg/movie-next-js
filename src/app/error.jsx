"use client"
import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center p-4 bg-red-500 text-white rounded-lg shadow-lg">
      <p className="text-lg">{message}</p>
    </div>
  );
}

export default ErrorMessage;
