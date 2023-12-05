import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        const savedRangeValue = localStorage.getItem('rangeValue');
        this.state = {
            skills: props.data.skills || '',
            rangeValue: savedRangeValue ? parseInt(savedRangeValue, 10) : 0,
        }
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }

    handleSkillsChange = (e) => {
        this.setState({ skills: e.target.value });
    }

    handleData() {
        const { skills } = this.state;

        const updatedData = {
            ...this.props.data,
            skills,
        };

        this.onDataCollected('skills', updatedData);

    }

    handleRangeChange(event) {
        const newValue = parseInt(event.target.value, 10);

        localStorage.setItem('rangeValue', newValue);

        let levelSkill;
        switch(newValue) {
            case 0: levelSkill = 'Beginner'; break;
            case 25: levelSkill = 'Moderate'; break;
            case 50: levelSkill = 'Skillful'; break;
            case 75: levelSkill = 'Experienced'; break;
            case 100: levelSkill = 'Expert'; break;
            default: levelSkill = 'Unknown'; break;
        }

        this.setState({ rangeValue: newValue });
        this.data.levelSkills = levelSkill;
    };

    render () {

        let text = '';
        if (this.state.rangeValue === 0) {
            text = 'Beginner';
        } else if (this.state.rangeValue === 25) {
            text = 'Moderate';
        } else if (this.state.rangeValue === 50) {
            text = 'Skillful'
        } else if (this.state.rangeValue === 75) {
            text ='Experienced'
        } else if (this.state.rangeValue === 100) {
            text = 'Expert';
        }
        
        return (
            <div id="parent">
                <div className="aside-right">
                    <div className="container">
                        <div className="main-page">
                            <div className="space"> 
                                <h1 className="page-title">Tell us about your skills!</h1>
                                <h2 className="sub-title">Type all your learned skills. List them all.</h2>
                                <div className="form4">
                                    <form>
                                        <div className="skills-full-fields">
                                            <div className="skills-field">
                                                <label>
                                                    Skills:
                                                </label>
                                                <input type="text" required placeholder="e.g Microsoft" className="form-name" autoComplete="given-skills" value={this.state.skills} onChange={this.handleSkillsChange}/>
                                            </div>
                                        </div>
                                        <div className="level-skills-full-fields">
                                            <div className="level-skills-field">
                                                <label>
                                                    Level:
                                                </label>
                                                <div className="level-skills-align">
                                                    <input type="range" id="levelSKills" min="0" max="100" list="markers" step="25" className="form-name" autoComplete="off" value={this.state.rangeValue} onChange={(event) => this.handleRangeChange(event)}/>
                                                    <div className="level-text-container">
                                                        <label className="level-text-label">{text}</label>
                                                    </div>
                                                    <datalist id="markers">
                                                        <option value="Beginner" label="Beginner"></option>
                                                        <option value="Moderate" label="Moderate"></option>
                                                        <option value="Skillful" label="Skillful"></option>
                                                        <option value="Experienced" label="Experienced"></option>
                                                        <option value="Expert" label="Expert"></option>
                                                    </datalist>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Skills;


