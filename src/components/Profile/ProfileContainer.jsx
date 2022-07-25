import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    let routerParams = useParams();

    useEffect(() => {
        let userId = routerParams?.userId || 24501;
        props.getUserProfile(userId);
        props.getStatus(userId);

    }, []);

    if (!props.isAuth) return <Navigate to="/login"/>;

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer)

