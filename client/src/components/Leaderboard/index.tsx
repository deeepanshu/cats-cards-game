import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { RootState } from '@store';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Leaderboard = () => {
    const history = useHistory();
    const { leaderboard } = useSelector((state: RootState) => state);
    const topTen = leaderboard.slice(0, 10);

    return (
        <div className="d-flex flex-column">
            <h4 className="text-center">Top 10 Best Scores</h4>

            {
                topTen.length > 0 ? (
                    <ul>
                        {topTen.map(score => (
                            <li className="text-center">{score[0]} ({score[1]})</li>
                        ))}
                    </ul>
                ) : (
                    <h4 className="text-center">Play to create new scores</h4>
                )
            }
            <div className="close-icon-wrapper" onClick={() => history.replace('/')}>
                <AiOutlineCloseCircle title="Close" size={25} color={'#c07401'} />
            </div>
        </div>
    )
}

export default Leaderboard;