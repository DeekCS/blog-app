import "./write.css";
import React, { Component } from "react";

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            image: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isLoading: true,
            error: null
        });
        const { title, content, tags } = this.state;
        const { history } = this.props;
    }


    render() {
        return (
            <div className="write">
                <img
                    className="writeImg"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <form className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fas fa-plus"></i>
                        </label>
                        <input id="fileInput" type="file" style={{ display: "none" }} />
                        <input
                            className="writeInput"
                            placeholder="Title"
                            type="text"
                            autoFocus={true}
                        />
                    </div>
                    <div className="writeFormGroup">
          <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
          />
                    </div>
                    <button className="writeSubmit" type="submit">
                        Publish
                    </button>
                </form>
            </div>
        );
    }
}

export default Write;