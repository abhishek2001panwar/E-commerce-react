import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://media.istockphoto.com/id/1281323504/photo/underground-sci-fi-concrete-cement-background-dark-reflective-showroom-parking-white-lights.webp?b=1&s=170667a&w=0&k=20&c=YFl5ndk3wbnE5xKXLwZDDYOMzeS_Miz67i4do1kjT8M=",
      title: "Car Models",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      image:
        "https://media.istockphoto.com/id/175388779/photo/black-sport-car-on-dark-background.jpg?s=612x612&w=0&k=20&c=YAJopAAI_oc2zV2apiccfJKK3t2WJuLufr9nIMkH1lQ=",
      title: "Car Brands",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        image:
        "https://media.istockphoto.com/id/1134703571/photo/front-view-of-fictitious-car.jpg?s=612x612&w=0&k=20&c=UGUtuDpFuCLgzWtTCP4-LQvJjJ91E16OomI2mAfTkKM=",
      title: "Car Models",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium voluptatum deleniti atque corrupti rep",
    },
    {
        image:
        "https://media.istockphoto.com/id/1134703571/photo/front-view-of-fictitious-car.jpg?s=612x612&w=0&k=20&c=UGUtuDpFuCLgzWtTCP4-LQvJjJ91E16OomI2mAfTkKM=",
      title: "Car Models",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium voluptatum deleniti atque corrupti rep",
    }

    
  ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center gap-10 justify-center ">
      {data.map((value, index) => (
        <div key={index} className="w-46 h-42 bg-zinc-100 rounded-md ">
          <div className="w-full h-37 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={value.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h1 className="font-semibold">{value.title}</h1>
            <p className="text-xs mt-5">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
