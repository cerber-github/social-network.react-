import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {getUserProfile} from "../../redux/profile-reducer";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const ProfileContainer = (props) => {
    let routerParams = useParams();

    useEffect(() => {
        let userId = routerParams?.userId || 2;
        props.getUserProfile(userId);

    }, [])

    return (
        <Profile {...props} profile={props.profile}/>
    );
}

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);