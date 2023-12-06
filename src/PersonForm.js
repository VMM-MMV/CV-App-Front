import React from 'react';

const cities = [
    "Chișinău", "Bălți", "Bender", "Briceni", "Vadul lui Vodă", "Vulcănești", "Glodeni",
    "Dondușeni", "Drochia", "Dubăsari", "Edineț", "Cahul", "Călărași", "Cantemir",
    "Căușeni", "Comrat", "Criuleni", "Leova", "Leușeni", "Nisporeni", "Anenii Noi",
    "Ocnița", "Orhei", "Rezina", "Rîbnița", "Rîșcani", "Soroca", "Strășeni", "Sîngerei",
    "Taraclia", "Telenești", "Tiraspol", "Ungheni", "Fălești", "Florești", "Hîncești",
    "Cădăr-Lunga", "Cimișlia", "Șoldănești", "Ștefan Vodă", "Ialoveni", "La Sasa Acasa"
];

const countries = [
    { name: 'Moldova', code: '+373' },
    { name: 'Romania', code: '+40' },
    { name: 'Japan', code: '+81' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Canada', code: '+1' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'Australia', code: '+61' },
    { name: 'China', code: '+86' },
    { name: 'Brazil', code: '+55' },
    { name: 'India', code: '+91' },
    { name: 'South Korea', code: '+82' },
    { name: 'Spain', code: '+34' },
    { name: 'Italy', code: '+39' },
    { name: 'Mexico', code: '+52' },
    { name: 'Netherlands', code: '+31' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Singapore', code: '+65' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'South Africa', code: '+27' },
    { name: 'Russia', code: '+7' },
    { name: 'Argentina', code: '+54' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Ireland', code: '+353' },
    { name: 'Austria', code: '+43' },
    { name: 'Belgium', code: '+32' },
    { name: 'Norway', code: '+47' },
    { name: 'Denmark', code: '+45' },
    { name: 'Greece', code: '+30' },
    { name: 'Turkey', code: '+90' },
    { name: 'Egypt', code: '+20' },
    { name: 'Thailand', code: '+66' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Philippines', code: '+63' },
    { name: 'Israel', code: '+972' },
    { name: 'Portugal', code: '+351' },
    { name: 'Poland', code: '+48' },
    { name: 'Hungary', code: '+36' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Chile', code: '+56' },
    { name: 'Peru', code: '+51' },
    { name: 'Colombia', code: '+57' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Kenya', code: '+254' },
    { name: 'South Sudan', code: '+211' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Morocco', code: '+212' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Algeria', code: '+213' },
];

class PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birthdate: '',
            day: '',
            month: '',
            year: '',
            name: props.data.name || '',
            lastname: props.data.lastname || '',
            address: props.data.address || '',
            city: props.data.city || '',
            nationality: props.data.nationality || '',
            sex: props.data.sex || '',
            civilStatus: props.data.civilStatus || '',
            hasKids: props.data.hasKids || '',
            email: props.data.email || '',
            countryCode: props.data.countryCode || '',
            phoneNumber: props.data.phoneNumber || '',
        }
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }

    validateFields = () => {
        // Example validation logic
        const { name, lastname, email, address, city, nationality,
            day, month, year, sex, civilStatus, hasKids, phoneNumber, countryCode } = this.state;
        return name.trim() !== '' && lastname.trim() !== '' && email.trim() !== '' && address.trim() !== ''
            && city.trim() !== '' && nationality.trim() !== '' && sex.trim() !== '' && countryCode.trim() !== ''
            && phoneNumber.trim() !== '' && civilStatus.trim() !== '' && hasKids.trim() !== '' && month.trim() !== ''
            && day.trim() !== '' && year.trim() !== '';
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    handleLastnameChange = (e) => {
        this.setState({ lastname: e.target.value });
    }

    handleAddressChange = (e) => {
        this.setState({ address: e.target.value });
    }

    handleCityChange = (e) => {
        this.setState({ city: e.target.value });
    }

    handleNationalityChange = (e) => {
        this.setState({ nationality: e.target.value });
    }

    handleSexChange = (e) => {
        this.setState({ sex: e.target.value });
    }

    handleCivilStatusChange = (e) => {
        this.setState({ civilStatus: e.target.value });
    }

    handleHasKidsChange = (e) => {
        this.setState({ hasKids: e.target.value });
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleCountryCodeChange = (e) => {
        this.setState({ countryCode: e.target.value });
    }

    handlePhoneNumberChange = (e) => {
        this.setState({ phoneNumber: e.target.value });
    }

    handleDayChange = (e) => {
        const day = e.target.value;
        this.setState({ day: day });
        localStorage.setItem('day', day);
    }
    
    handleMonthChange = (e) => {
        const month = e.target.value;
        this.setState({ month: month });
        localStorage.setItem('month', month);
    }
    
    handleYearChange = (e) => {
        const year = e.target.value;
        this.setState({ year: year });
        localStorage.setItem('year', year);
    }

    componentDidMount() {
        const day = localStorage.getItem('day') || '';
        const month = localStorage.getItem('month') || '';
        const year = localStorage.getItem('year') || '';
        this.setState({ day, month, year });
    }

    handleData() {
        const { day, month, year, name, lastname, address, city, nationality, sex, civilStatus, hasKids, email, countryCode, phoneNumber } = this.state;
        const birthdate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        this.data.birthdate = birthdate;

        const updatedData = {
            ...this.props.data,
            name,
            lastname,
            address,
            city,
            nationality,
            sex,
            civilStatus,
            hasKids,
            email,
            countryCode,
            phoneNumber,
            birthdate,
        };

        this.onDataCollected('person', updatedData);

    }

    renderOptions = (array) => array.map(value => (
        <option key={value} value={value}>{value}</option>
    ));


    render() {

        const days = Array.from({ length: 31 }, (_, i) => i + 1);
        const months = Array.from({ length: 12 }, (_, i) => i + 1);
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

        return (
        <div id="parent">
            <div className="aside-right">
                <div className="container">
                    <div className="main-page">
                        <div className="space"> 
                            <h1 className="page-title">Let's start to create your CV together!</h1>
                            <h2 className="sub-title">Type the all necessary information about your personality in order to contact you soon!</h2>
                            <div className="form">
                                <form>
                                    <div className="name-full-fields">
                                        <div className="first-name-field" name="enter-first-name">
                                            <label>
                                                First Name:
                                            </label>
                                            <input type="text" required placeholder="e.g Michael" className="form-name" autoComplete="name" value={this.state.name} onChange={this.handleNameChange}/>
                                        </div>
                                        <div className="last-name-field" name="enter-last-name">
                                            <label>
                                                Last Name:
                                            </label>
                                            <input type="text" required placeholder="e.g Carlson" className="form-name" autoComplete="family-name" value={this.state.lastname} onChange={this.handleLastnameChange}/>
                                        </div>
                                    </div>
                                    <div className="address-full-fields">
                                        <div className="address-field">
                                            <label>
                                                Address:
                                            </label>
                                            <input type="text" placeholder="e.g str.Banulescu Bodoni 12" className="form-name" autoComplete="street-address" value={this.state.address} onChange={this.handleAddressChange}/>
                                        </div>
                                        <div className="city-field">
                                            <label>
                                                City:
                                            </label>
                                            <select className="form-name" value={this.state.city} onChange={this.handleCityChange}>
                                                <option value="">Select city</option>
                                                {cities.map(c => <option key={c} value={c}>{c}</option>)}
                                            </select>
                                        </div>
                                        <div className="nationality-field">
                                            <label>
                                                Nationality:
                                            </label>
                                            <input type="text" placeholder="e.g Moldovan" className="form-name" autoComplete="nationality" value={this.state.nationality} onChange={this.handleNationalityChange}/>
                                        </div>
                                    </div>
                                    <div className="coming-from-fields">
                                        <div className="date-birth-sex-field">
                                            <div className="date-birth-field">
                                                <div className="date-selector">
                                                <label> 
                                                    Date of Birth:
                                                </label>
                                                    <select value={this.state.day} className="form-name" onChange={this.handleDayChange}>
                                                        <option value="">Day</option>
                                                        {this.renderOptions(days)}
                                                    </select>
                                                </div>
                                                <div className="month-selector">
                                                <label></label>
                                                    <select value={this.state.month} className="form-name" onChange={this.handleMonthChange}>
                                                        <option value="">Month</option>
                                                        {this.renderOptions(months)}
                                                    </select>
                                                </div>
                                                <div className="year-selector">
                                                <label></label>
                                                <select value={this.state.year} className="form-name" onChange={this.handleYearChange}>
                                                    <option value="">Year</option>
                                                    {this.renderOptions(years)}
                                                </select>
                                                </div>  
                                            </div>
                                        </div>
                                        <div className="sex-status-field">
                                            <label>
                                                Sex:
                                            </label>
                                            <select value={this.state.sex} className="form-name" onChange={this.handleSexChange}>
                                                <option value="">Select gender</option>
                                                <option value="MALE">Male</option>
                                                <option value="FEMALE">Female</option>
                                            </select>
                                        </div>
                                    </div> 
                                    <div className="family-status-full-fields">
                                        <div className="civil-status-field">
                                            <label>
                                                Civil Status:
                                            </label>
                                            <select className="form-name" value={this.state.civilStatus} onChange={this.handleCivilStatusChange}>
                                                <option value="">Select status</option>
                                                <option value="Unmarried">Unmarried</option>
                                                <option value="Married">Married</option>
                                                <option value="Divorced">Divorced</option>
                                                <option value="Widowed">Widowed</option>
                                            </select>
                                        </div>
                                        <div className="kids-status-field">
                                            <label>
                                                Kids:
                                            </label>
                                            <select className="form-name" value={this.state.hasKids} onChange={this.handleHasKidsChange}>
                                                <option value="">Select option</option>
                                                <option value="YES">Yes</option>
                                                <option value="NO">No</option>
                                            </select>
                                        </div>
                                    </div> 
                                    <div className="email-number-full-fields">
                                        <div className="email-address-field">
                                            <label>Email:</label>
                                            <input type="email" required placeholder="Enter email" className="form-name" autoComplete="email" value={this.state.email} onChange={this.handleEmailChange}/>
                                        </div>
                                        <div className="phone-number-field">
                                            <div className="phone-select-container">
                                            <label>
                                                Phone Number:
                                            </label>
                                                <select className="form-name" value={this.state.countryCode} onChange={this.handleCountryCodeChange}>
                                                <option value="">Select Code</option>
                                                    {countries.map((country, index) => (
                                                        <option key={country.code + index} value={country.code}>
                                                            {country.name} ({country.code})
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="phone-field">
                                            <input type="text" required placeholder="Phone Number" className="form-name" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange}/>
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

export default PersonForm;

            