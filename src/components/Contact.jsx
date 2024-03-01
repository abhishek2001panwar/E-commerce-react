import React from 'react'

function Contact(){
return(
 <section class="bg-gray-100 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-8">Contact Us</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form class="bg-white rounded-lg shadow-md p-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Send us a message</h3>
          <div class="mb-4">
             <input type="text" class="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white" placeholder="Your Name"/>
          </div>
          <div class="mb-4">
             <input type="email" class="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white" placeholder="Your Email"/>
          </div>
          <div class="mb-4">
            <textarea class="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="bg-indigo-600 text-white px-6 py-3 rounded-full inline-block uppercase font-semibold hover:bg-indigo-700 transition duration-300">Send Message</button>
        </form>
        <div class="bg-white rounded-lg shadow-md p-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <p class="text-gray-600 mb-4">Address: 123 Street Name, City, Country</p>
          <p class="text-gray-600 mb-4">Phone: +1 234 567 890</p>
          <p class="text-gray-600 mb-4">Email: info@example.com</p>
          <div class="flex justify-center">
            <a href="#" class="text-indigo-600 hover:text-indigo-700 transition duration-300">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.47 2 2 6.47 2 12c0 2.85 1.21 5.45 3.14 7.28.18.14.37.26.56.37.38.22.82.35 1.3.35h12c.48 0 .92-.13 1.3-.35.2-.12.39-.24.57-.38C20.79 17.45 22 14.85 22 12c0-5.53-4.47-10-10-10zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-9.14l-4.88 4.89c-.2.2-.45.3-.71.3s-.51-.1-.71-.29l-.86-.86c-.31-.31-.09-.85.35-.85h1.99V9.86c0-.29.24-.5.54-.5h1.39c.3 0 .54.21.54.5v2.44h1.99c.44 0 .66.54.35.85l-.86.86c-.2.2-.45.3-.71.3s-.51-.1-.71-.29L13 9.86z"></path></svg>
            </a>
            <a href="#" class="text-indigo-600 hover:text-indigo-700 transition duration-300 ml-4">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.47 2 2 6.47 2 12c0 5.25 3.41 9.71 8.13 11.27.59.16.81-.25.81-.57v-2.04c0-.66-.28-1.25-.42-1.57 1.38-.16 2.81-.53 2.81-2.38 0-.53-.19-.96-.53-1.29.06-.16.09-.34.09-.52 0-.81-.72-1.41-1.72-1.41-1.28 0-2.03.94-2.03 1.94 0 .34.09.66.25.94-.84.09-1.66.38-1.66 1.41 0 .31.09.59.22.84-.75.09-1.28.38-1.47.91-.16.44-.09.94.22 1.34-.06.16-.06.34-.03.5-.03.09-.03.22-.03.34 0 1.25.91 2.22 2.19 2.22 1.28 0 2.22-.97 2.22-2.25 0-.16 0-.34-.03-.5.16-.38.25-.81.22-1.25.13-.25.22-.53.22-.84 0-1.03-.81-1.34-1.66-1.41.16-.28.25-.59.25-.94 0-1 0-1.91-.41-2.66.03-.25.06-.5.09-.72 0-.31-.09-.66-.38-.81 1.34-.47 2.19-1.69 2.19-3.03 0-.66-.19-1.28-.53-1.81.03-.09.03-.22.03-.34 0-1.31-1.03-2.38-2.31-2.38zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"></path></svg>
            </a>
            <a href="#" class="text-indigo-600 hover:text-indigo-700 transition duration-300 ml-4">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.71 4.71a.996.996 0 0 0-1.41 0l-2.83 2.83a.996.996 0 1 0 1.41 1.41l2.83-2.83a.996.996 0 0 0 0-1.41zm-1.41 15.58c-.38.38-.89.58-1.41.58s-1.03-.19-1.41-.58c-3.17-3.17-8.33-3.17-11.5 0a.996.996 0 1 0 1.41 1.41c2.47-2.47 6.47-2.47 8.94 0a.996.996 0 0 0 1.41 0c.38-.38.58-.89.58-1.41s-.2-1.03-.59-1.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L18 9l-7 7z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact;