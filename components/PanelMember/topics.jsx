import React, { useState, useEffect } from "react";
import { getTopics } from "./Auth/topics";
import { Link } from "react-router-dom";

export const PanelMemberTopics = () => {
    const [pendingTopics, setPendingTopics] = useState([]);
    const [evaluatedTopics, setEvaluatedTopics] = useState([]);

    const [error, setError] = useState(false);

    const loadTopics = async (state) => {
        try {
            const topics = await getTopics(state);
            if(topics.error) {
                if(topics.message) {
                    setError(topics.message);
                }
                else {
                    setError(topics.error);
                }
            }
            else {
                if(state === true) {
                    setEvaluatedTopics(topics);
                }
                if(state === false) {
                    setPendingTopics(topics);
                }
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadTopics(true);
        loadTopics(false);
    }, []);

    const viewTopics = () => (
        <div className="row mt-4" style={{ "marginLeft" : "12%", "marginRight" : "12%" }}>
            <div className="col" style={{ "overflow-y" : "hidden" }}>
                <span className="badge bg-primary col-md-11">
                    <h4>Pending</h4>
                </span>
                <span className="badge bg-dark col-sm-1">
                    <h4>{ pendingTopics.length }</h4>
                </span>
                { pendingTopics.map((topic) => (
                    <div className="card shadow p-2 mt-1 mb-1" key={ topic.id }>
                        <h4 className="card-title">{ topic.topic }</h4>
                        <div className="card-text">{ topic.description }</div>
                        <Link to={ `/panelmember/topic/${ topic.topicId }` }>
                            <button className="btn btn-secondary mt-2 mb-2 ml-2">Evaluate</button>
                        </Link>
                    </div>
                )) }
            </div>
            <div className="col" style={{ "overflow-y" : "hidden" }}>
                <div className="gr-2">
                    <span className="badge bg-success col-md-11">
                        <h4>Evaluated</h4>
                    </span>
                    <span className="badge bg-dark col-sm-1">
                        <h4>{ evaluatedTopics.length }</h4>
                    </span>
                </div>
                { evaluatedTopics.map((topic) => (
                    <div className="card shadow p-2 mt-1 mb-1" key={ topic.id }>
                        <h4 className="card-title">{ topic.topic }</h4>
                        <div className="card-text">{ topic.description }</div>
                        <Link to={ `/supervisor/topic/${ topic.topicId }` }>
                            <button className="btn btn-secondary mt-2 mb-2 ml-2">Review</button>
                        </Link>
                    </div>
                )) }
            </div>
        </div>
    );

    const showError = () => error && (
        <div className="alert alert-danger" role="alert" style={{ "height" : "40px", "line-height" : "40px", "padding" : "0px 15px" }}>
            { error }
        </div>
    );

    return(
        <div>
            { showError() }
            { viewTopics() }
        </div>
    );
};

export default PanelMemberTopics;