import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdDownload } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"




function Card({ data, reference }) {
  return (
    <motion.div whileDrag={{ scale: 1.1 }}
      dragElastic={1} drag dragConstraints={reference} className='relative w-[17vw] h-[20vw] rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <LuFileSpreadsheet />

      <p className='tex-sm leading-tight font-semibold mt-5'>{data.desc}</p>
      <div className='footer absolute w-full bottom-0 left-0'>

        <div className='flex items-center justify-between mb-5 px-5 '>
          <h5>{data.filesize}</h5>

          <span className='w-7 h-7 bg-purple-900 flex items-center justify-center rounded-full'>
            {data.close ? <MdDownload /> : <IoIosCloseCircleOutline />}
          </span>

        </div>

        {data.tagdetails.isOpen && <div className={`w-full py-4 ${data.tagdetails.tagColor === "Green" ? "bg-green-400" : "bg-blue-400"} flex items-center justify-center`}>
          <h5 className='text-sm font-semibold'>{data.tagdetails.tagName}</h5>
        </div>}






      </div>
    </motion.div>


  )
}

export default Card