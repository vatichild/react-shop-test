import { ChangeEvent } from "react"

const CardNumberInput = ({
  defaultValue,
  onChange,
}: {
  defaultValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <label>Input Your Card Number</label>
      <input
        value={defaultValue}
        onChange={onChange}
        className="w-1/4 p-2 border rounded border-gray-400 ml-4"
        type="text"
      />
    </div>
  )
}

export default CardNumberInput
