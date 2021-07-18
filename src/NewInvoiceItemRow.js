import { useState, useEffect } from 'react'

const NewInvoiceItemRow = (props) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {}, [quantity])

  const onChange = (item, event) => {
    const qty = +event.target.value
    if (qty <= 0) {
      return
    }
    props.item.quantity = qty
    setQuantity(qty)
  }

  return (
    <tr class="item_info_row">
      <td class="item_info_column" style={{ width: '55%' }}>
        {props.item.name}
      </td>
      <td class="item_info_column" style={{ width: '15%' }}>
        <input
          value={props.item.quantity}
          type="number"
          onChange={(e) => onChange(props.item, e)}
        />
      </td>
      <td class="item_info_column" style={{ width: '15%' }}>
        {props.item.amount}
      </td>
      <td class="item_info_column" style={{ width: '15%' }}>
        {+props.item.amount * props.item.quantity}
      </td>
      <td className="item_info_column">
        <button className="button" onClick={() => props.onDelete()}>
          X
        </button>
      </td>
    </tr>
  )
}

export default NewInvoiceItemRow
