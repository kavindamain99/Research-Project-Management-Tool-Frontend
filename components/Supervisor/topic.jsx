import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTopic, updateState } from "./Auth/topics";
import Swal from 'sweetalert2'

export const SupervisorTopic = () => {
    const { id } = useParams();

    const [topic, setTopic] = useState({});
    const [error, setError] = useState(false);

    const loadTopic = async () => {
        try {
            const topic = await getTopic(id)
            if(topic.error) {
                if(topic.message) {
                    setError(topic.message);
                }
                else {
                    setError(topic.error);
                }
            }
            else {
                setTopic(topic);
            }
        }
        catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadTopic();
    }, [])

    function updateTopicState(state) {
        const textState = state.charAt(0).toUpperCase() + state.substring(0, 6).slice(1)
        Swal.fire({
            title : "Are you sure",
            text : textState + " topic",
            icon : "warning",
            showCancelButton : true,
            confirmButtonText : textState,
            confirmButtonColor : "#df4759"
        }).then(result => {
            if(result.isConfirmed) {
                updateState(id, state).then(topic => {
                    if(topic.error) {
                        if(topic.message) {
                            setError(topic.message);
                        }
                        else {
                            setError(topic.error);
                        }
                    }
                    else {
                        Swal.fire(
                            textState + "ed",
                            'Topic ' + textState + "ed",
                            'success'
                        );
                    }
                })
            }
        })
        
    };

    const showError = () => error && (
        <div className="alert alert-danger" role="alert" style={{ "height" : "40px", "line-height" : "40px", "padding" : "0px 15px" }}>
            { error }
        </div>
    );

    const dynamic = () => {
        if(topic.state && topic.state === "pending") {
            return(
                <div className="d-grid gap-2">
                    <button className="btn btn-dark" onClick={ () => { updateTopicState("accepted") } }>Accept</button>
                    <button className="btn btn-danger" onClick={ () => { updateTopicState("rejected") } }>Reject</button>
                </div>
            );
        }
        if(topic.state && topic.state === "accepted") {
            return(
                <div>
                    <h5>Accepted by,</h5>
                    <h5>Supervisor name - { topic.supervisorName }</h5>
                    <h5>Supervisor ID - { topic.supervisorId }</h5>
                    <h5>Role - { topic.role }</h5>
                    <br />
                    <div className="d-grid gap-2">
                        <button className="btn btn-danger" onClick={ () => { updateTopicState("rejected") } }>Reject</button>
                    </div>
                </div>
            )
        }
        if(topic.state && topic.state === "rejected") {
            return(
                <div>
                    <h5>Rejected by,</h5>
                    <h5>Supervisor name - { topic.supervisorName }</h5>
                    <h5>Supervisor ID - { topic.supervisorId }</h5>
                    <h5>Role - { topic.role }</h5>
                    <br />
                    <div className="d-grid gap-2">
                        <button className="btn btn-dark" onClick={ () => { updateTopicState("accepted") } }>Accept</button>
                    </div>
                </div>
            )
        }
    }

    const viewTopic = () => (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-lg card-registration" style={{ "borderRadius" : "15px" }}>
                            <div className="card-body p-4 p-md-5">
                                { showError() }
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <h2 className="pb-md-0 mb-md-2" style={{ "textAlign" : "center" }}>
                                            { topic.topic }
                                        </h2>
                                    </li>
                                    <li className="list-group-item">
                                        <h5 className="col-md-6">
                                            Group ID - { topic.groupId }
                                        </h5>
                                    </li>
                                    <li className="list-group-item">
                                        <h5 className="col-sm-6">
                                            Field - { topic.field }
                                        </h5>
                                    </li>
                                    <li className="list-group-item">
                                        <h5 className="col-12">
                                            Description - { topic.description }
                                        </h5>
                                    </li>
                                    <li className="list-group-item">
                                        { dynamic() }
                                    </li>
                                </ul>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return(
        <div>
            { viewTopic() }
        </div>
    );
};

export default SupervisorTopic;