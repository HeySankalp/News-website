import React, { Component } from 'react'
import user from '../components/user.png'
export default class About extends Component {
    render() {
        return (
            <>
                <div style={{ backgroundColor: "grey", width: "80%", height: "86vh", color: "white"  ,opacity:"0.8"}} className="container">
                    <h1 style={{textDecoration:"underline"}} className="text-center py-2">About Us</h1>
                    <br />
                    <br />
                    <p className="text-center">
                        This Khabri news website fetches you the latest and fastest news on daily basis in one go, the Gui is designed in such a way so that you can easily operate it and can update yourself with knowledge, this website won't compromise with quality, you can also choose you news category in which you are intrested in.
                    </p>
                    <br/>
                    <h2 className="text-center">-Developer-</h2>

                    <div className="container text-center">
                        <img style={{borderRadius:"150px", width:"15vw"}} src={user} alt="user" />
                    <h4 className="text-center">Sankalp Sachan</h4>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="text-center">Thankyou!❤️</h1>
                </div>
            </>
        )
    }
}
