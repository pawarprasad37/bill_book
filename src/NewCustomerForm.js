import React from 'react'

class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setSelectedMenuItem = props.setSelectedMenuItem
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handlePhoneChange(event) {
    this.setState({
      phone: event.target.value,
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    })
  }

  handleSubmit(event) {
    const name = this.state.name
    const phone = this.state.phone
    const email = this.state.email
    if (name.length === 0) {
      alert('Enter a valid name.')
      event.preventDefault()
      return
    }
    if (phone.length !== 10) {
      alert('Enter 10 digit mobile number!')
      event.preventDefault()
      return
    }
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(email)) {
      alert('Enter a valid email id.')
      event.preventDefault()
      return
    }

    this.postData({
      name: this.state.name,
      contact: this.state.phone,
      email: this.state.email,
    }).then((response) => {
      if (response && response.id && response.id.length > 0) {
        alert('Customer added with id ' + response.id)
        this.setSelectedMenuItem('customersInfoPage')
      } else {
        alert('Failed to add customer')
      }
    })

    event.preventDefault()
  }

  async postData(data = {}) {
    const response = await fetch(
      'https://rzp-training.herokuapp.com/team2/customers',
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
      <div>
        <div style={{ display: 'inline-block', margin: '10px 5px 5px 10px' }}>
          <h3 style={{ margin: '0px' }}>New Customer</h3>
        </div>

        <form className="Form card" onSubmit={this.handleSubmit}>
          <div
            className="auto-horizontal-margin"
            style={{ display: 'inline-block', margin: '20px' }}
          >
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div
            className="auto-horizontal-margin"
            style={{
              display: 'inline-block',
              margin: '20px',
              verticalAlign: 'top',
            }}
          >
            <label>Phone</label>
            <input
              type="number"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
            <input
              className="button"
              type="submit"
              value="Submit"
              style={{ marginTop: '47px' }}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default NewCustomerForm
