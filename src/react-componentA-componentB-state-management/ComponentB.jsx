function ComponentB({ locations }) {
  const locationCount = locations.reduce((acc, location) => {
    acc[location] = (acc[location] || 0) + 1;
    return acc;
  }, {});
 

  const data = Object.entries(locationCount);
  if (data.length === 0) {
    return <p>No entries</p>;
  }
  return (
    <div>
      <table border="1">
        <thead>
        <tr>
        <td>Location</td>
          <td>Count</td>
        </tr>
        </thead>
        <tbody>
          {data.map(([location, count]) => (
            <tr key={location}>
              <td>{location}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComponentB;
