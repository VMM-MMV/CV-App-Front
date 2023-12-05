import React from 'react';

class Languages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: props.data.language || '',
            levelLanguage: props.data.levelLanguage || '',
            rangeValue: 0,
        }
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }

    handleLanguageChange = (e) => {
        this.setState({ language: e.target.value });
    }

    handleLevelLanguageChange = (e) => {
        this.setState({ levelLanguage: e.target.value });
    }

    handleData() {
        const { language, levelLanguage } = this.state;

        const updatedData = {
            ...this.props.data,
            language,
            levelLanguage,
        };

        this.onDataCollected('languages', updatedData);
    }

    render () {
        return (
            <div id="parent">
                <div className="aside-right">
                    <div className="container">
                        <div className="main-page">
                            <div className="space"> 
                                <h1 className="page-title">Tell us about your languages!</h1>
                                <h2 className="sub-title">Type all your spoken languages from the native one to just new learnt.</h2>
                                <div className="form5">
                                    <form>
                                        <div className="language-full-fields">
                                            <div className="language-field">
                                                <label>
                                                    Languages:
                                                </label>
                                                <input type="text" required placeholder="e.g English" className="form-name" autoComplete="language" value={this.state.language} onChange={this.handleLanguageChange}/>
                                            </div>
                                            <div className="level-language-field">
                                                <label>
                                                    Level:
                                                </label>
                                                <select className="form-name" value={this.state.levelLanguage} onChange={this.handleLevelLanguageChange}>
                                                    <option value="">Select language level</option>
                                                    <option value="A1">A1</option>
                                                    <option value="A2">A2</option>
                                                    <option value="B1">B1</option>
                                                    <option value="B2">B2</option>
                                                    <option value="C1">C1</option>
                                                    <option value="C2">C2</option>
                                                    <option value="nativeSpeaker">Native Speaker</option>
                                                    <option value="workingKnowledge">Working Knowledge</option>
                                                </select>
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

export default Languages;