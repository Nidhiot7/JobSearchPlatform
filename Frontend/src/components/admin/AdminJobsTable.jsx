import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";

const AdminJobsTable = () => {
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredJobs = allAdminJobs && allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true;
            };

            return job.company?.name.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.title.toLowerCase().includes(searchJobByText.toLowerCase());

        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText]);

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent  posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterJobs && filterJobs?.map((job) => (
                            <motion.tr
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            exit={{ x: -100 }}
                            transition={{ duration: 0.5 }}
                            key={job?._id}>
                            <TableCell>{job?.company?.name}</TableCell>
                            <TableCell>{job?.title}</TableCell>
                            <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                            <TableCell className="float-right cursor-pointer">
                                <Popover>
                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                    <PopoverContent className="w-32">
                                        <div onClick={() => {
                                            navigate(`/admin/jobs/${job?._id}/edit`);
                                        }} className="flex w-fit items-center gap-2 cursor-pointer">
                                            <Edit2 className="w-4" />
                                            <span>Edit</span>
                                        </div>
                                        <div onClick={() => {
                                            navigate(`/admin/jobs/${job?._id}/applicants`);
                                        }} className="flex w-fit items-center gap-2 cursor-pointer mt-2">
                                            <Eye className="w-4" />
                                            <span>Applicants</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </motion.tr>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable