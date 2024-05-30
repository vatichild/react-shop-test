import { ChangeEvent } from "react"

const CardNumberInput = ({
  defaultValue,
  onChange,
}: {
  defaultValue: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div>
        <label>Input Your Card Number</label>
        <input
          value={defaultValue}
          onChange={onChange}
          className={`w-full p-2 border rounded border-gray-400  ${
            defaultValue.length === 16 && "outline-green-500 border-green-500"
          }`}
          type="text"
        />
        <small>
          <i>16 digits card number</i>
        </small>
      </div>
    </div>
  )
}

export default CardNumberInput
