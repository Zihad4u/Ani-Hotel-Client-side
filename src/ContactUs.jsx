// import React from 'react';

const ContactUs = () => {
    return (
        <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4" >
            <h1 className="text-3xl font-bold">Get in touch</h1>
            <form className="space-y-4">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-2 border rounded-md"
                />

                <textarea
                    placeholder='Message'
                    rows='5'
                    className='w-full p-2 border rounded-md'
                ></textarea>

                <button type='submit' className='px-4 py-2 bg-green-500 text-white rounded-md'>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;