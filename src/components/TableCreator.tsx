import { FormEvent, useEffect, useState } from 'react'
import { TableCellsType } from './TableCells'

export type TableDataType = {
  col: number | undefined
  row: number | undefined
  value: string
  id: number
}

const TableCreator: React.FC<
  TableCellsType & { onTableSubmit: (value: TableDataType[]) => void }
> = ({ cols, rows, onTableSubmit }) => {
  let arr: number[][] = []

  if (cols && rows) {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        arr.push([i, j])
      }
    }
  }

  const initialTableData = Array.from(Array(arr.length).keys()).map((item) => ({
    value: '',
    col: undefined,
    row: undefined,
    id: item,
  }))

  const [colSet, setColSet] = useState<number | undefined>(undefined)
  const [rowSet, setRowSet] = useState<number | undefined>(undefined)
  const [tableData, setTableData] = useState<TableDataType[]>(initialTableData)

  useEffect(() => {
    setTableData(initialTableData)
    setColSet(Array.from(new Set(arr.map((item) => item[0]))).length)
    if (colSet) {
      setRowSet(arr.length / colSet)
    }
  }, [arr.length])

  const handleChange = (
    value: string,
    col: number,
    row: number,
    id: number
  ) => {
    const clone = [...tableData]
    const index = clone.findIndex((item) => item.id == id)
    const clonedObject = clone[index]
    clonedObject.col = col
    clonedObject.row = row
    clonedObject.value = value
    clone[index] = clonedObject
    setTableData(clone)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onTableSubmit(tableData)
    console.log(tableData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='gap-3 w-max'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${colSet}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rowSet}, minmax(0, 1fr))`,
      }}>
      {arr
        .sort((a, b) => a[1] - b[1])
        .map((item, index) => {
          return (
            <div
              key={index}
              className={`h-20 grid-cols-1 ${
                colSet && index < colSet ? 'bg-purple-500' : 'bg-gray-200'
              }`}>
              <input
                className={`h-full w-full p-3 grid-cols-1 ${
                  colSet && index < colSet
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200'
                }`}
                type='text'
                value={tableData[index] && tableData[index].value}
                onChange={(e) =>
                  handleChange(e.target.value, item[0], item[1], index)
                }
              />
            </div>
          )
        })}
      <button type='submit'>تایید فرم</button>
    </form>
  )
}

export default TableCreator
