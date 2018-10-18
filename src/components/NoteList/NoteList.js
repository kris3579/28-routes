import React from 'react';
import PropTypes from 'prop-types';

class NoteList extends React.Component {
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
            <p>Here is a list of all your notes so far:</p>
            {this.renderNotes()}
        </section>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
};

export default NoteList;
