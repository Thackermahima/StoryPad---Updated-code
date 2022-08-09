import React from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Stack, Typography, Box } from "@mui/material";
import { BookContext } from "../Context/BookContext";

function Header() {
const bookContext = React.useContext(BookContext);

const {login} = bookContext;

//  async function logho(){
//    await login()
//   console.log("logho calleed");

//  }

  // const { authenticate, isAuthenticated } = useMoralis()
  // const login = async () => {
  //   if (!isAuthenticated) {
  //     await authenticate({
  //       provider: "web3Auth",
  //       clientId: "BHQlt53J8Q_CprFI9tgx5aRB7pE9Ei0ccchzXQBNIYAI4RwdZ84Y2sVGoezEZ3S_kwwt3MuZ2eZIGoTYET--4I0",
  //     })
  //       .then(function (user) {
  //         let currentUser = console.log(user.get("ethAddress"));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
        
  //   }
  // };
  return (
    <AppBar color="inherit" position="fixed" sx={{ height: "70px" }}>
      <Toolbar>
        <Typography flexGrow={-1}>
        <Link to="/">

          <img src="" alt="logo" />
</Link>
        </Typography>

        <Typography flexGrow={1} ml={128}>
      <Link to="upload-form">
        <button className="btn" style={{ backgroundColor:'#D82148', color:'white',
        fontWeight:'30px', borderRadius:'7%' }}>Upload form</button>
      </Link>

      <button onClick={()=>login()} className="btn my-2 my-sm-0" type="submit" style={{
        backgroundColor:'white',
        color:'#D82148',
        fontWeight:'20px',
        border:'2px solid #D82148',
        marginLeft:'10px',
        borderRadius:'7%'
      }}>Connect</button>

</Typography>

</Toolbar>
    </AppBar>

  )
}

export default Header;