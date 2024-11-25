import FileSaver from 'file-saver'
import { Download } from 'lucide-react'
import React from 'react'

const CardImage = ({item}) => {
  return (
    <div className='mt-3'>
    <div className="container  ">
        
       
          
         

            
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img src={item?.photo} alt="Food" class="w-full h-48 object-cover"/>
                <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-xl font-bold text-white">{item?.prompt}</h4>
                        <h3>{item?.author}</h3>
                    </div>
                    <Download className='m-2' onClick={()=>FileSaver.saveAs(item?.photo,"download.jpg")}/>
                </div>
            </div>
 
      
    </div>
</div>
  )
}

export default CardImage