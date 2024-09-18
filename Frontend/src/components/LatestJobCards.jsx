import React, { useState } from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    const [isToggled, setIsToggled] = useState([]);

    const ToggleFullView = (id) => {
        setIsToggled((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <div>
                    {/* <p className='text-sm text-gray-600'>{job?.description}</p> */}

                    {/* When the paragraph are long then the feature is create read less and more  */}
                    <p className={`${!isToggled.includes(job?.description) && 'line-clamp-2 text-sm text-gray-600'}`}>
                        {job?.description}
                    </p>
                    {job?.description.length > 200 && (
                        <span className={'font-bold underline cursor-pointer text-blue-900'}
                            onClick={() => ToggleFullView(job?.description)}
                        >
                            {isToggled.includes(job?.description) ? 'Read less' : 'Read more'}
                        </span>
                    )}
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#436436] font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards