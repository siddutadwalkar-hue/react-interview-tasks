import {useState, useMemo} from "react";
 function DynamicTable({data = []}){
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);


  const columns = useMemo(() => {
    return [
      ...new Set(data.flatMap((item) => Object.keys(item)))
    ];
  }, [data]);

  const filteredData = useMemo(() => {
    return data.filter((item) => 
    Object.values(item).some((value) => 
    String(value ?? "").toLowerCase().includes(search.toLowerCase())
    )
    )
  },[data, search]);

  const TotalPages = Math.ceil(filteredData.length / pageSize);

//   useEffect(()=>{
//     setCurrentPage(1);

//   },[search, pageSize]);

//   useEffect(()=>{
//     setCurrentPage((page)=> Math.min(page, Math.max(1, TotalPages))
//     );
//   }, [TotalPages]);

const safePage = Math.min( currentPage, Math.max(1, TotalPages) );

  const startIndex = (safePage - 1) * pageSize;
  const paginstionData = filteredData.slice(
    startIndex,
    startIndex + pageSize
  );
    
  if(!data || data.length === 0) {
    return <p>No Data Found</p>
  }
  return (
    <>
    <input type="text" 
    placeholder="Search Data"
    value={search}
    onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
    />
   <br />
   <br />
    <table border="1" cellPadding="10">
      <thead>
        <tr>
         {columns.map((column) => (
          <th key={column}>
            {column}
          </th>
         ))}
        </tr>
      </thead>
      <tbody>
        {
            paginstionData.length === 0 ? (
           <tr>
              <td colSpan={Math.max(columns.length, 1)}>
              No matching records found
              </td>
            </tr>
          ) : (
             paginstionData.map((item, index) => (
              <tr key={item.id ?? index}>
                {columns.map((column) => (
                  <td key={column}>
                  {item[column]}
                        
                      </td>
                )
                  //{}
                  // const value = item[column];
                  // return (
                      
                  // );
                //}
                )}
              </tr>
          ))
              
          )
         
        }
      </tbody>
    </table>
    <br />
     <label>
     {" "} Rows per page: {" "}
     <select
     value={pageSize}
     onChange={(e)=> setPageSize(Number(e.target.value))}
     >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
     </select>
    </label>
    <p>
      Total records: {filteredData.length} 
    </p>
    </>

  );
 }
 export default DynamicTable;