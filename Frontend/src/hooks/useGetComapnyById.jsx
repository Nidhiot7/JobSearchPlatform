import { setSingleCompany } from '@/redux/companySlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`https://jobsearchplatform.onrender.com/api/v1/company/getcompany/${id}`);
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log("Error occured while fetching company details",error);
            }
        }
        fetchSingleCompany();
    }, [id, dispatch])
}

export default useGetCompanyById