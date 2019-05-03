import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Post extends Component {
    render() {
            const {id,title} = this.props.info;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Read more</Link>
                    <button type="button" className="btn btn-danger" onClick={()=>{this.props.deletePost(id)}}>Delete</button>
                </td>
            </tr>
        );
    }
}