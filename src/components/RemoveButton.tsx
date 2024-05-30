const RemoveButton = ({
  label,
  disabled,
  onClick,
}: {
  label: string
  disabled?: boolean
  onClick: () => void
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="text-xs p-2 rounded border border-red-600 bg-red-500 hover:bg-red-600 hover:bg-red-700 text-white disabled:bg-gray-300 disabled:border-gray-500 disabled:cursor-not-allowed">
      {label}
    </button>
  )
}

export default RemoveButton
