import React from 'react';
import PropTypes from 'prop-types';

class NoteItem extends React.Component {
    renderNotes = () => {
        return (
            <ul>
                {
                    this.props.notes.map((currentNote) => {
                        return <li key={currentNote.id}>
                            {currentNote.title}: {currentNote.content}
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
};

export default NoteItem;
