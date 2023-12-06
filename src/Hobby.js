import React from 'react';

class Hobby extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hobby: props.data.hobby || '',
        }
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }

    validateFields = () => {
        // Example validation logic
        const { hobby } = this.state;
        return hobby.trim() !== '';
    }

    handleHobbyChange = (e) => {
        this.setState({ hobby: e.target.value });
    }

    handleData() {
        const { hobby } = this.state;

        const updatedData = {
            ...this.props.data,
            hobby,
        };

        this.onDataCollected('hobby', updatedData);
    }

    render () {
        return (
            <div id="parent">
                <div className="aside-right">
                    <div className="container">
                        <div className="main-page">
                            <div className="space"> 
                                <h1 className="page-title">Tell us about your hobbies!</h1>
                                <h2 className="sub-title">Type all your hobbies even the most secret ones.</h2>
                                <div className="form6">
                                    <form>
                                        <div className="hobby-full-fields">
                                            <div className="hobby-field">
                                                <label>
                                                    Hobby:
                                                </label>
                                                <input type="text" required placeholder="e.g Listening to music, Coding all day all night" className="form-name" autoComplete="hobby" value={this.state.hobby} onChange={this.handleHobbyChange}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Hobby;