import React from 'react'
// import './Feature.css'
import { icons } from 'react-icons'
import { Typography, Grid } from '@mui/material'
import { BsBookHalf } from "react-icons/bs"
import { IoDocumentTextOutline } from "react-icons/all"
import { GiNewspaper } from "react-icons/all"
import { CgWebsite } from "react-icons/all"
import { Link } from "react-router-dom";



export default function Categories() {
    return (
        <>
  
<Grid container display="column" alignItems="center" justifyContent='center' >
<Grid item>


     {/* <Typography style={{margin:'91px', marginLeft:'14px', marginTop: '13px',
    marginRight: '-19px',
    marginBottom: '21px',
    }}> */}
    <Typography mt={25} fontSize="35px" fontWeight="bold">
    <span style={{ color:'#D82148'}}>Untouched Archive</span> is decentralised and censorship resistant archive to store Books, Newspapers, Documentaries and Websites on persistent storage <br /> powered by <span style={{ color:'#D82148'}}> Filecoin - IPFS.</span>

     </Typography>

</Grid>
</Grid>

        <div style={{marginTop:"10%"}}>
            <h1 style={{ color: "rgb(54 54 58)", fontSize: "40px", fontWeight: "bold", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black", textAlign: "center", marginTop: "-40px" }}>
                Explore
            </h1>

            <div className="grid-container container-fluid">
                <div style={{ justifyContent: "space-evenly" }} className='row'>
                    <div className="grid-item  col-4" >

                        <div className='cardsfeture' style={{ border:'none',background:'#faf7f8' }} >
                        <Link to='/book-list'>
                            <div className="buttons" >
                                <a className="" href=""><BsBookHalf color='#D82148' />

                                </a>
                                <p className='icon-name' style={{ color:'#D82148'}}>  {"    "} Books</p>

                            </div>
                        </Link>

                        </div>
                    </div>

                    <div className="grid-item col-4" >

                    <div className='cardsfeture' style={{ border:'none',background:'#faf7f8' }} >
                            <Link to='/documents-list'>
                            <div className="buttons" >
                                <a className="" href=""><IoDocumentTextOutline color='#D82148' />

                                </a>
                                <p className='icon-name' style={{ color:'#D82148'}}>Documents</p>

                            </div>
                            </Link>
                        </div>
                    </div>
                </div>

             
                <div style={{ justifyContent: "space-evenly" }} className='row'>


                <div className="grid-item col-4" >

                <div className='cardsfeture' style={{ border:'none',background:'#faf7f8' }} >
                    <Link to='/newspapers-list'>
                        <div className="buttons" >
                            <a className="" href=""><GiNewspaper color='#D82148' />

                            </a>
                            <p className='icon-name' style={{ color:'#D82148'}}>Newspapers</p>

                        </div>
                    </Link>
                    </div>
                </div>

                <div className="grid-item col-4" >

                <div className='cardsfeture' style={{ border:'none',background:'#faf7f8' }} >
                    <Link to='/websites-list'>
                        <div className="buttons" >
                            <a className="" href=""><CgWebsite color='#D82148'/>
                            </a>
                            <p className='icon-name' style={{ color:'#D82148'}}>Websites</p>
                        </div>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}