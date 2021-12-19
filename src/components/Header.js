// import PropTypes from 'prop-types'
// import Button from "./Button"

// const Header = ({title}) => {

//     const onClick=()=>{
//         console.log("click")
//     }
//     return (
//         <header className="header">
//             <h1>{title}</h1>
//             <Button color="green" text="Add" onClick ={onClick} />
//         </header>
//     )
// }


// Header.defaultProps={
//     title:"Task Tracker"
// }

// Header.propTypes={
//     title:PropTypes.string.isRequired
// }

// export default Header
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd,showAdd}) => {
   
    return (
        <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? "orange" : "green"} text={showAdd ?"closeit" : "Add"} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps={
    title:"Task Tracker",
}

Header.propTypes={
    title:PropTypes.string.isRequired,
}

export default Header



