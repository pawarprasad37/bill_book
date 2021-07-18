import React from 'react'

class CustomerInfoItem extends React.Component {
  render() {
    const { name, contact, email, created_at } = this.props.customer

    const onTableRowClicked = () => {
      this.props.setCustomer(this.props.customer)
    }

    return (
      <tr
        class={
          this.props.setCustomer
            ? 'customer_info_item_row_clickable'
            : 'customer_info_item_row'
        }
        onClick={this.props.setCustomer ? onTableRowClicked : null}
      >
        <td class="customer_info_item_column" style={{ width: '25%' }}>
          {name}
        </td>
        <td class="customer_info_item_column" style={{ width: '25%' }}>
          {contact}
        </td>
        <td class="customer_info_item_column" style={{ width: '25%' }}>
          {email}
        </td>
        <td class="customer_info_item_column" style={{ width: '25%' }}>
          {created_at}
        </td>
      </tr>
    )
  }
}

export default CustomerInfoItem
