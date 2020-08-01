import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

class MyPosts extends React.Component {
    render() {
        let postElements =
            [...this.props.posts]
                .reverse()
                .map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount}/>);

        let newPostElement = React.createRef();

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
        }


        return (
            <div>
                <div className={s.postBlock}>
                    <h3>My posts</h3>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
                <div className={`${s.postBlock} ${s.posts}`}>
                    {postElements}
                </div>
            </div>
        )

    }
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.postText}>
                <Field name="newPostText"
                       component={Textarea}
                       placeholder={"What's new?"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;