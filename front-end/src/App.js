
import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isCancelled, setIsCancelled] = useState(false)

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission (or any other action)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      // Handle the image file, e.g., upload to server
      console.log('Uploading image:', image);
    } else {
      console.log('No image selected');
    }
  };

  //Handle cancel submission
  const handleCancel = (e) => {
    e.preventDefault();
    setIsCancelled(true);
    window.location.reload();
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Upload an Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
        >
          Submit
        </button>
      </form>

      {preview && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Image Preview:</h3>
          <img
            src={preview}
            alt="Image Preview"
            className="w-full h-auto rounded-md"
          />
        </div>
      )}
      {preview && (
        <button
          onClick={handleCancel}
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
        >
          Cancel
        </button>
      )}
    </div>
  );
}

export default App;
