import { Donut, Heading } from 'lucide-react'
import React from 'react'
import CardImage from './CardImage'

const Home = () => {
    const item={
        photo:"https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
        author:"samarth",
        prompt:"food",
    }
  return (
    <div className='flex justify-center'>
    <div className='h-screen w-[80%] pt-2 flex items-center flex-col'>
        <div className='text-4xl font-mono'>Discover Popular Creations from Our Community!</div>
        <div className='flex text-blue-600 text-2xl items-center gap-2 mt-2'> <Donut size={"3rem"}/> Explore Art Powered by Your Imagination</div>
        
        <div className="relative w-[30%] mt-2">
  <input
    className="bg-transparent appearance-none border-2 pl-10 border-gray-300  transition-colors rounded-2xl w-full py-2 px-3  text-white leading-tight focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:shadow-outline"
    id="username"
    type="text"
    placeholder="Search..."
  />
  {/* <div className="absolute right-0 inset-y-0 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </div> */}

  <div className="absolute left-0 inset-y-0 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>
        
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3">

<CardImage item={item}/>
<CardImage item={item}/>
<CardImage item={item}/>
<CardImage item={item}/>
<CardImage item={item}/>
<CardImage item={item}/>

</div>

    </div>
    </div>
  )
}

export default Home