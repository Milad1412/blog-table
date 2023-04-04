import { Fragment } from 'react'
import Skeleton from './Skeleton'

const SearchSkeleton = () => {
  return (
    <div className='h-[614px] lg:h-[328px] w-[375px] p-4 pb-0 bg-white overflow-hidden'>
      <div className='animate-pulse overflow-hidden'>
        <Skeleton width='100%' height='40px' rounded='8px' className='mb-4' />
        {Array(10)
          .fill(1)
          .map((_, index) => {
            return (
              <div key={index} className='flex items-center justify-end my-4 '>
                <Skeleton height='48px' width='48px' rounded='4px' />
                <div className='flex flex-col w-full mr-2'>
                  <Skeleton
                    height='12px'
                    width='100%'
                    rounded='4px'
                    className='mb-1.5'
                  />
                  <Skeleton height='12px' width='80%' rounded='4px' />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SearchSkeleton
