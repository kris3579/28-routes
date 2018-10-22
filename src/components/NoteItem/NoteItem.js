import React from 'react';
import PropTypes from 'prop-types';
import NoteUpdateForm from '../NoteUpdateForm/NoteUpdateForm';

class NoteItem extends React.Component {
    renderNotes = () => {
        return (
            <ul>
                {
                    this.props.notes.map((currentNote) => {
                        return <li key={currentNote.id}>
                            {currentNote.title}: {currentNote.content}
                            <button onClick={this.props.handleRemoveNote.bind(null, currentNote)}>Delete Note</button>
                            <NoteUpdateForm
                                currentNote={currentNote}
                                handleUpdateNote={this.props.handleUpdateNote}
                            />
                        </li>
                    })
                }
            </ul>
        );
    };

    render() {
        return (
            <section>
                {this.renderNotes()}
            </section>
        )
    }
}

NoteItem.propTypes = {
    notes: PropTypes.array,
    handleRemoveNote: PropTypes.func,
    handleUpdateNote: PropTypes.func,
};

export default NoteItem;
