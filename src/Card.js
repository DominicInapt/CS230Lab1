
export default function Card(){
    
    return (
        <div style={{display:'flex', justifyContent: "center"}}>

            <div style={{float: "left",margin:"0 0.5%"}}>
            <div class="card" style={{width: '18rem',backgroundColor:'blue', color:"white"}}>
                <div class="card-body">
                    <h5 class="card-title">Card 01</h5>
                    <hr></hr>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div></div>

            <div style={{float: "left",margin:"0 0.5%"}}>
            <div class="card" style={{width: '18rem',backgroundColor:'red', color:"white"}}>
                <div class="card-body">
                    <h5 class="card-title">Card 02</h5>
                    <hr></hr>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> </div>

            <div style={{float: "left",margin:"0 0.5%"}}>
            <div class="card" style={{width: '18rem',backgroundColor:'green', color:"white"}}>
                <div class="card-body">
                    <h5 class="card-title">Card 03</h5>
                    <hr></hr>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>  
            </div></div>
       </div>
    );
}