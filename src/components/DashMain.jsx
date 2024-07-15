import React from 'react'
import DashCard from '../components/DashCard'
import DashChartCard from '../components/DashChartCard'
import DashChartLine from '../components/DashChartLine'
import DashChartBar from '../components/DashChartBar'
import DashSearch from '../components/DashSearch'

const DashMain = () => {
  return (
    <>
        <div className='m-2 w-full'>
        <DashSearch/>
    </div>

    <div className='m-2  flex flex-row justify-center flex-nowrap space-x-4 '>
          <DashCard/>
          <DashCard/>
          <DashCard/>

    </div>
    <div className='m-2  p-6  rounded-2xl '>
        <DashChartCard/>
    </div>

    <div className='flex justify-center items-center m-2  rounded-2xl p-4 '>
        <DashChartLine/>
        <DashChartBar/>

    </div>
    </>
  )
}

export default DashMain