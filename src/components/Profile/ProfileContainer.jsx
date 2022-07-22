import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router";
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    let routerParams = useParams();

    useEffect(() => {
        let userId = routerParams?.userId || 2;
        props.getUserProfile(userId);

    }, []);

    if (!props.isAuth) return <Navigate to="/login"/>;

    return (
        <Profile {...props} profile={props.profile}/>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect
)(ProfileContainer)

