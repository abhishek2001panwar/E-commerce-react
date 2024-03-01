import React from 'react'

function Check() {
  return (
<section class="bg-gray-100 py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Products</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
     
      <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
        <img src="https://via.placeholder.com/400x300" alt="Product Image" class="w-full h-64 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Product Name</h3>
          <p class="text-gray-600">$99.99</p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
        <img src="https://via.placeholder.com/400x300" alt="Product Image" class="w-full h-64 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Product Name</h3>
          <p class="text-gray-600">$99.99</p>
        </div>
      </div>
     
      <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
        <img src="https://via.placeholder.com/400x300" alt="Product Image" class="w-full h-64 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Product Name</h3>
          <p class="text-gray-600">$99.99</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
  )
}

export default Check;