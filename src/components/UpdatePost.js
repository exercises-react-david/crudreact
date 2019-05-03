import React, { Component } from 'react';
import styled from 'styled-components';

export default class UpdatePost extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

    updatePost = (e) =>{
        e.preventDefault();

        const post = {
            title: this.titleRef.current.value,
            body: this.contentRef.current.value,
            userId: this.props.post.userId,
            id: this.props.post.id
        }

        this.props.updatePost(post);
    }

    loadForm = () => {

        if(!this.props.post) return null;

        const {title,body} = this.props.post;

        return(
            <Form className="col-8" onSubmit={this.updatePost}>
                <legend className="text-center">Update post</legend>
                <div className="form-group">
                    <label>Post Title</label>
                    <input ref={this.titleRef} defaultValue={title} className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea ref={this.contentRef} className="form-control" defaultValue={body}></textarea>
                </div>
                <input type="submit" className="btn btn-primary" value="Update" />
            </Form>
        )
    }

    render() {

        return (
            <React.Fragment>
                {this.loadForm()}
            </React.Fragment>
        );
    }
}

const Form = styled.form`
margin: 0 auto;
`;