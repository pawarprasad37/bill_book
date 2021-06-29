import React from "react";
import ItemsPage from "./ItemsPage";
import ReactDOM from 'react-dom';

class NewItemForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            price:'',
            description:''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        this.setState({
            name: event.target.value
        });
    }

    handlePriceChange(event){
        this.setState({
            price: event.target.value
        });
    }

    handleDescriptionChange(event){
        this.setState({
            description: event.target.value
        });
    }

    handleSubmit(event){
        const name = this.state.name;
        const price = this.state.price;
        const description = this.state.description;
        if(name.length === 0){
            alert("Enter a valid name.");
            event.preventDefault();
            return;
        }
        if(price === 0){
            alert("Enter a valid price!");
            event.preventDefault();
            return;
        }
        if(description.length === 0){
            alert("Enter a valid description.");
            event.preventDefault();
            return;
        }
        
        this.postData({
            name: this.state.name,
            description: this.state.description,
            amount: this.state.price,
            currency: "INR"
        }).then(response => {
            if(response && response.id && response.id.length > 0){
                alert("Item added with id " + response.id);
                ReactDOM.render(
                    <ItemsPage/>,
                    document.getElementById("dynamic_page")
                );
            }else{
                alert("Failed to add customer");
            }
        });

        event.preventDefault();
    }

    async postData(data = {}){
        const response = await fetch("https://rzp-training.herokuapp.com/team2/items", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            redirect:'follow',
            referrerPolicy:'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </label>
                <label>
                    Price
                    <input type="number"  value={this.state.price} onChange={this.handlePriceChange}/>
                </label>
                <label>
                    Description
                    <input type="text" value={this.state.description} onChange={this.handleDescriptionChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NewItemForm;