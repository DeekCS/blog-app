import React, { Component} from 'react';
// import Comment from "../Comment/Comment";
import CommentApp from "../Comment/CommentApp";


class Post extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: 'React App',
            act:0,
            index:'',
            description:'',
            name:'',
            datas:[]
        }
    }
    //for fetching data from user input

    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }
    // for pushing data to array
    handleSubmit = (e) =>{

        e.preventDefault();

        const {act,index,description,name} = this.state;
        const data = {act, index, description, name}
        this.setState({
            datas:[...this.state.datas,data],
        })
        this.state.datas.push({act, index, description, name})
        localStorage.setItem('data',JSON.stringify(this.state.datas))
        e.target.reset();

    }


    render() {
        return (
            <div className="App">
                <h1>Posts</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your post title" name="title" onChange={this.handleChange} required /> <br />
                    <input type="text" name="name" placeholder="Enter Your Name" onChange={this.handleChange} required /> <br />
                    <textarea name="description" placeholder="Your Post Here" onChange={this.handleChange} required /> <br />


                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {(this.state.datas.length > 0) ? this.state.datas.map((data,index) => {
                            return(
                                <li key={index}>
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <p>{data.name}</p>
                                </li>
                            )
                        }
                    ) : <p>No Data</p>}
                </ul>
                <div className="comment" style={{marginTop:'1rem'}} >
                    <CommentApp  />
                </div>
            </div>
        );
    }
}

export default Post;
