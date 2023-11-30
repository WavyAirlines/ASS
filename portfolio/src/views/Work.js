import React from 'react';
import { Link } from 'react-router-dom';
function Work () {
    
    return (
        <div>
        <h1 className="text-center">Take a look at my work!</h1>
        
        <div class="card">
  <img src="img/LLL.jpg" className="card-img-top" alt="Lias Lash Lounge Logo"/>
  <div className="card-body">
    <h5 className="card-title">Lias Lash Lounge Logo</h5>
    <p className="card-text">A logo I made for a friend that was starting up a eyelash business</p>
  </div>
</div>
<div class="card">
  <img src="img/ProgressTracker.jpg" className="card-img-top" alt="Progression Tracker"/>
  <div className="card-body">
    <h5 className="card-title">ProgressTracker</h5>
    <p className="card-text">A web app made for tracking your progress in the gym and giving nutritional suggestions</p>
  </div>
</div>
<div class="card">
  <img src="img/StyleStage.jpg" className="card-img-top" alt="Lias Lash Lounge Logo"/>
  <div className="card-body">
    <h5 className="card-title">Style Stage</h5>
    <p className="card-text">My submition for the CSS style stage challenge</p>
  </div>
</div>
<button className="btn btn-info m-3">
        <Link to="/Repositories">Github Repos</Link>
      </button>
    </div>
    
    );
    }
export default Work;