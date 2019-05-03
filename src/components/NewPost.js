import React,{Component} from 'react';
import styled from 'styled-components';

export default class NewPost extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

    createPost = (e) =>{
        e.preventDefault();
        const newPost = {
            title: this.titleRef.current.value,
            body: this.contentRef.current.value,
            userId: 1
        }
        this.props.createPost(newPost);
    }

    render() {
        return (
            <Form className="col-8" onSubmit={this.createPost}>
                <legend className="text-center">Create new post</legend>
                <div className="form-group">
                    <label>Post Title</label>
                    <input ref={this.titleRef} className="form-control" type="text" placeholder="Your title"/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea ref={this.contentRef} className="form-control" placeholder="Your content"></textarea>
                </div>
                <input type="submit" className="btn btn-primary" value="Create"/>
            </Form>
        );
    }
}

const Form = styled.form`
margin: 0 auto;
`;