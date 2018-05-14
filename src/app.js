import React, { Component } from "react";
import MailClientModal from "./Components/MailClientModal";
import ResponseMessageModal from "./Components/ResponseMessageModal";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse:{message:""},
            isSuccess: false

        }
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleComplete = (response,result) => {
        this.setState({ apiResponse: response });
        this.setState({ isSuccess: result });
    }

    render() {
        return (
            [<MailClientModal onComplete={this.handleComplete} />,
            <ResponseMessageModal apiResponse={this.state.apiResponse}
            isSuccess={this.state.isSuccess}/>] 
        );
    }
}

export default App;