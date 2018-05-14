import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
	content: {
		left: '10%',
		right: '10%',
		bottom: '10%',
		marginRight: '10%',
		transform: 'translate(10%, 10%)',
		padding: '0px'
	}
};

Modal.setAppElement('#root');

class MailClientModal extends Component {
	constructor(props) {
		super(props);
		this.state =
			{
				apiResponse: "",
				modalIsOpen: false
			};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDataChange = this.handleDataChange.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	handleDataChange(e) {
		const control = e.target;
		this.setState({
			[control.id]: control.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("Invoking mail sender api..");
		this.sendMail(this)
			.then(res => {
				console.log("Email sent successfully");
				this.setState({ apiResponse: res });
				this.props.onComplete(this.state.apiResponse, true);
			})
			.catch(err => {
				console.log("Error while sending email " + JSON.stringify(err));
				this.setState({ apiResponse: err });
				this.props.onComplete(this.state.apiResponse, false);
			});		
		this.props.onComplete({ message: "Sending..." }, true);
		this.closeModal();

	}

	// TODO fetch the api end point from config file
	sendMail = async (self) => {
		const response = await fetch('http://ec2-13-210-176-90.ap-southeast-2.compute.amazonaws.com/api/sendMail', {
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
		if (response.status !== 200) {
			throw Error(body.message, body.code);
		}
		return body;
	};

	render() {
		return (
			<div>
				<button className="btn btn-primary compose" onClick={this.openModal}>Compose</button>
				<Modal
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Mail client">

					<form className="form-horizontal" onSubmit={this.handleSubmit}>
						<div className="modal-header">
							<h5 className="modal-title">New message</h5>
							<button type="button" className="close" onClick={this.closeModal}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="form-group">
								<div className="row">
									<div className="col-md-1">
										<label for="email" className="col-sm-2 control-label">To</label>
									</div>
									<div className="col-md-11">
										<input type="email" required multiple className="form-control" id="email" placeholder="Email" onChange={this.handleDataChange} />
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="row">
									<div className="col-md-1">
										<label for="email" className="col-sm-2 control-label">CC</label>
									</div>
									<div className="col-md-11">
										<input type="email" multiple className="form-control" id="carbonCopy" placeholder="Carbon copy addresses..." onChange={this.handleDataChange} />
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="row">
									<div className="col-md-1">
										<label for="email" className="col-sm-2 control-label">BCC</label>
									</div>
									<div className="col-md-11">
										<input type="email" multiple className="form-control" id="blindCarbonCopy" placeholder="Blind carbon copy addresses..." onChange={this.handleDataChange} />
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="row">
									<div className="col-md-1">
										<label for="text" className="col-sm-2 control-label">Subject</label>
									</div>
									<div className="col-md-11">
										<input type="text" required className="form-control" id="emailSubject" placeholder="Subject of email..." onChange={this.handleDataChange} />
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="row">
									<div className="col-md-12">
										<textarea id="emailBody" required className="form-control" rows="20" placeholder="Message..." onChange={this.handleDataChange}></textarea>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" onClick={this.closeModal}>Close</button>
							<button type="submit" className="btn btn-primary" >Send mail</button>
						</div>
					</form>
				</Modal>
			</div>
		);
	}
}

export default MailClientModal;