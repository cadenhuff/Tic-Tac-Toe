import './App.css';



function Square(){
  return(
    <button className = "square">
      
    </button>
  );

}


function Board(){
  return(
    <div className = "board">
      <table>
          <tr>
            <td><Square/></td>
            <td><Square/></td>
            <td><Square/></td>
          </tr>
          <tr>
            <td><Square/></td>
            <td><Square/></td>
            <td><Square/></td>

          </tr>
          <tr>
            <td><Square/></td>
            <td><Square/></td>
            <td><Square/></td>
          </tr>
      </table>
    </div>
  );
  

}


export default function App(){
  return(
    <Board />
  );



}
