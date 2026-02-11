import { Table } from '@tanstack/react-table'

export function handleDeleteRows<TData>(table: Table<TData>) {
  // Get the selected rows
  const selectedRows = table.getSelectedRowModel().rows

  // Extract the IDs of the selected rows
  const selectedIds = selectedRows.map((row) => row.id)
  console.log('🚀 ~ selectedIds:', selectedIds)

  // Call the callback with the selected IDs

  // Reset the row selection
  table.resetRowSelection()
}
