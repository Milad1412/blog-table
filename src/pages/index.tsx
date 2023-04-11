import BlogTable from '@/components/BlogTable'
import TableCells, { TableCellsType } from '@/components/TableCells'
import TableCreator, { TableDataType } from '@/components/TableCreator'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [tableCells, setTableCells] = useState<TableCellsType>({
    rows: undefined,
    cols: undefined,
  })

  const [blogTableData, setBlogTableData] = useState<TableDataType[]>([])

  const handleSubmit = (data: TableCellsType) => {
    setTableCells(data)
  }

  const hanelTableSubmission = (data: TableDataType[]) => {
    setBlogTableData(data)
  }

  return (
    <div>
      <TableCells onFormSubmit={handleSubmit} />
      <TableCreator cols={tableCells.cols} rows={tableCells.rows} onTableSubmit={hanelTableSubmission} />
      <div className='pb-20' />
      <BlogTable tableData={blogTableData} />
    </div>
  )
}
