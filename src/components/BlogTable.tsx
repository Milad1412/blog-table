import { TableDataType } from './TableCreator'

type BlogTableProps = {
  tableData: TableDataType[]
}

const BlogTable: React.FC<BlogTableProps> = ({ tableData }) => {
  const cols = Array.from(new Set(tableData.map((item) => item.col))).length
  const rows = Array.from(new Set(tableData.map((item) => item.row))).length

  return (
    <div
      className='w-1/2'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}>
      {tableData.map((item) => {
        return (
          <div
            className={`flex items-center justify-center grid-cols-1 py-2.5 px-6 ${
              cols && item.id < cols
                ? 'bg-purple-500 text-white text-md16'
                : item.row && item.row % 2 === 0
                ? 'bg-gray-200 text-gray-800 text-sm14'
                : 'bg-white'
            }`}
            key={item.id}>
            {item.value}
          </div>
        )
      })}
    </div>
  )
}

export default BlogTable
