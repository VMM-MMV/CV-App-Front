import React from 'react';

class Hobby extends React.Component {

    constructor(props) {
        super(props);
        this.onDataCollected = props.onDataCollected;
        this.data = props.data;
    }

    handleData() {
        this.onDataCollected('hobby', this.data);

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
                                                <input type="text" required placeholder="e.g Listening to music, Coding all day all night" className="form-name" autoComplete="hobby" value={this.data.hobby} onChange={(e) => this.data.hobby = e.target.value}/>
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