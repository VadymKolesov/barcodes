import clsx from "clsx";
import css from "./Input.module.css";
import { useState } from "react";

export default function Input({
  id,
  name,
  label,
  value,
  onChange,
  onPaste,
  onRemove,
}) {
  const [copied, setCopied] = useState();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error when trying to copy:", err);
    }
  };

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
        <button
          onClick={handleCopy}
          className={clsx(css.copyBtn, (!value || copied) && css.inactiveBtn)}
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <button
          onClick={() => onRemove(id)}
          className={clsx(css.removeBtn, !value && css.inactiveBtn)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
