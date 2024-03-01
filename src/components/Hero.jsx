import React from 'react'

function hero() {
  return (
    <section class="bg-gray-200 py-20 h-[700px]">
    <div class="container mx-auto px-4 mt-5">
      <div class="flex flex-col lg:flex-row items-center justify-center">
        <div class="lg:w-1/2 lg:pr-10 mt-[100px]">
          <h1 class="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">Welcome to Our Online Store</h1>
          <p class="text-gray-600 text-lg mb-8">Discover the latest trends and shop our wide selection of products.</p>
          <div class="flex space-x-4">
            <a href="#" class="bg-indigo-600 text-white py-3 px-6 rounded-full uppercase font-semibold text-sm hover:bg-indigo-700 transition duration-300">Shop Now</a>
            <a href="#" class="border border-gray-600 text-gray-600 py-3 px-6 rounded-full uppercase font-semibold text-sm hover:text-white hover:bg-gray-600 transition duration-300">Learn More</a>
          </div>
        </div>
        <div class="lg:w-1/2 mt-10 lg:mt-[100px]">
          <img src="https://media.istockphoto.com/id/534203250/photo/women-carrying-shoppings-bags-and-using-smartphone.jpg?s=612x612&w=0&k=20&c=LvQFmgM4ZUcF6msXkyEXbBGNg6i_uJMhNwoMQ6bNAdE=" alt="Hero Image" class="rounded-lg shadow-md"/>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default hero