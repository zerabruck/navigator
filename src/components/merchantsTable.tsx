import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/router';

const MerchantsTable :React.FC  = () => {
  const router = useRouter()
  const handleUserClick = () =>{
    // router.push(path)
  }
  return (
    // Merchant Id|Organization|WWW|Category|Status|Commission
    //  Text|Sale Comm|Lead Comm|Hit Comm|Cookie Length|Auto Approve|Auto Deposit|
    //  Datafeed Items|Epc 7 Day|EPC 30 Day|Reversal Rate 7 Day|Reversal Rate 30 Day|
    //  Ave Sale 7 Day|Ave Sale 30 Day|Ave Comm 7 Day|Ave Comm 30 Day|Powerrank Top 100
    <div className=" border w-full rounded-md ">
    <table className='w-full'>
      <thead className=''>
        <tr className="">
          <th className=" p-2">Merchant Id</th>
          <th className=" p-2">Organization</th>
          <th className=" p-2">WWW</th>
          <th className=" p-2">Category</th>
          <th className=" p-2">Status</th>
          <th className=" p-2">Ave Sale 7 Day</th>
          <th className=" p-2">Ave Sale 30 Day</th>
          <th className=" p-2">Powerrank Top 100</th>
        </tr>
      </thead>
      <tbody>
        <tr className="cursor-pointer">
          <td className="border-t text-center border-b p-2 ">1</td>
          <td  onClick={handleUserClick} className="border-t text-center border-b p-2  flex items-center gap-3">
            
            Joseph Martinez
            </td>
          <td className="border-t text-center border-b p-2 ">23 Jan 2023</td>
          <td className="border-t text-center border-b p-2 ">+1 (555) 765-4321</td>
          <td className="border-t text-center border-b p-2 ">24</td>
          <td className="border-t text-center border-b p-2 ">4.5</td>
          <td className="border-t text-center border-b p-2 ">
            <button>button</button>
          </td>
          <td className="border-t text-center border-b p-2 ">
          <div className='flex gap-2 justify-center'>
                feild
                </div>
          </td>
        </tr>
        <tr>
          <td className="border-t text-center border-b p-2 ">2</td>
          <td className="border-t text-center border-b p-2  flex items-center gap-3">
            
            Sophia Hernandez
            </td>
          <td className="border-t text-center border-b p-2 ">23 Jan 2023</td>
          <td className="border-t text-center border-b p-2 ">+1 (555) 765-4321</td>
          <td className="border-t text-center border-b p-2 ">24</td>
          <td className="border-t text-center border-b p-2 ">4.5</td>
          <td className="border-t text-center border-b p-2 ">
            <button>button</button>
          </td>
          <td className="border-t text-center border-b p-2 ">
          <div className='flex gap-2 justify-center'>
                feild
                </div>
          </td>
        </tr>
        <tr>
          <td className="border-t text-center border-b p-2 ">3</td>
          <td className="border-t text-center border-b p-2  flex items-center gap-3">
            
            Michael Jones
            </td>
          <td className="border-t text-center border-b p-2 ">23 Jan 2023</td>
          <td className="border-t text-center border-b p-2 ">+1 (555) 765-4321</td>
          <td className="border-t text-center border-b p-2 ">24</td>
          <td className="border-t text-center border-b p-2 ">4.5</td>
          <td className="border-t text-center border-b p-2 ">
            <button>button</button>
          </td>
          <td className="border-t text-center border-b p-2 ">
          <div className='flex gap-2 justify-center'>
                feild
                </div>
          </td>
        </tr>
      </tbody>
    </table>
   
    </div>
  );
}

export default MerchantsTable