import React from "react";

function About() {
  return (
    <section class="bg-gray-100 py-16 mt-5">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p class="text-gray-600 leading-relaxed mb-8">
            E-commerce websites allow people to buy products or services online.
            They have become increasingly popular in recent years, as they offer
            a convenient and secure way to make purchases. One of the main
            benefits of using an e-commerce website is the convenience it
            offers. Customers can shop at any time of the day or night, from the
            comfort of their own homes. This means that they don't have to worry
            about traffic or finding parking, and they can compare prices and
            reviews without having to leave their couches. E-commerce websites
            are also secure, as most use secure sockets layer (SSL) encryption
            to protect the information transmitted between the customer and the
            website.
          </p>
          <p class="text-gray-600 leading-relaxed mb-8">
          This means that customers can feel confident that their
            personal information is protected. In addition, many e-commerce
            websites offer additional features such as loyalty programs, which
            reward customers for their repeat business. These programs can
            include things like discounts, rewards points, or early access to
            sales. Overall, e-commerce websites offer a convenient, secure, and
            often rewarding way to make purchases. They have become an important
            part of the modern retail landscape, and are expected to continue to
            grow in popularity in the future.
          </p>
          <a
            href="#"
            class="bg-indigo-600 text-white px-6 py-3 rounded-full inline-block uppercase font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
