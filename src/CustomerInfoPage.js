import React from 'react'
import CustomerInfoItem from './CustomerInfoItem'

class CustomerInfoPage extends React.Component {
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

  getLayout = () => {
    return (
      <div>
        <div id="title" style={{ display: 'block' }}>
          <div style={{ display: 'inline-block', margin: '10px 5px 5px 10px' }}>
            <h3 style={{ margin: '0px' }}>
              {this.props.setCustomer ? 'Select a customer' : 'Customers'}
            </h3>
          </div>
          <div
            style={{
              display: 'inline-block',
              float: 'right',
              margin: '10px 5px 5px 10px',
            }}
          >
            {this.props.setCustomer ? null : (
              <button
                class="button"
                type="button"
                onClick={this.onNewCustomerClicked}
              >
                + New Customer
              </button>
            )}
          </div>
        </div>

        <div>
          <table style={{ width: '100%' }}>
            <tr class="customer_info_header_row">
              <th class="customer_info_header_column" style={{ width: '25%' }}>
                NAME
              </th>
              <th class="customer_info_header_column" style={{ width: '25%' }}>
                PHONE
              </th>
              <th class="customer_info_header_column" style={{ width: '25%' }}>
                EMAIL
              </th>
              <th class="customer_info_header_column" style={{ width: '25%' }}>
                CREATED ON
              </th>
            </tr>

            {this.state.items.map((_item, _index) => (
              <CustomerInfoItem
                setCustomer={this.props.setCustomer}
                customer={_item}
              />
            ))}
          </table>

          {this.props.setModalName ? (
            <button
              className="button auto-horizontal-margin"
              type="button"
              onClick={() => this.props.setModalName(null)}
            >
              CANCEL
            </button>
          ) : null}
        </div>
      </div>
    )
  }

  getLoader = () => {
    return (
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
  }

  async componentDidMount() {
    const response = await fetch(
      'https://rzp-training.herokuapp.com/team2/customers',
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

  onNewCustomerClicked = () => {
    this.setSelectedMenuItem('newCustomerForm')
  }
}

export default CustomerInfoPage
