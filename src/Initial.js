import React from 'react';

function Initial({ onStartClick }) {
    return (
        <div id="parent">
            <div className="aside-right">
                <div className="container">
                    <div className="main-page">
                        <div className="space">
                            <h1 className="page-title initial">Create your professional Resume with us</h1>
                            <h2 className="sub-title initial">Create your own professional Resume and send it to us!</h2>
                            <button onClick={onStartClick} className="button-field button-create">Create your Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Initial;
