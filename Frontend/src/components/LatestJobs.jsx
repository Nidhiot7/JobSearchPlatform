import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='lg:text-4xl font-bold md:text'><span className='text-[#0CAFFF]'>Latest & Top </span> Job Openings</h1>
            <div className='grid lg:grid-cols-3 gap-4 my-5 md:grid-cols-none'>
                {
                    allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)

                }
            </div>

        </div>
    )
}

export default LatestJobs