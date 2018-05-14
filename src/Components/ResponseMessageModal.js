import React, { Component } from 'react';

class ResponseMessageModal extends Component {

    render() {
        const response = this.props.apiResponse;
        const isSuccess = this.props.isSuccess;
        const hasResponse = this.props.apiResponse.message !== "";

        return (
            <div class="container response">
                {isSuccess ? (
                    <div class="alert alert-success" role="alert">
                        <strong>{response.message}</strong>
                    </div>) :
                    [hasResponse ?
                        (<div class="alert alert-danger" role="alert" >
                            <strong>{response.message}</strong>
                        </div>) : null

                    ]}
            </div>
        );
    }
}

export default ResponseMessageModal;