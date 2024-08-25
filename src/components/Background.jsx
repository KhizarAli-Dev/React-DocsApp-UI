import React from 'react'

function Background() {
    return (
        <>

            <div className='fixed w-full h-screen z-[2]'>
                <div className='absolute py-10 top-[5%] w-full flex justify-center text-zinc-600 text-xl font-semibold'>Documents</div>
                <h1 className='absolute top-1/2 left-1/2 text-[12vw] -translate-x-[50%] -translate-y-[50%] text-zinc-900 leading-none tracking-tighterfont-semibold'>docsApp.</h1>
            </div>
        </>
    )
}

export default Background