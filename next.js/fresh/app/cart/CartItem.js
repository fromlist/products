export default function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}