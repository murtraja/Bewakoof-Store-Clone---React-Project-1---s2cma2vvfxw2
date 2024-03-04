export default function ProductCard({ details }) {
  const { name, displayImage, price, ratings } = details;
  const roundedRatings = Math.round(ratings);
  return (
    <div className="productCardParent">
      <img height="100" width="100" src={displayImage} />
      <div className="productCardName">{name}</div>
      <div className="productCardPrice">
        <span style={{ color: "gray" }}>M.R.P:</span> <b>₹{price}</b>
      </div>
    </div>
  );
}
