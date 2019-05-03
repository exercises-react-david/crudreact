import React,{Component} from 'react';
import Post from './Post';

export default class PostsList extends Component {

    showPosts = () =>{
        const posts = this.props.posts;
        if(posts.length === 0) return null;

        return(
            <React.Fragment>
                {Object.keys(posts).map(post => (
                    <Post 
                        info={this.props.posts[post]} 
                        key={post}
                        deletePost={this.props.deletePost}
                    />
                ))}
            </React.Fragment>
        )
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showPosts()}
                </tbody>
            </table>
        );
    }
}