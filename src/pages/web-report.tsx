import CountryDropDown from '@/components/CountryDropDown'
import CustomBarChart from '@/components/CustomBarChart'
import CustomLineChart from '@/components/CustomLineChart'
import React from 'react'

const WebReport = () => {
  return (
    <div className=' bg-[#f0f5f9] text-gray-600'>
        <div className='w-full bg-white py-2 px-5 text-[2rem] font-bold shadow-md'>Website Information</div>
        <div className='  mx-5 my-10 '>
            <p className='font-semibold text-[1.5rem] text-gray-600'>Website Traffic</p>
            <div className='bg-white shadow-md overflow-x-auto flex'>
                <div className='py-5'>
            <CustomLineChart/>
                </div>
                <div className='flex flex-col  w-full mx-5 '>
                    <p className='font-semibold text-2xl py-3'>Filters</p>
                    <p className='font-medium text-l text-gray-700 py-2'>Filter By Days</p>
                    <div className='flex gap-3 w-1/2'>
                        <p className='bg-[#f3f5f7] shadow rounded-sm px-3 font-medium cursor-pointer text-gray-500 py-2'>Monthly</p>
                        <p className='bg-[#f3f5f7] shadow rounded-sm px-3 font-medium cursor-pointer text-gray-500 py-2'>Weekly</p>
                        <p className='bg-[#f3f5f7] shadow rounded-sm px-3 font-medium cursor-pointer text-gray-500 py-2'>Daily</p>
                    </div>
                    <p className='font-medium text-l text-gray-700 py-2 pt-4'>Filter By Country</p>
                    <div className=' w-1/2'>
                    <CountryDropDown/>
                    </div>
                </div>
            </div>
        </div>

        <div className='  mx-5 my-10 '>
            <p className='font-semibold text-[1.5rem] text-gray-600'> Country rank</p>
            <div className='bg-white shadow-md overflow-x-auto flex'>
                <div className='py-5'>
                <CustomBarChart/>
                </div>
                <div className='flex flex-col  w-full mx-5 '>
                    <p className='font-semibold text-2xl py-3'>Filters</p>
                    <p className='font-medium text-l text-gray-700 py-2'>Filter By Days</p>
                    <div className='flex gap-3 w-1/2'>
                        <div>
                            <p>Start Date</p>
                            <input type='date' className='bg-[#f3f5f7] font-medium shadow px-2 py-2 outline-none rounded-md'/>
                        </div>
                        <div>
                            <p>End Date</p>
                            <input type='date' className='bg-[#f3f5f7] font-medium shadow px-2 py-2 outline-none rounded-md'/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WebReport
