import Barcode from "react-barcode";
import css from "./BarcodeList.module.css";

export default function BarcodeList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((item) =>
        item.value ? (
          <li key={item.id} className={css.item}>
            <p className={css.label}>{item.label}</p>
            {item.format ? (
              <Barcode
                value={item.value}
                width={1.5}
                height={15}
                fontSize={12}
                margin={3}
                format={item.format}
                background="#ffffff"
              />
            ) : (
              <p className={css.value}>{item.value}</p>
            )}
          </li>
        ) : null
      )}
    </ul>
  );
}
