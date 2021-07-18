import React from 'react'
import InvoicesRowItem from './InvoicesRowItem'

class InvoicesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
    this.setSelectedMenuItem = props.setSelectedMenuItem
  }

  render() {
    const hasData = this.state.items && this.state.items.length > 0

    return <div>{hasData ? this.getLayout() : this.getLoader()}</div>
  }

  getLoader = () => (
    <div
      id="loader"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src="https://i.gifer.com/YCZH.gif" alt="loader" />
    </div>
  )

  getLayout = () => (
    <div>
      <div id="title" style={{ display: 'block' }}>
        <div style={{ display: 'inline-block', margin: '10px 5px 5px 10px' }}>
          <h3 style={{ margin: '0px' }}>Invoices</h3>
        </div>
        <div
          style={{
            display: 'inline-block',
            float: 'right',
            margin: '10px 5px 5px 10px',
          }}
        >
          <button
            class="button"
            type="button"
            onClick={() => this.setSelectedMenuItem('newInvoicePage')}
          >
            + New Invoice
          </button>
        </div>
      </div>

      <table style={{ width: '100%' }}>
        <tr class="invoices_header_row">
          <th class="invoices_header_column" style={{ width: '16.66%' }}>
            DATE
          </th>
          <th class="invoices_header_column" style={{ width: '16.66%' }}>
            CUSTOMER
          </th>
          <th class="invoices_header_column" style={{ width: '16.66%' }}>
            NUMBER
          </th>
          <th class="invoices_header_column" style={{ width: '16.66%' }}>
            PAID STATUS
          </th>
          <th class="invoices_header_column" style={{ width: '16.66%' }}>
            AMOUNT
          </th>
          <th class="invoices_header_column" style={{ width: '16.66%' }}>
            AMOUNT DUE
          </th>
        </tr>

        {this.state.items.map((_item, _index) => (
          <InvoicesRowItem
            date={_item.date}
            customer={_item.customer_details.customer_name}
            number={_item.id}
            paid_status={_item.status}
            amount={_item.currency + ' ' + _item.amount}
            amount_due={_item.currency + ' ' + _item.amount_due}
          />
        ))}
      </table>
    </div>
  )

  async componentDidMount() {
    const response = await fetch(
      'https://rzp-training.herokuapp.com/team2/invoices',
    )
    const data = await response.json()
    if (
      data === null ||
      data === undefined ||
      data.items === null ||
      data.items === undefined
    ) {
      return
    }
    this.setState({
      items: data.items,
    })
  }
}

export default InvoicesPage
