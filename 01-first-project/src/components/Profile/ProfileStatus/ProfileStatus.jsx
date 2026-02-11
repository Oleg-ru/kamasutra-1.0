import styles from './ProfileStatus.module.css'

import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {

        const {
            status
        } = this.props;

        return (
            <>
                {
                    this.state.editMode
                        ? <div>
                            <input onBlur={this.deactivateEditMode}
                                   type="text"
                                   value={status}
                                   autoFocus={true}
                            />
                        </div>
                        : <span onDoubleClick={this.activateEditMode}>
                            {status}
                        </span>
                }
            </>
        );
    }
}

export default ProfileStatus;