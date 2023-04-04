import SearchSkeleton from '@/components/SearchSkeleton'
import Skeleton from '@/components/Skeleton'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div>
    <SearchSkeleton />
  </div>
}
