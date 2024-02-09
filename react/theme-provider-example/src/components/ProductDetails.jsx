
import { useContext } from "react";
import { ThemeContext } from "../contenxt-api/ThemeContext";
import "../styles/style.css";

export default function ProductDetails() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="product-container">
            <h2> {darkMode ? 'Dark' : 'Light'} Theme</h2>
            <div>
                <img src="https://dummyimage.com/300/000/fff&text=Product+Image" alt="" />
            </div>
            <div className={`product-description ${darkMode ?  " product-dark" : " product-light"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis cumque aliquam iusto beatae, modi omnis obcaecati, rem tempore explicabo a laudantium vero numquam magnam sapiente autem? Eaque, sint nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis cumque aliquam iusto beatae, modi omnis obcaecati, rem tempore explicabo a laudantium vero numquam magnam sapiente autem? Eaque, sint nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis cumque aliquam iusto beatae, modi omnis obcaecati, rem tempore explicabo a laudantium vero numquam magnam sapiente autem? Eaque, sint nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis cumque aliquam iusto beatae, modi omnis obcaecati, rem tempore explicabo a laudantium vero numquam magnam sapiente autem? Eaque, sint nostrum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis cumque aliquam iusto beatae, modi omnis obcaecati, rem tempore explicabo a laudantium vero numquam magnam sapiente autem? Eaque, sint nostrum?
            </div>
        </div>
    )
}
