import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* arrow function otomatik bind yapar. */
class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isVisible : false
        }
    }

    // arrow function olmadan bind etme
    onClickEvent(e){
        this.setState({
            isVisible : !this.state.isVisible
        })          
    }
    // arrow function kendi içinde bind yapar
    onClickP = (e) => {
        console.log(this.props.salary);
        
    }
    // arrow function ile parametre alma 
    onClickDepartment = (dep,e) => {
        console.log(dep);
    }

    render() {
        
        //destructuring
        const {name,salary,department} = this.props;
        const {isVisible} = this.state;
        return (
            <div className = "col-md-8 mb-4">
                <div className = "card">
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline" onClick = {this.onClickEvent.bind(this)}>{name}</h4>
                        <i className ="far fa-trash-alt" style = {{cursor : "pointer"}}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                        <p className="card-text" onClick = {this.onClickP}>Salary : {salary}</p>
                        <p className="card-text" onClick = {this.onClickDepartment.bind(this,"software parametere")}>Department : {department}</p>                                               
                    </div> : null
                    }
                    
                </div>
                
            </div>
        );
    }
}

User.defaultProps = {
     name : "username",
     salary : "----",
     department : "null"
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

export default User;