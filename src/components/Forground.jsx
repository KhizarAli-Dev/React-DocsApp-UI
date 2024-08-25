import React, { useRef } from 'react'
import Card from './Card'
import { data } from 'autoprefixer';

function Forground() {

  const ref = useRef(null)

  const data = [
    {
      desc: "This is the First Card",
      filesize: "10mb",
      close: false,
      tagdetails: {
        isOpen: true,
        tagName: "Download Now",
        tagColor: "Green",
      },
    },
    {
      desc: "This is the 2nd Card",
      filesize: "10mb",
      close: false,
      tagdetails: {
        isOpen: true,
        tagName: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "This is the 3rd Card",
      filesize: "10mb",
      close: false,
      tagdetails: {
        isOpen: true,
        tagName: "Download Now",
        tagColor: "Green",
      },
    },
    

  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5 flex flexwrap gap-5'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
  

      ))}

    </div>
  )
}

export default Forground