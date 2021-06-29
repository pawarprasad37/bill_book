import React from 'react';

class CustomerInfoItem extends React.Component{
    render(){
        return (
            <tr class="customer_info_item_row">
                <td class="customer_info_item_column" style={{width:'25%'}}>{this.props.name}</td>
                <td class="customer_info_item_column" style={{width:'25%'}}>{this.props.phone}</td>
                <td class="customer_info_item_column" style={{width:'25%'}}>{this.props.email}</td>
                <td class="customer_info_item_column" style={{width:'25%'}}>{this.props.created_on}</td>
            </tr>
        );
    }
}

export default CustomerInfoItem;