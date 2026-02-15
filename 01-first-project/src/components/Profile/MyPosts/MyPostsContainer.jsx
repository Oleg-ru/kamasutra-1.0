import {addPostActionCreator} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostMessage) => {dispatch(addPostActionCreator(newPostMessage))}
    }
};

const MyPostsContainer
    = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;