import { Component } from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost, setPosts, setProfileInfo, updateNewPost} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileComponent extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setProfileInfo(userId);
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

const ProfileContainer = compose(connect(mapStateToProps, {
        addPost, updateNewPost, setPosts, setProfileInfo
    }), withRouter,
    withAuthRedirect)
(ProfileComponent)

export default ProfileContainer;