import { useState } from "react";

function ComponentA({ onAdd, onClear }) {
  const [location, setLocation] = useState("");

  const handleAdd = () => {
    if (!location.trim()) return;

    onAdd(location.trim());
    setLocation("");
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Please Enter Location"
      />

      <button onClick={handleAdd}>Add</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default ComponentA;