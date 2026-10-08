import {useState} from 'react';
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function Main() {
  // const [count, setCount] = useState(0);
   const [locations, setLocations] = useState([]);
   const handleAdd = (location) => {
    setLocations((prev) => [...prev, location]);

   };
   const handleClear = () => {
    setLocations([]);
   };
  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };
// <div>
      //   <button onClick={() => setCount((count) => count + 1)}>
      //     count {count}
      //   </button>
      // </div>
  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Hello, World!</h1>
     
       <ComponentA onAdd={handleAdd} onClear={handleClear} />
       <ComponentB locations={locations} />
    </div>
  )
}

export default Main