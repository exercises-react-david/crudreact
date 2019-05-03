import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Header from './Header';
import Navigation from './Navigation';
import Posts from './Posts';
import SinglePost from './SinglePost';
import NewPost from './NewPost';
import UpdatePost from './UpdatePost';

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

    createPost = (post) =>{
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {post})
        .then(apiAnswer =>{
            if(apiAnswer.status === 201){
                let idPost = {id: apiAnswer.data.id};
                const newPost = Object.assign({},apiAnswer.data.post, idPost);

                this.setState(prevState =>({
                    posts: [...prevState.posts, newPost]
                }))

                swal({title: "Post created", icon:"success"});
            }
        })
    }

    updatePost = (post) =>{
        axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {post})
        .then(apiAnswer => {
            if(apiAnswer.status === 200){
                let idPost = apiAnswer.data.id;

                const posts = [...this.state.posts];
                const postUpdate = posts.findIndex(post => idPost === post.id);

                posts[postUpdate] = post;

                this.setState({
                    posts
                })

                swal({title: "Post updated", icon:"success"});
            }
        })
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
                    <Route exact path="/create"  render={()=>(
                        <NewPost 
                            createPost={this.createPost}
                        />
                    )} />

                    <Route exact path='/update/:id' render={(props) =>{

                            let id = props.location.pathname.replace('/update/','');
                            const posts = this.state.posts;

                            let filtro;
                            filtro = posts.filter(post => (
                                post.id === Number(id)
                            ));

                        return (
                            <UpdatePost
                                post={filtro[0]} 
                                updatePost={this.updatePost}
                            />
                        )
                    }}/>
                </Switch>
            </BrowserRouter>
        );
    }
}