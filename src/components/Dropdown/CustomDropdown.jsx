import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import textVariants from "../../styles/variants/textVariants";

function CustomDropdown({
  items,
  initialItem,
  style,
  toggleContent,
  onChange,
}) {
  const [selectedItem, setSelectedItem] = useState(initialItem);

  const handleItemClick = item => {
    setSelectedItem(item);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <Dropdown style={{ backgroundColor: "var(--color-grey)", ...style }}>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{
          backgroundColor: "var(--color-grey)",
          color: "var(--color-low-emphasis)",
          border: "none",
          ...textVariants.P_M_16,
          ...style,
        }}
      >
        {toggleContent ? toggleContent(selectedItem) : selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          backgroundColor: "var(--color-grey)",
          color: "var(--color-low-emphasis)",
          ...textVariants.P_M_16,
        }}
      >
        {items.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
