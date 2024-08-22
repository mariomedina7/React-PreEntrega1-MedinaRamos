const ItemList = ({ text }) => {
    return (
        <>  
            <li className="navbar__item">
                <a href="#" className="navbar__link montserrat-custom">{text}</a>
            </li>
        </>
    )
}

export default ItemList