import Input from "../Input/Input";
import css from "./InputList.module.css";

export default function InputList({ data, onChange, onPaste, onRemove }) {
  return (
    <ul className={css.list}>
      {data.map((item) => (
        <li key={item.id}>
          <Input
            id={item.id}
            name={item.name}
            label={item.label}
            value={item.value}
            onChange={onChange}
            onPaste={onPaste}
            onRemove={onRemove}
          />
        </li>
      ))}
    </ul>
  );
}
