
import React, { useState } from "react";
import styles from "./App.module.css";
import Modal from "./Modal";
import Form from "./FormModal";

const Apps = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button type="button" className={styles.primaryBtnn} onClick={() => setIsOpen(true)}>
       Add Joke
      </button>
      {isOpen && <Form setIsOpen={setIsOpen} />}
    </main>
  );
};

export default Apps;