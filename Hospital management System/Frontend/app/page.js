// "use client"
// import {useDispatch, useSelector} from 'react-redux'
// import {GetBlog} from '../lib/features/todos/StockSlice.js'
// import { useEffect } from 'react';
import Image from 'next/image';
import hero from '../public/Image/hero.jpg'
export default function Home() {
  // const dispatch = useDispatch();
  // const count = useSelector((state) => state.stock.stocks);

  return (
    <div>
      <div className='flex'>
            <div className='w-[86rem]'>
              <Image src={hero} alt="hero" width={1200} height={500}/>
            </div>
      </div>
    </div>
  );
}
