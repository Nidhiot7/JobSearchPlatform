import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, Menu, User2 } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import logo from "../assets/logo.png"
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from '../ui/menubar'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isToggled, setIsToggled] = useState([]);


    const logoutHandler = async () => {
        try {
            const res = await axios.get("https://jobsearchplatform.onrender.com/api/v1/user/logout", { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
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
        <div className='bg-gray-100 sticky z-50 top-0 left-0 right-0'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>

                <div className='flex w-9 text-[#2567BD] size-7'>
                    <img src={logo} alt="logo" />
                    <h1 className='text-base font-bold text-[#0CAFFF] font-medium'>ob<span className='text-[#2a2a2a] font-medium'>Portal</span></h1>
                </div>

                <div className=' flex items-center gap-6 '>
                    <ul className=' flex font-medium items-center gap-8'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/jobs">Jobs</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                </>
                            )
                        }


                    </ul>
                    {
                        !user ? (
                            <div>
                                <div className='hidden md:flex items-center gap-4'>
                                    <Link to="/login"><Button variant="outline" className="border-2 border-[#0CAFFF] text-[#0CAFFF] hover:text-none rounded-3xl">Login</Button></Link>
                                    <Link to="/signup"><Button className="bg-[#F83002] hover:bg-[#449DD1] rounded-3xl">Signup</Button></Link>
                                </div>
                                <div className='md:hidden lg:hidden'>
                                    <MobileNavbar />
                                </div>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className={location.pathname === '/profile' ? 'hidden' : ''}>
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" className="cursor-pointer" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-60">
                                    <div>
                                        <div className='flex gap-2 space-y-2'>
                                            {/* <Avatar className="cursor-pointer">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar> */}
                                            <div>
                                                <h4 className='font-medium'>{user?.fullname}</h4>
                                                {/* <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p> */}
                                                <div>
                                                    <p className={`${!isToggled.includes(user?.profile?.bio) && 'line-clamp-2 text-sm text-muted-foreground'}`}>
                                                        {user?.profile?.bio}
                                                    </p>
                                                    {user?.profile?.bio > 200 && (
                                                        <span className={'font-bold underline cursor-pointer text-blue-900'}
                                                            onClick={() => ToggleFullView(user?.profile?.bio)}
                                                        >
                                                            {/* {isToggled.includes(user?.profile?.bio) ? 'Read less' : 'Read more'} */}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                        <User2 />
                                                        <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                                    </div>
                                                )
                                            }

                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Navbar;

const MobileNavbar = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <Menu />
                </MenubarTrigger>
                <MenubarContent>
                    <div className='items-center gap-1 h-30 w-19 mr-px flex flex-col space-y-4 p-4 cursor-pointer font-medium'>
                        {/* <Link to="/jobs">Jobs</Link>
                        <Link to="/browse">Browse</Link> */}
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}