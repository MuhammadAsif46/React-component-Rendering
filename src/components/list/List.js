import "./List.css";

function List() {

  const UserName = "Hello World";
  const obj = {userName: "Hello World Object"};
  let data = ["We", "are", "United"];
  const list = [{namee: "Hello World 01"},{namee: "Hello World 02"},{namee: "Hello World 03"}]
  const company = [{company: "XYZ",jobs:["Javascript",' , ',"React"]},{company: "ABC",jobs:["AngularJs",' , ',"Ionic"]}]
  

  return (
    <div className="container">
      <div className="name" >
        <ul>
          <li>{UserName}</li>
          <li>{obj.userName}</li>
        </ul>
      </div>
      <div className="data">
        <ul>
            {data.map((val, idx)=>(
              <li key={idx}>{val}</li>
            ))}
        </ul>
      </div>
      <div className="list">
        <ul>
            {list.map((val, idx)=>(
              <li key={idx}>{val.namee}</li>
            ))}
        </ul>
      </div>
      <div className="company">
        <ul>
            {company.map((val, idx)=>(
                <li key={idx}> {val.company} : {val.jobs}</li>
            ))}
        </ul>
      </div>


      {/* <ul>
        {arr.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default List;
