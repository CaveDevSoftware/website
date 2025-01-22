
import React from 'react';
import './Solution.css';


const Solution = ({ solution, defaultSolutionImage }) => {

    return (
        <div key={solution.id} className="solutionCard">
            <div className='solutionImageContainer'>
                <img
                    alt="solutionImage"
                    src={solution.image || defaultSolutionImage}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultSolutionImage;
                    }}
                />
                <h3>{solution.title}</h3>
            </div>
            <p><strong>{solution.name}</strong></p>

            <h1>{solution.description}</h1>

            {/*<button
            type="button" 
            onClick={() => setSelectedSolutionId(game.id)}
            className="modularPrimaryButton"
            >
            <span>
                Details
            </span>
            </button>*/}
        </div>
  );
};

export default Solution;
