import clsx from "clsx";
import css from "./Input.module.css";

export default function Input({ id, name, label, value, onChange, onPaste }) {
  return (
    <div className={css.wrapper}>
      <label htmlFor={id} className={clsx(css.label, !value && css.inactive)}>
        {label}:
      </label>
      <div className={css.input}>
        <input
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e, id)}
          className={clsx(css.field, !value && css.inactive)}
        />
        <button onClick={() => onPaste(id)} className={css.pasteBtn}>
          Paste
        </button>
      </div>
    </div>
  );
}
