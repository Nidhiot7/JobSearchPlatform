import React, { useState } from 'react'
import { Button } from './ui/button';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarImage } from './ui/avatar';
import { Bookmark } from 'lucide-react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";
    const [isToggled, setIsToggled] = useState([]);

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

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
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                {/* <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button> */}
                <div className='h-10'>
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </div>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
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
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
                <Button className="bg-[#0CAFFF]">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job