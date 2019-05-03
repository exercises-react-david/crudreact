import React,{Component} from 'react';
import styled from 'styled-components';

export default class SinglePost extends Component {

    showPost = (props) =>{
        if(!props.post) return null;
        const {title, body,userId} = this.props.post;
        console.log(title);

        return(
            <React.Fragment>
                <h1>{title}</h1>
                <p>Author: {userId}</p>
                {body}
            </React.Fragment>
        )
    }

    render() {

        return (
            <Container className="col-12 col-md-8">
                {this.showPost(this.props)}        
            </Container>
        );
    }
}

const Container = styled.div`
margin: 0 auto;
`;