import React from 'react'

class ItemsPageRowItem extends React.Component {
  render() {
    return (
      <tr
        class="item_info_row"
        onClick={() => {
          this.props.item.quantity = 1
          this.props.itemList.push(this.props.item)
          this.props.setModalName(null)
        }}
      >
        <td class="item_info_column" style={{ width: '15%' }}>
          {this.props.item.name}
        </td>
        <td class="item_info_column" style={{ width: '55%' }}>
          {this.props.item.description}
        </td>
        <td class="item_info_column" style={{ width: '15%' }}>
          {this.props.item.amount}
        </td>
        <td class="item_info_column" style={{ width: '15%' }}>
          {this.props.created_at}
        </td>
      </tr>
    )
  }
}

export default ItemsPageRowItem
