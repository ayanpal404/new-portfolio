import React from 'react'
import { useData } from "@/context/DataContext";

function Contuct() {
  const { info } = useData();

  return (
    <div className="max-w-2xl px-7 sm:px-6 pb-4 pt-24 flex flex-col items-start justify-start">
        <h1 className='text-2xl sm:text-5xl font-bold text-center w-full'>Get in Touch</h1>
        <p className="max-w-lg text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2 font-semibold text-center">
          Got something to ask? Drop me a direct <a className="text-blue-500 hover:underline" href={info?.xId}>message on X</a> with a clear question, and I&#39;ll get back to you when I can. Solicitation messages will be ignored.
        </p>
    </div>
  )
}

export default Contuct