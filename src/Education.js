import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDateStudy: '',
            endDateStudy: '',
            monthStart: '',
            monthEnd: '',
            yearStart: '',
            yearEnd: '',
            education: props.data.education || '',
            citySchool: props.data.citySchool || '',
            school: props.data.school || '',
        }
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }

    handleEducationChange = (e) => {
        this.setState({ education: e.target.value });
    }

    handleSchoolChange = (e) => {
        this.setState({ school: e.target.value });
    }

    handleCitySchoolChange = (e) => {
        this.setState({ citySchool: e.target.value });
    }
    
    handleMonthStudyStartChange = (e) => {
        this.setState({ monthStart: e.target.value });
    }
    
    handleMonthStudyEndChange = (e) => {
        this.setState({ monthEnd: e.target.value });
    }
    
    handleYearStudyStartChange = (e) => {
        this.setState({ yearStart: e.target.value });
    }

    handleYearStudyEndChange = (e) => {
        this.setState({ yearEnd: e.target.value });
    }

    handleData() {
        const { monthStart, monthEnd, yearStart, yearEnd, education, citySchool, school } = this.state;
        const startDateStudy = `${yearStart}-${String(monthStart).padStart(2, '0')}-01`;
        const endDateStudy = `${yearEnd}-${String(monthEnd).padStart(2, '0')}-01`;
        this.data.startDateStudy = startDateStudy; 
        this.data.endDateStudy = endDateStudy;

        const updatedData = {
            ...this.props.data,
            school,
            citySchool,
            education,
            startDateStudy,
            endDateStudy,
        };

        this.onDataCollected('education', updatedData);
    }

    renderOptions = (array) => array.map(value => (
        <option key={value} value={value}>{value}</option>
    ));

    render () { 

        const months = Array.from({ length: 12 }, (_, i) => i + 1);
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

        return(
            <div id="parent">
                <div className="aside-right">
                    <div className="container">
                        <div className="main-page">
                            <div className="space"> 
                                <h1 className="page-title">Tell us about your education!</h1>
                                <h2 className="sub-title">Type all necessary information about school, university where you studied. List them all.</h2>
                                <div className="form2">
                                    <form>
                                        <div className="degree-city-full-fields">
                                            <div className="degree-field">
                                                <label>
                                                    Degree:
                                                </label>
                                                <input type="text" required placeholder="e.g Master of Economics" className="form-name" autoComplete="given-educcation-degree" value={this.state.education} onChange={this.handleEducationChange}/>
                                            </div>
                                            <div className="city-field">
                                                <label>
                                                    City/Town:
                                                </label>
                                                <input type="text" required placeholder="e.g Chisinau" className="form-name" autoComplete="given-city" value={this.state.citySchool} onChange={this.handleCitySchoolChange}/>
                                            </div>
                                        </div>
                                        <div className="school-full-fields">
                                            <div className="school-field">
                                                <label>
                                                    School:
                                                </label>
                                                <input type="text" required placeholder="e.g Universitatea Tehnica" className="form-name" autoComplete="given-school" value={this.state.school} onChange={this.handleSchoolChange}/>
                                            </div>
                                        </div>
                                        <div className="study-fields">
                                            <div className="date-study-full-field">
                                                <div className="date-study-field">
                                                    <div className="month-selector">
                                                    <label>
                                                        Start Date:
                                                    </label>
                                                        <select value={this.state.monthStart} className="form-name" onChange={this.handleMonthStudyStartChange}>
                                                            <option value="">Month</option>
                                                            {this.renderOptions(months)}
                                                        </select>
                                                    </div>
                                                    <div className="year-selector">
                                                    <label></label>
                                                    <select value={this.state.yearStart} className="form-name" onChange={this.handleYearStudyStartChange}>
                                                        <option value="">Year</option>
                                                        {this.renderOptions(years)}
                                                    </select>
                                                    </div>  
                                                    <div className="month-selector">
                                                    <label>
                                                        End Date:
                                                    </label>
                                                        <select value={this.state.monthEnd} className="form-name" onChange={this.handleMonthStudyEndChange}>
                                                            <option value="">Month</option>
                                                            {this.renderOptions(months)}
                                                        </select>
                                                    </div>
                                                    <div className="year-selector">
                                                    <label></label>
                                                    <select value={this.state.yearEnd} className="form-name" onChange={this.handleYearStudyEndChange}>
                                                        <option value="">Year</option>
                                                        {this.renderOptions(years)}
                                                    </select>
                                                    </div>  
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
        );
    }    
}
    
export default Education;