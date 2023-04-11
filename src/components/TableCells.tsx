import React, { FormEvent, useState } from 'react'

export type TableCellsType = {
  rows: number | undefined
  cols: number | undefined
}

type TableCellsProps = {
  onFormSubmit: (data: TableCellsType) => void
}

const TableCells: React.FC<TableCellsProps> = ({ onFormSubmit }) => {
  const [tableCells, setTableCells] = useState<TableCellsType>({
    rows: undefined,
    cols: undefined,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onFormSubmit(tableCells)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* rows */}
      <div className='flex'>
        <label htmlFor='rows'>تعداد سطر:</label>
        <input
          pattern='[0-9]+'
          className='border border-black'
          name='rows'
          type='text'
          id='rows'
          value={tableCells.rows}
          onChange={(e) =>
            setTableCells({ ...tableCells, [e.target.name]: e.target.value })
          }
        />
      </div>

      {/* cols */}
      <div className='flex'>
        <label htmlFor='cols'>تعداد ستون:</label>
        <input
          pattern='[0-9]+'
          className='border border-black'
          name='cols'
          type='text'
          id='cols'
          value={tableCells.cols}
          onChange={(e) =>
            setTableCells({ ...tableCells, [e.target.name]: e.target.value })
          }
        />
      </div>

      <button
        className='bg-green-500 py-2 px-5 rounded-md text-gray-800'
        type='submit'>
        تایید
      </button>
    </form>
  )
}

export default TableCells
