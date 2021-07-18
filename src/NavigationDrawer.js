import MenuItem from './MenuItem'

const NavigationDrawer = ({ selectedMenuItem, setSelectedMenuItem }) => {
  const iconFolder = process.env.PUBLIC_URL + '/assets/icons/'

  return (
    <div id="nav_column">
      <MenuItem
        label="Customers"
        isSelected={selectedMenuItem === 'customers'}
        onClick={() => setSelectedMenuItem('customers')}
        iconPath={iconFolder + 'user.png'}
      />
      <MenuItem
        label="Items"
        isSelected={selectedMenuItem === 'items'}
        onClick={() => setSelectedMenuItem('items')}
        iconPath={iconFolder + 'star.png'}
      />
      <MenuItem
        label="Invoices"
        isSelected={selectedMenuItem === 'invoices'}
        onClick={() => setSelectedMenuItem('invoices')}
        iconPath={iconFolder + 'invoice.png'}
      />
    </div>
  )
}

export default NavigationDrawer
