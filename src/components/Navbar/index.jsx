import logo from "../../../public/eckbd-logo.png"
import CartWidget from "../CartWidget"
import ItemList from "../ItemListContainer"

const Navbar = () => {

    return (
        <header className="header">
                <nav className="navbar container">
                    <figure className="navbar__logo">
                        <img src={logo} alt="" />
                    </figure>
                    <menu className="navbar__menu">
                        <ItemList text={"Categorias"}/>
                        <ItemList text={"Nosotros"}/>
                        <ItemList text={"Contacto"}/>
                        <li>
                            <a href="#" className="navbar__link">
                                <CartWidget/>
                            </a>
                        </li>
                    </menu>
                </nav>
        </header>
    )
}

export default Navbar