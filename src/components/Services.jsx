import React from 'react'

function Services() {
  return (
<section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-gray-800 text-lg font-semibold mb-4">Fast Shipping</div>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel felis at enim eleifend congue ut nec ipsum.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-gray-800 text-lg font-semibold mb-4">24/7 Customer Support</div>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel felis at enim eleifend congue ut nec ipsum.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-gray-800 text-lg font-semibold mb-4">Easy Returns</div>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel felis at enim eleifend congue ut nec ipsum.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services