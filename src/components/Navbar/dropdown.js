import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Basic(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle>{props.name}</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          key={"All"}
          eventKey={"All"}
          onClick={() => props.onDropDown("All")}
        >
          All
        </Dropdown.Item>
        {props.series &&
          props.series.map((element) => (
            <Dropdown.Item
              key={element.name}
              eventKey={element.name}
              onClick={() => props.onDropDown(element.name)}
            >
              {element.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Basic;
