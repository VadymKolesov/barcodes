import { useRef, useState } from "react";
import css from "./App.module.css";
import BarcodeList from "../BarcodeList/BarcodeList";
import InputList from "../InputList/InputList";
import { useReactToPrint } from "react-to-print";

export default function App() {
  const initialData = [
    {
      id: "order_id",
      name: "order_id",
      label: "Order ID",
      value: "",
      format: "CODE128",
    },
    {
      id: "article_id",
      name: "article_id",
      label: "Article number",
      value: "",
      format: "CODE128",
    },
    {
      id: "rd_id",
      name: "rd_id",
      label: "RD",
      value: "",
    },
    {
      id: "item_name",
      name: "item_name",
      label: "Item name",
      value: "",
    },
    {
      id: "supplier_name",
      name: "supplier_name",
      label: "Supplier",
      value: "",
    },
  ];

  const [data, setData] = useState(initialData);

  const isValue = data.some((item) => item.value);

  const barcodeRef = useRef();

  const handleChangeInput = (e, id) => {
    const newValue = e.target.value;
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, value: newValue } : item
    );
    setData(updatedData);
  };

  const handlePaste = async (id) => {
    try {
      const newValue = await navigator.clipboard.readText();
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      );
      setData(updatedData);
    } catch (err) {
      console.error("Clipboard read failed", err);
    }
  };

  const handleRemove = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, value: "" } : item
    );
    setData(updatedData);
  };

  const handleReset = () => {
    setData(initialData);
  };

  const handlePrint = useReactToPrint({
    contentRef: barcodeRef,
    documentTitle: "Barcodes",
    removeAfterPrint: true,
  });

  return (
    <main className={css.main}>
      <section className={css.form}>
        <InputList
          data={data}
          onChange={handleChangeInput}
          onPaste={handlePaste}
          onRemove={handleRemove}
        />
        {isValue && (
          <button className={css.resetBtn} onClick={handleReset}>
            Reset all
          </button>
        )}
      </section>
      <section className={css.barcodes}>
        {isValue && (
          <div className={css.barcodesWrapper}>
            <div ref={barcodeRef}>
              <BarcodeList data={data} />
            </div>
          </div>
        )}
        {isValue && (
          <button className={css.printBtn} onClick={handlePrint}>
            Print
          </button>
        )}
      </section>
    </main>
  );
}
