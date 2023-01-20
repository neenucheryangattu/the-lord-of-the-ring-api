import styled from "styled-components";
export const Main = styled.div`
width:100vw;
height:100vh;
.mainbox{
  width:100vw;
height:500px;
overflow:scroll;


.box{
    width:100%;
    height:60px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:10px;
    label{
    
      font-size:20px;
    }
    input{
      height:4vh;
      border-radius:6px;
    
    }
    .select{
        width:150px;
        height:4vh;
        border-radius:6px;
       
    }
}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width:100%;
    height:500px;
    overflow-x:scroll;
    border: 1px solid #dddddd;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
}
.pagination{
  padding-top:20px;
  display:flex;
  padding:30px;
  justify-content:flex-end;
  button{
    width:100px;
    height:30px;
  }
}
.details{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  .character-details{
   width:800px;
   height:500px;
   border:1px solid black;
   .heading{
     width:100%;
     height:30px;
     border-bottom:1px solid black;
     display:flex;
     align-items:center;
     justify-content:center;
     h1{
       font-size:18px;
     }
   }
   table{
     tr{
       td{
         display:flex;
         flex-direction:column;
         text-align: left;
         padding: 8px;
         font-size:18px;
       }
     }
   }
  }
 }
`