import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import illustration from './images/id.png'
import idcard from './images/id-card.png'
import creditcard from './images/credit.png'
import terminal from './images/terminal.png'

function App() {
  return (
    <>
    <section className="purple">
   <div className="container pt-3">
   <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid align-items-center">
    <a class="navbar-brand text-white" href="#"> <h4 class="fw-bold">Dentity</h4></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li style={{paddingLeft:'40px'}} class="nav-item">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white px-5" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
      </ul>
      <form class="d-flex">
        
        <button class="btn px-3" style={{border:'1px solid white',color:'white'}}>Sign in</button>
        <button class="btn px-3 btn-warning text-white" style={{marginLeft:'20px'}}>Sign Up</button>
      </form>
    </div>
  </div>
</nav>
   </div>
      <div className="container">
      <div className="row">
        <div className="col-md-6 p-2 d-flex align-items-center">
         <div>
         <h1 style={{fontSize:"3em"}} className="text-white fw-bold">Lorem ipsum dolor<br/>
          sit amet consectetur<br/>
          consectetur
          </h1>
          <p className="text-white">adipiscing elit. Praesent ipsum est,<br/>
          egestas ut tellus eget, volutpat
          </p>
          <button className="btn text-white btn-warning px-3">View documentation</button>
         </div>
        </div>
        <div className="col-md-6 p-2 ">
          <img src={illustration} width="100%" height="auto"/>

        </div>
      </div>
      </div>
    </section>
    <div className="container p-5">
    <h2 className="text-center fw-bold">Dentity is built for</h2>
    <div className="row mt-5">
      <div className="col-md-4 p-5">
        <div className="dentity-card">
         <div className="dentity-card-image">
            <img src={idcard}/>
           </div>
          <h6 className="mt-3 text-center fw-bold">Instant Id Verification</h6>
          <p style={{fontSize:"15px"}} className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Optio nihil beatae amet unde incidunt saepe fugiat accusantium 
             adipisci corrupti repellat.</p>
             <h6 className="mt-3 text-center text-purple fw-bold">Learn More &gt;</h6>
        </div>
      </div>
      <div className="col-md-4 p-5">
      <div className="dentity-card">
         <div className="dentity-card-image">
            <img src={creditcard}/>
           </div>
          <h6 className="mt-3 text-center fw-bold">Fraud Detection</h6>
          <p style={{fontSize:"15px"}} className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Optio nihil beatae amet unde incidunt saepe fugiat accusantium 
             adipisci corrupti repellat.</p>
             <h6 className="mt-3 text-center text-purple fw-bold">Learn More &gt;</h6>
        </div>
      </div>
      <div className="col-md-4 p-5">
      <div className="dentity-card">
         <div className="dentity-card-image">
            <img src={idcard}/>
           </div>
          <h6 className="mt-3 text-center fw-bold">Instant Id Verification</h6>
          <p style={{fontSize:"15px"}} className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Optio nihil beatae amet unde incidunt saepe fugiat accusantium 
             adipisci corrupti repellat.</p>
             <h6 className="mt-3 text-center text-purple fw-bold">Learn More &gt;</h6>
        </div>
      </div>
    </div>
     </div>
     <div style={{backgroundColor:"#DEE1E9"}} className="container-fluid mp-2 mt-3">
       <div className="row">
         <div className="col-md-5 mp-2">
           <h1 className="fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p className="mt-3 text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, maxime ducimus quidem dolorum asperiores deleniti at rem, veniam, magni quod sed dolorem nemo. Maiores expedita, id voluptate dolore eos perferendis.
            </p>
           <button style={{border:"1px solid black",borderRadius:"10px",padding:"0.7em 1em"}} className="btn mt-3">View Documentation</button>
         </div>
         <div className="col-md-7 mp-2">
           <img src={terminal} width="100%" height="100%" />
         </div>
       </div>
     </div>

  </>
  );
}

export default App;
