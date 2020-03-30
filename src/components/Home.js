import React from 'react';
import './Home.css';
import linkedImg from '../linkedImg.png';
import githubImg from '../githubImg.png';
import diceImg from '../diceImg1.jpg';
import ttImg from '../ttImg.png';

const Home = (props) => {
    return (
        <div id= "textmargin" className= "backcolor Img3">
            <div className="mainMargin maintextalign">
                <div className="container txtindent">
                    <h1 className="homeTitle">My Portfolio</h1>

                    <div className="buttons">  
                        <a onClick={props.myFunction} href="https://www.linkedin.com/in/lauren-k-m/" rel="noopener noreferrer" target="_blank">
                        <img src={linkedImg} className="linkedBtn" alt="Linked In" /></a>
                
                        <a onClick={props.myFunction} href="https://github.com/laurenkaede" rel="noopener noreferrer" target="_blank">
                        <img src={githubImg} className="gitHubBtn" alt="Git Hub" /></a>

                        <a onClick={props.myFunction} href="https://github.com/laurenkaede/toptrumps" rel="noopener noreferrer" target="_blank">
                        <img src={ttImg} className="ttImgBtn" alt="Top Trumps" /></a>

                        <a onClick={props.myFunction} href="https://github.com/laurenkaede/diceGame" rel="noopener noreferrer" target="_blank">
                        <img src={diceImg} className="diceImgBtn" alt="Dice Game" /></a>
                    </div>

                <div className="product">
                    {/* <button onClick={props.myFunction}>Add to Cart</button> */}
                </div>

                </div>
            </div>
        </div>

    )
};

export default Home;