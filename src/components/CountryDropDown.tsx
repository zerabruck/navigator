import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function CountryDropDown() {
    const [selected, setSelected] = useState("");
 return (
     <ReactFlagsSelect
       selected={selected}
       onSelect={(code) => setSelected(code)}
       placeholder="World traffic"
       searchable
     />
 )
}

export default CountryDropDown