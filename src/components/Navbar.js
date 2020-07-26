import React from 'react';
import PropTypes from 'prop-types';

// Eğer değişiklik olmayacaksa function kullanmak daha iyi.
function Navbar(props){
    return (
        <div>
            <h3>{props.title}</h3> 
            <h3>{props.deger}</h3>           
        </div>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Default App'
}

/*
with arrow function

const Navbar = () => {
    return(
        <div>
            <h3>User App</h3>
        </div>
    );
}
*/
/*
    Prob lar ile bir componentden bir diğer componente veri aktara biliriz
*/
export default Navbar;