import React from 'react'
import Footer from '../Footer/Footer'

function Sevices() {
  const data = [
    {
      image: "https://jofibostorage.blob.core.windows.net/blog/51-job-interview-questions-and-answers-header.png",
      title: "Common Questions Answered",
      text: "You can ask any question about our services."
    },
    {
      image: "https://www.currencytransfer.com/wp-content/uploads/2022/02/digital-payments-security.min_.jpg",
      title: "Secure Online Payments",
      text: "Updates on safe shopping in our stores."
    },
    {
      image: "https://www.dropoff.com/wp-content/uploads/2023/02/Delivery-as-a-service-3-1024x600.jpeg",
      title: "Fast & Reliable Delivery",
      text: "Ensuring your items reach you quickly and safely."
    }
  ];

  // Define color classes
  const bgColors = ["bg-blue-300", "bg-cyan-200", "bg-green-300"];

  return (
    <div className='ms-8 mt-5 bg-slate-100 min-h-screen py-6'>
      <h3 className='text-3xl font-bold font-mono mb-6'>Our Helpful Services</h3>
      <div className='flex flex-wrap gap-6 '>
        {
          data.map((items, i) => {
            return (
              <div key={i} className='w-[95%] lg:w-[31.5%] md:w-[45.5%]  bg-white shadow-lg rounded-2xl overflow-hidden'>
                <img src={items.image} alt={items.title} className='w-full h-48 object-cover hover:scale-105 duration-300' />
                <div className={`${bgColors[i % bgColors.length]} py-4 px-4`}>
                  <h5 className='text-xl font-semibold'>{items.title}</h5>
                  <p className='text-sm mt-1'>{items.text}</p>
                  <button className='mt-4 px-4 py-2 bg-fuchsia-400 hover:bg-fuchsia-900 hover:text-white rounded-xl duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
      
    </div>
  );
}

export default Sevices;
