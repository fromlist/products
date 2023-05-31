import CartItem from "./CartItem";
import { age } from "./data";

export default function Cart() {
  let cartList = ["Tomato", "Pasta"];
  return (
    <div>
      <h4 className="title">{age}</h4>
      {cartList.map((list, key) => {
        return (
          <div key={key}>
            <CartItem name={list} />
            <Banner cardName={list} color="blue" />
          </div>
        );
      })}
    </div>
  );
}

function Banner(props) {
	return <h5 style={{backgroundColor: props.color}}>{props.cardName} 결제 행사중</h5>;
  }
