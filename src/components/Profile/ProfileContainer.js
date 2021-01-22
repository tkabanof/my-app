import {Component} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {addPost, setPosts, setProfileInfo, setProfileStatus} from "../../redux/profile-reducer";
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
        this.props.setProfileStatus(userId);
    }

    render() {
        return <div>
            <div>
                {this.props.isFEtching ? <Preloader/> : null}</div>
            <Profile
                postsItems={this.props.postsItems}
                postsIsFEtching={this.props.postsIsFEtching}
                addPost={this.props.addPost}
                setPosts={this.props.setPosts}
                profileInfodata={this.props.profileInfodata}
                profileStatus={this.props.profileStatus}
            />
        </div>
    };
}

let mapStateToProps = (state) => {
    return {
        postsItems: state.profile.postsItems,
        postsIsFEtching: state.profile.postsIsFEtching,
        profileInfodata: state.profile.profileInfodata,
        profileStatus: state.profile.profileStatus
    }
}

const ProfileContainer = compose(connect(mapStateToProps, {
        addPost, setPosts, setProfileInfo, setProfileStatus,
    }), withRouter,
    withAuthRedirect)
(ProfileComponent)

export default ProfileContainer;