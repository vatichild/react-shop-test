import { ChangeEvent } from "react"

const Quantity = ({
  selected,
  onChange,
}: {
  selected: number
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}) => {
  return (
    <select
      name="choice"
      onChange={onChange}
      defaultValue={selected}>
      {Array(selected > 100 ? selected : 100)
        .fill(0)
        .map((_, i) => {
          const value = i + 1
          return (
            <option
              value={value}
              key={i}>
              {value}
            </option>
          )
        })}
    </select>
  )
}

export default Quantity
