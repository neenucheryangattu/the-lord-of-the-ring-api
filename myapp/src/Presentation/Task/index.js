import React,{useEffect,useState} from 'react'
import { Getmydata } from './store'
import {Main} from './style'
function Reacttask() {
 
    const[{data,details},{setData,setDetails,Getdatas,GetDetailsview}]=Getmydata();
    console.log(details,'.............details')
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState("name");
    const [selectedGender, setSelectedGender] = useState("all");
    //.............................filter by gender......................
    const filteredData = filterByGender(data, selectedGender);

    function filterByGender(data, selectedGender) {
      if (selectedGender === "all") {
        return data;
      } else {
        return data.filter(item => item.gender === selectedGender);
      }
    }
    const handleSearch = event => {
      setSearchTerm(event.target.value);
    };
//........................Ascending and Descending...................................
    const handleSortChange = () => {
      if (sort === "ascending") {
        setSort("descending")
      } else {
        setSort("ascending")
      }
    }
  
    let sortedData = [...data]
    if(sort === "ascending"){
      sortedData.sort((a, b) => (a.name > b.name) ? 1 : -1);
     
    }else{
      sortedData.sort((a, b) => (a.name < b.name) ? 1 : -1);
      
    }
    //........................pagination.......................................................
 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); 
    const renderTableData = () => {
      // Get the data to display
      const dataToDisplay = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      return dataToDisplay.filter((row)=>{return searchTerm.toLowerCase()==="" ? row:row.name.toLowerCase().includes(searchTerm)})?.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>{row.gender}</td>
            <td>{row.race}</td>
            <td><button   onClick={() => DetailsLink(row._id)} style={{width:"100px",height:"4vh"}}>Details</button></td>
          </tr>
        )
      })
    }
    

   //.........................................................................................
    const [showdiv, setShowdiv] = useState(true);
    const DetailsLink = (id) => {
       setShowdiv(false);
       GetDetailsview(id);
    };
   useEffect(() => {
        Getdatas();
        GetDetailsview();
        
    }, [])
   return (
  <Main>
    <div className='mainbox'>
    <h1>character Listing</h1>
    <div className="box">
    <label>
        Search: 
          <input type="text" onChange={handleSearch} value={searchTerm} placeholder="by name"/>
      </label>
      <label>
        Gender:<select 
        value={selectedGender} onChange={e => setSelectedGender(e.target.value)}
         className='select'>
          <option value="gender">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Race:
         <select className='select'>
          <option value="all">Human</option>
          <option value="1">Elf</option>
         </select>
      </label>
      <label>
        Sort By: <select 
       onChange={handleSortChange} value={sort}
        className='select'
         >
          <option value="asc">Ascending</option>
          <option value="1">Descending</option>
         </select>
      </label>
    </div>
<table>
  <thead>
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Race</th>
    <th>Actions</th>
  </tr>
  </thead>
  <tbody>
  {renderTableData()}
</tbody>
</table>

</div>
<div className='pagination'>
    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
    <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
   </div>
{showdiv?(""):(
<div className='details'>
  <h1>character Deatils</h1>
   
  <div className='character-details'>
        <div className='heading'>
          <h1>character :</h1>
          <h1>name</h1>
   
        </div>
        <table>
         <tbody>
         {/* {details?.map((res)=>( */}
                <tr>
                    <td>name :</td>
                  <td>WikiUrl :</td>
                    <td>Race :</td>
                    <td>Gender :</td>
                    <td>Height :</td>
                    <td>Hair :</td>
                    <td>Realm :</td>
                    <td>Birth :</td>
                    <td>Spouse :</td>
                    <td>Death :</td>
                </tr>
       {/* ))} */}
          </tbody>
        
        </table>
  </div>
  
</div>
)}
</Main>
  )
}
export default Reacttask