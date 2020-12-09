import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost, setPosts, setProfileInfo, updateNewPost} from "../../redux/profile-reducer";
import * as axios from "axios";
import {setIsFEtching} from "../../redux/friend-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setIsFEtching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setIsFEtching(false);
                this.props.setProfileInfo(response.data)
            });
    }

    render() {
        return <div>
            <div>
                {this.props.isFEtching ? <Preloader/> : null}</div>
            <Profile
                postsItems={this.props.postsItems}
                newPostText={this.props.newPostText}
                postsIsFEtching={this.props.postsIsFEtching}
                addPost={this.props.addPost}
                updateNewPost={this.props.updateNewPost}
                setPosts={this.props.setPosts}
                profileInfodata={this.props.profileInfodata}
            />
        </div>
    };
}

let mapStateToProps = (state) => {
    return {
        postsItems: state.profile.postsItems,
        newPostText: state.profile.newPostText,
        postsIsFEtching: state.profile.postsIsFEtching,
        profileInfodata: state.profile.profileInfodata
    }
}

const ProfileContainer = connect(mapStateToProps, {
    addPost, updateNewPost, setPosts, setProfileInfo, setIsFEtching
})(withRouter(ProfileComponent))

export default ProfileContainer;