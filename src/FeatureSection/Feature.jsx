import { useContext } from "react";
import { AutoContext } from "../Authprovider/AuthContext";
import FeatureCard from "./FeatureCard";


const Feature = () => {
    const { feature, loading } = useContext(AutoContext)
    console.log(loading)
    return (
        <div className='mt-2 w-full h-full sm:mt-4 lg:mt-12' >
            <div className='flex justify-center items-center ' >
                <h3 className='text-[14px] sm:text-[22px]   lg:text-[40px]' >Featured Rooms</h3>
            </div>
            {
                loading ? <span className="loading loading-spinner flex justify-center loading-lg"></span> : <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  md:grid-cols-3" >
                    {
                        feature.map(data => <FeatureCard
                            key={data._id}
                            data={data}
                        ></FeatureCard>)
                    }
                </div>
            }
        </div>

    );
};

export default Feature;