import React from 'react'

// ---- interfaces ----------------------------------
import { MainContainerType } from '@/interfaces'

// ---- Image ---------------------------------------
import Image from 'next/image'

const MainContainer = ({ title, srcImage}: MainContainerType) => {
  return (
    <main className="main_div">
      <div className="flex justify-center items-center bg-slate-600 w-full">
        <h2 className="text-white text-6xl">{title}</h2>
      </div>
      <div className="flex justify-center bg-slate-300 w-full">
        <Image layout="responsive" src={srcImage} width={500} height={500} alt="Poza1" />
      </div>
    </main>
  )
}

export default MainContainer