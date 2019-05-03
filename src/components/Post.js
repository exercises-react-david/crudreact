import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

export default class Post extends Component {

    deleteConfirm = () =>{

        const {id} = this.props.info;

        swal({
            title: "Are you sure you want to delete this post?",
            //text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.props.deletePost(id);
              swal("Deleted post!", {
                icon: "success",
              });
            } else {
              //swal("Your imaginary file is safe!");
            }
          });

    }

    render() {
            const {id,title} = this.props.info;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>
                    <Link to={`/post/${id}`} className="btn btn-primary">Read more</Link>
                    <Link to={`/update/${id}`} className="btn btn-warning">Update</Link>
                    <button type="button" className="btn btn-danger" onClick={this.deleteConfirm}>Delete</button>
                </td>
            </tr>
        );
    }
}