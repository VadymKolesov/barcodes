import Barcode from "react-barcode";
import css from "./BarcodeList.module.css";

export default function BarcodeList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((item) =>
        item.value ? (
          <li key={item.id} className={css.item}>
            <p>{item.label}</p>
            <Barcode value={item.value} width={1} height={50} fontSize={14} />
          </li>
        ) : null
      )}
    </ul>
  );
}
