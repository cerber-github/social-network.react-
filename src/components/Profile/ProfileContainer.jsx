import React, {useEffect} from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {setUserProfile} from "../../redux/profile-reducer";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const ProfileContainer = (props) => {
    let routerParams = useParams();

    useEffect(() => {
        let userId = routerParams?.userId || 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, [])

    return (
        <Profile {...props} profile={props.profile} />
    );
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);