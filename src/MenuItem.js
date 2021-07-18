const MenuItem = ({ label, isSelected, iconPath, onClick }) => {
  iconPath = iconPath
    ? iconPath
    : process.env.PUBLIC_URL + '/assets/icons/warning.png'
  return (
    <div
      class={isSelected ? 'menu_item_selected' : 'menu_item'}
      onClick={onClick}
    >
      <img class="menu_item_icon" src={iconPath} alt={label + ' icon'} />
      <h2 class="menu_item_title"> {label} </h2>
    </div>
  )
}

export default MenuItem
