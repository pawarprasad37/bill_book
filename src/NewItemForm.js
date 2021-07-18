import React from 'react'

class NewItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      description: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setSelectedMenuItem = props.setSelectedMenuItem
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value,
    })
  }

  handleSubmit(event) {
    const name = this.state.name
    const price = this.state.price
    const description = this.state.description
    if (name.length === 0) {
      alert('Enter a valid name.')
      event.preventDefault()
      return
    }
    if (price === 0) {
      alert('Enter a valid price!')
      event.preventDefault()
      return
    }
    if (description.length === 0) {
      alert('Enter a valid description.')
      event.preventDefault()
      return
    }

    this.postData({
      name: this.state.name,
      description: this.state.description,
      amount: this.state.price,
      currency: 'INR',
    }).then((response) => {
      if (response && response.id && response.id.length > 0) {
        alert('Item added with id ' + response.id)
        this.setSelectedMenuItem('items')
      } else {
        alert('Failed to add item')
      }
    })

    event.preventDefault()
  }

  async postData(data = {}) {
    const response = await fetch(
      'https://rzp-training.herokuapp.com/team2/items',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      },
    )
    return response.json()
  }

  render() {
    return (
      <form className="Form card" onSubmit={this.handleSubmit}>
        <div>
          <label className="auto-horizontal-margin">Name</label>
          <input
            className="auto-horizontal-margin"
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleChange('name', e)}
          />
          <label className="auto-horizontal-margin">Price</label>
          <input
            className="auto-horizontal-margin"
            type="number"
            value={this.state.price}
            onChange={(e) => this.handleChange('price', e)}
          />
          <label className="auto-horizontal-margin">Description</label>
          <textarea
            className="auto-horizontal-margin"
            type="text"
            value={this.state.description}
            onChange={(e) => this.handleChange('description', e)}
          />
          <input
            className="button auto-horizontal-margin"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    )
  }
}

export default NewItemForm
