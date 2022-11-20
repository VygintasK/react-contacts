import './ShopItem.css';

// const ShopItem = (props) => {
//   let { title, phone, email, address, mapUrl } = props;
//   const emailHref = 'mailto:' + email;

//   return (
//     <div className="shop">
//       <h3 className="shop-title">{title}</h3>
//       <ul className="shop-address-list">
//         <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>
//         <li>Email: <a href={emailHref}>{email}</a></li>
//         <li>Address: <a href={mapUrl} target="_blank" rel="noreferrer">{address}</a></li>
//       </ul>
//     </div>
//   );
// }

const ShopItem = ({ title, phone, email, address, mapUrl }) => {
  const emailHref = 'mailto:' + email;
  const phoneLiElement = phone && <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>;
  const emailLiElement = email && <li>Email: <a href={emailHref}>{email}</a></li>;

  return (
    <div className="shop">
      <h3 className="shop-title">{title}</h3>
      <ul className="shop-address-list">
        {phoneLiElement}
        {emailLiElement}
        <li>Address: <a href={mapUrl} target="_blank" rel="noreferrer">{address}</a></li>
      </ul>
    </div>
  );
}

export default ShopItem;