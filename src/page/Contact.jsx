import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <div className='mt-10 px-6 py-8 bg-gray-50'>
      <h2 className='text-3xl font-bold font-mono text-center mb-10'>Contact Us</h2>

      <div className='flex flex-wrap justify-center gap-10'>

        {/* Form Section */}
        <form className='flex flex-col gap-4 w-[95%] md:w-[45%] bg-white p-6 rounded-xl shadow'>
          <input type="text" placeholder='Your Name' className='input input-bordered w-full' />
          <input type="email" placeholder='Your Email' className='input input-bordered w-full' />
          <input type="text" placeholder='Subject' className='input input-bordered w-full' />
          <textarea className='textarea textarea-bordered w-full h-32' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn bg-blue-600 hover:bg-blue-800 text-white w-40 self-center mt-3'>
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className='w-[95%] md:w-[45%] text-gray-800'>
          <h3 className='text-xl font-semibold mb-4 text-center'>Contact Information</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

            <div className='flex items-start bg-blue-700 text-white p-4 rounded-xl'>
              <IoMdCall className='text-3xl me-3' />
              <div>
                <p className='font-medium'>Phone</p>
                <a href="tel:+855964129976" className='text-sm block'>+855 964129976</a>
              </div>
            </div>

            <div className='flex items-start bg-blue-700 text-white p-4 rounded-xl'>
              <MdOutlineEmail className='text-3xl me-3' />
              <div>
                <p className='font-medium'>Email</p>
                <a href="mailto:takazi286@gmail.com" className='text-sm block'>takazi286@gmail.com</a>
              </div>
            </div>

            <div className='flex items-start bg-blue-700 text-white p-4 rounded-xl'>
              <FaFacebookF className='text-3xl me-3' />
              <div>
                <p className='font-medium'>Facebook</p>
                <a href="ahttps://www.facebook.com/share/16sZwCzKf1/?mibextid=wwXIfr" className='text-sm block'>Chett</a>
              </div>
            </div>

            <div className='flex items-start bg-blue-700 text-white p-4 rounded-xl'>
              <FaYoutube className='text-3xl me-3' />
              <div>
                <p className='font-medium'>YouTube</p>
                <a href="#" className='text-sm block'></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Contact;
