import { Compass, Plus } from 'lucide-react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const llocation = useLocation();
    const path = location.pathname.split("/");
    return (
        <div className='w-full h-[4rem] flex items-center justify-between pl-16 pr-16 '>
            <div className='text-3xl font-mono'>Textura</div>
            {
                path[1] === 'post' ? <button className='bg-purple-700 h-9 pl-4 pr-4 rounded-lg  flex items-center  border-white border shadow-xl ' onClick={() => navigate('/')} ><Compass size={"1.1rem"} color='white' /><span className='ml-2'>Explore posts</span></button> :
                    <button className='bg-blue-600 h-9 pl-4 pr-4 rounded-lg  flex items-center  border-white border shadow-xl ' onClick={() => navigate('/post')} ><Plus size={"1.1rem"} color='white' /><span className='ml-2'>Create new post</span></button>
            }
        </div>

    )
}

export default Navbar