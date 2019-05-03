import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navigation from './Navigation';
import Posts from './Posts';
import SinglePost from './SinglePost';
import NewPost from './NewPost';

export default class Router extends Component {

    state={
        posts:[]
    }

    componentDidMount(){
        this.getpost();
    }

    getpost = () => {
        const url = `https://jsonplaceholder.typicode.com/posts`;

        axios.get(url)
        .then(apiAnswer => {
            this.setState({
                posts: apiAnswer.data
            })
        })
    }

    deletePost = (id) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(apiAnswer => {
            if(apiAnswer.status === 200){
                const posts = [...this.state.posts];

                let result = posts.filter(post =>(
                    post.id !== id
                ));
                this.setState({
                    posts: result
                })
            }
        })
    }

    createPost = () =>{
        
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                        <Header/>
                        <Navigation/>
                    </div>
                </div>
                
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return (
                            <Posts
                                posts={this.state.posts}
                                deletePost={this.deletePost}
                            />
                        )
                    }}/>
                    <Route exact path="/post/:idPost" render={(props) =>{
                        let id = props.location.pathname.replace('/post/','');
                        const posts = this.state.posts;

                        let filtro = posts.filter(post =>(
                            post.id === Number(id)
                        ))
                        return(
                            <SinglePost post={filtro[0]}/>
                        )
                    }}/>
                    <Route exact path="/create"  component={NewPost} />
                </Switch>
            </BrowserRouter>
        );
    }
}