import Modal from './Modal'
import { useState, useEffect } from 'react'
import CustomerInfoPage from './CustomerInfoPage'
import DatePicker from 'react-datepicker'
import ItemsPage from './ItemsPage'

import 'react-datepicker/dist/react-datepicker.css'
import NewInvoiceItemRow from './NewInvoiceItemRow'

const NewInvoicePage = () => {
  const [modalName, setModalName] = useState(null)
  const [customer, setCustomer] = useState(null)
  const [issuedAtDate, setIssuedAtDate] = useState(new Date())
  const [dueDate, setDueDate] = useState(null)
  const [invoiceNumber, setInvoiceNumber] = useState(null)
  const [refNumber, setRefNumber] = useState(null)
  const [itemList] = useState([])
  const [note, setNote] = useState(null)
  const [forcedUpdateCount, setForcedUpdateCount] = useState(0)

  useEffect(() => {}, [modalName, itemList, forcedUpdateCount])

  useEffect(() => {
    setModalName(null)
  }, [customer])

  const saveInvoice = () => {
    alert('TODO')
  }

  const onInputChanged = (fieldId, event) => {
    if (fieldId === 'invoice_number') {
      setInvoiceNumber(event.target.value)
    } else if (fieldId === 'ref_number') {
      setRefNumber(event.target.value)
    }
  }

  const onDelete = (index) => {
    itemList.splice(index, 1)
    setForcedUpdateCount(forcedUpdateCount + 1)
  }

  const onAddItemClicked = () => {
    setModalName('add_item')
  }

  return (
    <div>
      <div id="title" style={{ display: 'block' }}>
        <h3
          style={{
            display: 'inline-block',
            margin: '10px 5px 5px 10px',
          }}
        >
          New invoice
        </h3>

        <button
          class="button"
          type="button"
          style={{
            display: 'inline-block',
            float: 'right',
            margin: '10px 5px 5px 10px',
          }}
          onClick={saveInvoice}
        >
          Save Invoice
        </button>
      </div>

      <div style={{ marginTop: '40px' }}>
        <div
          className="card"
          style={{
            width: '30%',
            margin: '0px 40px 0 40px',
            display: 'inline-block',
          }}
        >
          <h3 className="trimmed">Bill to</h3>
          {customer ? (
            <div>
              <div style={{ display: 'inline-block' }}>
                <label className="block_label">{customer.name}</label>
                <label className="block_label">{customer.contact}</label>
                <label className="block_label">{customer.email}</label>
              </div>
              <button
                className="button"
                style={{ float: 'right' }}
                onClick={() => setModalName('select_customer')}
              >
                Change
              </button>
            </div>
          ) : (
            <button
              className="button"
              onClick={() => setModalName('select_customer')}
            >
              Select Customer
            </button>
          )}
        </div>

        <div
          style={{
            display: 'inline-block',
            verticalAlign: 'top',
            width: '30%',
          }}
        >
          <div>
            <h3 className="trimmed">Issued at</h3>
            <DatePicker
              className="DatePicker"
              selected={issuedAtDate}
              onChange={(date) => setIssuedAtDate(date)}
            />
          </div>

          <div>
            <h3 className="trimmed">Invoice Number</h3>
            <input
              className="DatePicker"
              onChange={(e) => onInputChanged(e, 'invoice_number')}
            />
          </div>
        </div>

        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
          <div>
            <h3 className="trimmed">Due Date</h3>
            <DatePicker
              className="DatePicker"
              selected={issuedAtDate}
              onChange={(date) => setDueDate(date)}
            />
          </div>

          <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
            <h3 className="trimmed">Ref Number</h3>
            <input
              className="DatePicker"
              onChange={(e) => onInputChanged(e, 'ref_number')}
            />
          </div>
        </div>

        {/* Table to display list of items in invoice */}
        <table style={{ width: '100%' }}>
          <tr class="items_header_row">
            <th class="items_header_column" style={{ width: '25%' }}>
              Items
            </th>
            <th class="items_header_column" style={{ width: '25%' }}>
              Quantity
            </th>
            <th class="items_header_column" style={{ width: '25%' }}>
              Price
            </th>
            <th class="items_header_column" style={{ width: '25%' }}>
              Amount
            </th>
          </tr>

          {itemList
            ? itemList.map((_item, _index) => (
                <NewInvoiceItemRow
                  key={_item.id}
                  item={_item}
                  onDelete={() => onDelete(_index)}
                />
              ))
            : null}
        </table>

        <button
          className="button auto-horizontal-margin "
          onClick={() => onAddItemClicked()}
        >
          Add an Item
        </button>
      </div>

      {modalName ? (
        <Modal>
          <div className="Modal__Wrapper">
            <div className="Modal__Content">
              {modalName === 'select_customer' ? (
                <CustomerInfoPage
                  setModalName={setModalName}
                  setCustomer={setCustomer}
                />
              ) : (
                <ItemsPage setModalName={setModalName} itemList={itemList} />
              )}
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default NewInvoicePage
