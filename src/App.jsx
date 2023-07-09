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
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        over stone ove, all organic, all delicious
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          //passing the whole object here
          <li key={pizza.name}>
            <Pizza pizzaObject={pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pizza = ({ pizzaObject }) => {
  return (
    // here we conditionally set the class based on the property of the pizzaObject soldOut property
    <div className={pizzaObject.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>INR {pizzaObject.price * 10}</span>
        )}
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
