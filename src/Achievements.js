import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Achievements extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            achievements: props.data.achievements || '', 
        };
        this.onDataCollected = props.onDataCollected;
    }

    validateFields = () => {
        // Example validation logic
        const { achievements } = this.state;
        return achievements.trim() !== '';
    }

    handleAchievementsChange = (event) => {
        const content = event; 
        this.setState({ achievements: content }, () => {
            this.handleData(); 
        });
    }

    handleData() {
        this.onDataCollected('achievements', {
            ...this.props.data,
            achievements: this.state.achievements,
        });
    }

    render() {
        return(
            <div id="parent">
                <div className="aside-right">
                    <div className="container">
                        <div className="main-page">
                            <div className="space"> 
                                <h1 className="page-title">Tell us about your achievements!</h1>
                                <h2 className="sub-title">Type all information about your most recent achievements.</h2>
                                <div className="form7">
                                    <form>
                                        <div className="achievements-full-fields">
                                            <div className="achievements-field">
                                                <label>
                                                    Achievements description:
                                                </label>
                                                <ReactQuill
                                                    className="form-name"
                                                    value={this.state.achievements}
                                                    onChange={this.handleAchievementsChange}
                                                    placeholder="A went to Hackathon with my lovely Team and had been coding all night long on the project..."
                                                />
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

export default Achievements;