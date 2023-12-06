import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDateJob: '',
            endDateJob: '',
            monthJobStart: '',
            monthJobEnd: '',
            yearJobStart: '',
            yearJobEnd: '',
            descriptionJob: props.data.descriptionJob || '',
            titleJob: props.data.titleJob || '',
            cityJob: props.data.cityJob || '',
            employer: props.data.employer || '', 
        }
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }

    validateFields = () => {
        // Example validation logic
        const { titleJob, cityJob, employer, descriptionJob, monthJobStart, monthJobEnd, yearJobStart, yearJobEnd } = this.state;
        return titleJob.trim() !== '' && cityJob.trim() !== '' && employer.trim() !== '' && descriptionJob.trim() !== ''
            && monthJobStart.trim() !== '' && monthJobEnd.trim() !== '' && yearJobEnd.trim() !== '' && yearJobStart.trim() !== '';
    }

    handleTitleChange = (e) => {
        this.setState({ titleJob: e.target.value });
    }

    handleCityChange = (e) => {
        this.setState({ cityJob: e.target.value });
    }

    handleEmployerChange = (e) => {
        this.setState({ employer: e.target.value });
    }

    handleMonthJobStartChange = (e) => {
        const month = e.target.value;
        this.setState({ monthJobStart: month });
        localStorage.setItem('monthJobStart', month);
    }
    
    handleMonthJobEndChange = (e) => {
        const month = e.target.value;
        this.setState({ monthJobEnd: month });
        localStorage.setItem('monthJobEnd', month);
    }

    handleYearJobStartChange = (e) => {
        const year = e.target.value;
        this.setState({ yearJobStart: year });
        localStorage.setItem('yearJobStart', year);
    }

    handleYearJobEndChange = (e) => {
        const year = e.target.value;
        this.setState({ yearJobEnd: year});
        localStorage.setItem('yearJobEnd', year);
    }

    componentDidMount() {
        const monthJobStart = localStorage.getItem('monthJobStart') || '';
        const monthJobEnd = localStorage.getItem('monthJobEnd') || '';
        const yearJobStart = localStorage.getItem('yearJobStart') || '';
        const yearJobEnd = localStorage.getItem('yearJobEnd') || '';
        this.setState({ monthJobStart, monthJobEnd, yearJobStart, yearJobEnd });
    }

    handleDescriptionChange = (event) => {
        const content = event; 
        this.setState({ descriptionJob: content }, () => {
            this.handleData(); 
        });
    }

    handleData() {
        const { titleJob, cityJob, employer, monthJobStart, monthJobEnd, yearJobStart, yearJobEnd, descriptionJob} = this.state;
        const startDateJob = `${yearJobStart}-${String(monthJobStart).padStart(2, '0')}-01`;
        const endDateJob = `${yearJobEnd}-${String(monthJobEnd).padStart(2, '0')}-01`;
        this.data.startDateJob = startDateJob; 
        this.data.endDateJob = endDateJob; 

        const updatedData = {
            ...this.props.data, 
            titleJob,
            cityJob,
            employer,
            startDateJob,
            endDateJob,
            descriptionJob,
        };

        this.onDataCollected('experience', updatedData);
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
                                <h1 className="page-title">Tell us about your experience!</h1>
                                <h2 className="sub-title">Type all necessary information about your most recent job experience.</h2>
                                <div className="form3">
                                    <form>
                                        <div className="job-city-full-fields">
                                            <div className="job-field">
                                                <label>
                                                    Job Title:
                                                </label>
                                                <input type="text" placeholder="e.g HR Manager" className="form-name" autoComplete="given-job-title" value={this.state.titleJob} onChange={this.handleTitleChange}/>
                                            </div>
                                            <div className="city-field">
                                                <label>
                                                    City/Town:
                                                </label>
                                                <input type="text" placeholder="e.g Chisinau" className="form-name" autoComplete="given-city-job" value={this.state.cityJob} onChange={this.handleCityChange}/>
                                            </div>
                                        </div>
                                        <div className="employer-full-fields">
                                            <div className="employer-field">
                                                <label>
                                                    Employer:
                                                </label>
                                                <input type="text" placeholder="e.g Endava" className="form-name" autoComplete="given-employer" value={this.state.employer} onChange={this.handleEmployerChange}/>
                                            </div>
                                        </div>
                                        <div className="study-fields">
                                            <div className="date-study-full-field">
                                                <div className="date-study-field">
                                                    <div className="month-selector">
                                                    <label>
                                                        Start Date:
                                                    </label>
                                                        <select value={this.state.monthJobStart} className="form-name" onChange={this.handleMonthJobStartChange}>
                                                            <option value="">Month</option>
                                                            {this.renderOptions(months)}
                                                        </select>
                                                    </div>
                                                    <div className="year-selector">
                                                    <label></label>
                                                    <select value={this.state.yearJobStart} className="form-name" onChange={this.handleYearJobStartChange}>
                                                        <option value="">Year</option>
                                                        {this.renderOptions(years)}
                                                    </select>
                                                    </div>  
                                                    <div className="month-selector">
                                                    <label>
                                                        End Date:
                                                    </label>
                                                        <select value={this.state.monthJobEnd} className="form-name" onChange={this.handleMonthJobEndChange}>
                                                            <option value="">Month</option>
                                                            {this.renderOptions(months)}
                                                        </select>
                                                    </div>
                                                    <div className="year-selector">
                                                    <label></label>
                                                    <select value={this.state.yearJobEnd} className="form-name" onChange={this.handleYearJobEndChange}>
                                                        <option value="">Year</option>
                                                        {this.renderOptions(years)}
                                                    </select>
                                                    </div>  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="job-description-fields">
                                            <div className="job-box-field">
                                                <label>
                                                    Description:
                                                </label>
                                                <ReactQuill
                                                    className="form-name"
                                                    value={this.state.descriptionJob}
                                                    onChange={this.handleDescriptionChange}
                                                    placeholder="At the company I worked at several important projects..."
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

export default Experience