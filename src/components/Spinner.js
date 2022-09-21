import React from 'react'

const Spinner = ()=>{

        return (
            <div style={{height:"30vh"}} className="text-center mt-5">
                        <div className="spinner-grow text-warning" style={{ width: "2.5rem", height: "2.5rem" }} role="status">
                            <span className="sr-only"></span>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="spinner-grow text-info" style={{ width: "2.5rem", height: "2.5rem" }} role="status">
                            <span className="sr-only"></span>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="spinner-grow text-success" style={{ width: "2.5rem", height: "2.5rem" }} role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
        )

}
export default Spinner