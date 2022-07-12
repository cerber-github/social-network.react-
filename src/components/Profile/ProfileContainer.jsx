import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router";
import {getUserProfile} from "../../redux/profile-reducer";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

});

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

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);