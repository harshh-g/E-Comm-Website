import React, { useState } from "react";
import { Form } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [iOpen, setIsOpen] = useState(false);
  return <div>{isOpen ? <form></form> : <button></button>}</div>;
};

export default SearchBar;
