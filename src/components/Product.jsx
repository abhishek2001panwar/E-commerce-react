import React from 'react'
function Product() {


    const products = [
        {
            id: 1,
            name: "White Lehanga",
            price : 1500,
            image: "https://media.istockphoto.com/id/1475013216/photo/young-female-asian-woman-with-white-dress-on-a-vacation-in-santorini-enjoying-the-view-of-the.webp?b=1&s=170667a&w=0&k=20&c=YUPMHM1rtaawXuhspNG2XuqbV_KAm7EEaVvnDKshPTY="
        },
        {
            id: 1,
            name: "Fashion",
            price : 100,
            image: "https://media.istockphoto.com/id/1397185406/photo/portrait-of-woman-smiling-against-wall-with-palm-tree-shade.webp?b=1&s=170667a&w=0&k=20&c=JvQOX5ptSzgsb6mHtKU6L7DpEA4liqP1ub1M95pUB7E="
        },
        {
            id: 1,
            name: "Traditionals",
            price : 1100,
            image: "https://media.istockphoto.com/id/1306441749/photo/indian-girl-wearing-indian-traditional-dress.jpg?s=612x612&w=0&k=20&c=mQtLkRIKjvRuGiU98PLqZ2hRChWfjjYV99ySYq6wA7I="
        },
        {
            id: 1,
            name: "trends",
            price : 1000,
            image: "https://media.istockphoto.com/id/1131097418/photo/beautiful-woman-with-shopping-bags-in-the-city-sale-shopping-tourism-and-happy-people-concept.jpg?s=612x612&w=0&k=20&c=XzAFRIbtsDn4hRYNMyiNn88CuO76vqyKLFANzRzUBzE="
        },
        {
            id: 1,
            name: "Combo Set",
            price : 990,
            image: "https://media.istockphoto.com/id/1475597363/photo/two-happy-male-friends-carrying-shopping-bags-outdoors-in-city.jpg?s=612x612&w=0&k=20&c=rQpgyyE2lNX5Pu26ddXmHsMZRSfAFmMj5vco9ik2cHY="
        },
        {
            id: 1,
            name: "Fashion",
            price : 1900,
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 1,
            name: "Shirt-Men",
            price : 100,
            image: "https://media.istockphoto.com/id/1201024669/photo/handsome-man-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=TexR7OTm-QRZCtkDecnSVgihtLMbG9WynadACrEiMf0="
        },
        {
            id: 1,
            name: "Abstract",
            price : 1400,
            image: "https://media.istockphoto.com/id/1176789549/photo/handsome-gentleman-downtown.jpg?s=612x612&w=0&k=20&c=ay4JQ4nu09orMCyWSY4AiZ0VZKYs29_zDXvqREG9lgg="
        },
        {
            id: 1,
            name: "Check-shirt",
            price : 1000,
            image: "https://media.istockphoto.com/id/544358286/photo/pride-man-smiling.jpg?s=612x612&w=0&k=20&c=o7xWnlzKLdrPWdnml8s0kfaiXlme62N4iVWGC0TO0C8="
        },
        
        
    ]
  return (
    <section class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
       {
        products.map((elem , index) => (
            <div key={index} class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <img src={elem.image} alt="Product Image" class="w-full h-64 object-cover"/>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{elem.name}</h3>
              <p class="text-gray-600">${elem.price*2}</p>
            </div>
          </div>
        ) )
       }
       </div>
  </div>
</section>
  );
}
 
export default Product;

