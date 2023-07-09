import { pizzaData } from "./data";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          //passing the whole object here
          <li>
            <Pizza pizzaObject={pizza} key={pizza.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pizza = (props) => {
  return (
    <div className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>INR {props.pizzaObject.price * 10}</span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <button className="btn">Order</button>
      </footer>
    </div>
  );
};
