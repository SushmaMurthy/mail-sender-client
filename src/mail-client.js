import React, {Component} from "react";
import request from "request-promise";

class MailClient extends Component {

    constructor(props) {
        super(props);
        this.state = null;
        this.onSubmit = this.handleSubmit.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
    }

    handleDataChange(e) {
        const control = e.target;
        this.setState(
            {
                [control.id]: control.value
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.sendMail()
            .then(res => console.log(`Mail sent successfully ${res}`))
            .catch(err => console.log(`Error response returned from API ${err}`));
    }

    	sendMail = async (self) => {
            const response = await fetch('http://localhost:3001/api/sendMail', {
                method: 'POST',
                body: JSON.stringify({
                    "recipient": this.state.email,
                    "cc": this.state.carbonCopy,
                    "bcc": this.state.blindCarbonCopy,
                    "subject": this.state.emailSubject,
                    "text": this.state.emailBody
                }),
                headers: { "Content-Type": "application/json" }
            });
            const body = await response.json();
            if (response.status !== 200) throw Error(body.message);
            return body;
        };

    /*sendMail = () => {
        const options = {
            url: "http://localhost:3001/api/sendMail",
            method: 'POST',
            data: {
                "recipient": this.state.email,
                "Cc": this.state.carbonCopy,
                "Bcc": this.state.blindCarbonCopy,
                "subject": this.state.emailSubject,
                "text": this.state.emailBody
            },
            headers: {"Content-Type": "application/json"}
        };
        return request(options);
    };*/

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <form className="form-horizontal" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="email" className="col-sm-2 control-label">To:</label>
                                <div className="col-sm-10">
                                    <input type="email" multiple
                                           pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b"
                                           className="form-control" id="email" placeholder="Email"
                                           onChange={this.handleDataChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="carbonCopy" className="col-sm-2 control-label">CC:</label>
                                <div className="col-sm-10">
                                    <input type="email" multiple
                                           pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b"
                                           className="form-control" id="carbonCopy"
                                           placeholder="Carbon copy addresses..." onChange={this.handleDataChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="blindCarbonCopy" className="col-sm-2 control-label">BCC:</label>
                                <div className="col-sm-10">
                                    <input type="email" multiple
                                           pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b"
                                           className="form-control" id="blindCarbonCopy"
                                           placeholder="Blind carbon copy addresses..."
                                           onChange={this.handleDataChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="emailSubject" className="col-sm-2 control-label">Subject:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="emailSubject"
                                           placeholder="Subject of email..." onChange={this.handleDataChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="emailBody" className="col-sm-2 control-label">Email body:</label>
                                <div className="col-sm-10">
                                    <textarea id="emailBody" className="form-control" rows="20" placeholder="Message..."
                                              onChange={this.handleDataChange}></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-6 col-md-12">
                                    <button type="submit" className="btn btn-primary btn-lg">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default MailClient;