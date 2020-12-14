import {Component} from "react/cjs/react.production.min";

class Status extends Component {

    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                <p>STATUSBAR</p>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input  autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default Status;