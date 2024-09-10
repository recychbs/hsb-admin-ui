import { useNavigate } from "react-router-dom";

function User() {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://django-djreact-app-d5af3d4e3559.herokuapp.com/Get_UserProfile/')
      .then(response => response.json())
      .then(data =>{ 
        setData(data);     



        
        setLoading(false);
    })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


const users=[];

  for (let i=0;i<data.length;1++){
        users.push({
        User_Name: data[i].user_Name,
        mail: data[i].Email,
        phone: data[i].Phone_Number,
        address: data[i].Address,
        nationality: data[i].Nationality
        });
  }
  
  // const users = [
  //   {
  //     id: 1,
  //     name: "User Id 1",
  //     phone: "000-000-0000",
  //     mail: "@twitter",
  //     location: "place",
  //     amt: "$ 400"}
  //     ,
  //   {
  //     id: 2,
  //     name: "User Id 2",
  //     phone: "000-000-0000",
  //     mail: "@twitter",
  //     location: "place",
  //     amt: "$ 400"}
  //     ,
  //   {
  //     id: 3,
  //     name: "User Id 3",
  //     phone: "000-000-0000",
  //     mail: "@twitter",
  //     location: "place",
  //     amt: "$ 400"}
  //     ,
  // ];

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="card-box">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>User:</th>
              <th>Phone Number:</th>
              <th>Details:</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>
                  {user.name}
                </td>
                <td>{user.phone}</td>
                <td
                style={{fontWeight:"700",cursor:"pointer"}} 
                 onClick={() =>
                    navigate("/Userdetail", { state: { user } })
                  }>View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
