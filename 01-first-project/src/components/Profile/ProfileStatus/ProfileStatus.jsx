import styles from './ProfileStatus.module.css'

import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        })
    }

    render() {

        const status = this.state.status;

        return (
            <>
                {
                    this.state.editMode
                        ? <div>
                            <input onBlur={this.deactivateEditMode}
                                   onChange={this.onStatusChange}
                                   type="text"
                                   value={status}
                                   autoFocus={true}
                            />
                        </div>
                        : <span onDoubleClick={this.activateEditMode}>
                            {status ?? 'Статус не задан'}
                        </span>
                }
            </>
        );
    }
}

export default ProfileStatus;