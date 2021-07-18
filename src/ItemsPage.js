import React from 'react'
import ItemsPageRowItem from './ItemsPageRowItem'

class ItemsPage extends React.Component {
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

  getLayout = () => (
    <div>
      <div id="title" style={{ display: 'block' }}>
        <div style={{ display: 'inline-block', margin: '10px 5px 5px 10px' }}>
          <h3 style={{ margin: '0px' }}>
            {this.props.setModalName ? 'Select an Item' : 'Items'}
          </h3>
        </div>
        <div
          style={{
            display: 'inline-block',
            float: 'right',
            margin: '10px 5px 5px 10px',
          }}
        >
          {this.props.setModalName ? null : (
            <button
              class="button"
              type="button"
              onClick={this.onAddItemClicked}
            >
              + Add Item
            </button>
          )}
        </div>
      </div>

      <table style={{ width: '100%' }}>
        <tr class="items_header_row">
          <th class="items_header_column" style={{ width: '15%' }}>
            NAME
          </th>
          <th class="items_header_column" style={{ width: '55%' }}>
            DESCRIPTION
          </th>
          <th class="items_header_column" style={{ width: '15%' }}>
            PRICE
          </th>
          <th class="items_header_column" style={{ width: '15%' }}>
            ADDED ON
          </th>
        </tr>

        {this.state.items.map((_item, _index) => (
          <ItemsPageRowItem
            item={_item}
            itemList={this.props.itemList}
            setModalName={this.props.setModalName}
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
  )

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

  onAddItemClicked = () => {
    this.setSelectedMenuItem('addItemForm')
  }

  async componentDidMount() {
    const response = await fetch(
      'https://rzp-training.herokuapp.com/team2/items',
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

export default ItemsPage
