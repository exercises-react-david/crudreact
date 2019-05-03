import React,{Component} from 'react';
import styled from 'styled-components';
import PostsList from './PostsList';

export default class Posts extends Component {

    render() {
        return (
            
            <Container className="col-12 col-md-8">
                <Title>Posts</Title>
                <PostsList
                    posts={this.props.posts}
                    deletePost={this.props.deletePost}
                />
            </Container>

        );
    }
}

const Container = styled.div`
margin: 0 auto;
`;

const Title = styled.h2`
text-align: center;
`;