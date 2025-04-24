import React from 'react';

function SunshineTimeline () {
    

    return (
        <div class="progress-stacked">
            <div class="progress" role="progressbar" aria-label="night" aria-valuenow="6" aria-valuemin="0" aria-valuemax="24" style={{ width: "25%" }}>
                <div class="progress-bar bg-dark"> 🌙</div>
            </div>
            <div class="progress" role="progressbar" aria-label="day" aria-valuenow="13" aria-valuemin="0" aria-valuemax="24" style={{ width: "54.17%" }}>
                <div class="progress-bar bg-warning">☀️</div>
            </div>
            <div class="progress" role="progressbar" aria-label="evening" aria-valuenow="5" aria-valuemin="0" aria-valuemax="24" style={{ width: "20.83%" }}>
                <div class="progress-bar bg-dark">🌙</div>
            </div>
        </div>
      
    )
};

export default SunshineTimeline;