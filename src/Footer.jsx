
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
// Reusable SocialIcon component with hover effect
const SocialIcon = ({ icon: Icon }) => (
    <Icon className="social-icon hover:text-[#00df9a]" size={30} />
);
const Footer = () => {
    const items = [
        // Social media icons
        { type: 'icon', icon: FaFacebookSquare },
        { type: 'icon', icon: FaInstagram },
        { type: 'icon', icon: FaTwitterSquare },
        { type: 'icon', icon: FaGithubSquare },
        { type: 'icon', icon: FaDribbbleSquare },
        // Footer sections
        { type: 'section', title: 'Solutions', items: ['Analytics', 'Marketing', 'Commerce', 'Insights'] },
        { type: 'section', title: 'Support', items: ['Pricing', 'Documentation', 'Guides', 'API Status'] },
        { type: 'section', title: 'Company', items: ['About', 'Blog', 'Jobs', 'Press', 'Careers'] },
        { type: 'section', title: 'Legal', items: ['Claim', 'Policy', 'Terms'] },
    ];
    return (
        <div className='bg-[#000300] w-full mx-auto mt-[850px] sm:mt-[650px] md:mt-[400px] lg:mt-[200px] py-16 px-4 grid  lg:grid-cols-3 gap-8 text-gray-300'>
            {/* Left section with brand and social icons */}
            <div className=''>
                <h1 className='w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00df9a]'>ANI Hotel</h1>
                <p className='py-4 text-[10px] sm:text-[16px] w-32 sm:w-full'>
                    Looking for a hotel room or have questions about our services? Don't hesitate to get in touch with us! Our dedicated team at Ani Hotel Real  is here to assist you every step of the way. Whether you're booking room  or investing in our hotel, we're committed to providing you with expert guidance and personalized support.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    {/* Mapping over social icons and rendering the SocialIcon component */}
                    {items.map((item, index) => (
                        item.type === 'icon' ? (
                            <SocialIcon key={index} icon={item.icon} />
                        ) : null
                    ))}
                </div>
            </div>
            {/* Right section with footer content organized in sections */}
            <div className='lg:col-span-2 sm:w-full w-9 sm:flex justify-between mt-6'>
                {/* Mapping over sections and rendering content */}
                {items.map((item, index) => (
                    item.type === 'section' ? (
                        <div key={index}>
                            <h6 className="font-medium text-gray-100 text-xl">{item.title}</h6>
                            <ul>
                                {/* Mapping over items in each section */}
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} className='py-2 text-sm'>{subItem}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
};

export default Footer;