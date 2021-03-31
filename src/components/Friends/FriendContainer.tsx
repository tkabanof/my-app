import {connect} from "react-redux";
import Friends from "./Friends";
import {
    follow, getUsers,
    setCurrentPage, setFollowInProcess,
    unFollow
} from "../../redux/friend-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Component} from "react";
import Preloader from "../common/Preloader/Preloader";
import {userItemType} from "../../types/mainTypes";
import {RootState} from "../../redux/redux-store";

type PropsType = {
    currentPage: number
    pageSize: number
    isFEtching: boolean
    totalUserCount: number
    followInProcess: Array<number>
    items: Array<userItemType>
    setCurrentPage: (pageNum: number) => void
    getUsers: (pageNum: number, pageSize: number, term?: string, friend?: boolean) => void
    setFollowInProcess: () => void
    follow: ()=> void
    unFollow: ()=> void

}

class FriendsComponent extends Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsers(pageNum, this.props.pageSize);
    }

    render() {
        return <>
                {this.props.isFEtching ? <Preloader/> : null}
            <Friends
                totalUserCount={this.props.totalUserCount}
                //pageSize={this.props.pageSize}
                items={this.props.items}
                //currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
                followInProcess={this.props.followInProcess}
                pageSize = {this.props.pageSize}
            />
        </>
    }
}

let mapStateToProps = (state: RootState) => {
    return {
        items: state.friends.items,
        pageSize: state.friends.pageSize,
        totalUserCount: state.friends.totalUserCount,
        currentPage: state.friends.currentPage,
        isFEtching: state.friends.isFEtching,
        followInProcess: state.friends.followInProcess
    }
}

const FriendContainer = compose(connect(mapStateToProps, {
        follow, unFollow,
        setCurrentPage,
        setFollowInProcess, getUsers
    }),
    withAuthRedirect)
(FriendsComponent)

export default FriendContainer;