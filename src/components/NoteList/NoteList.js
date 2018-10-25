import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../NoteItem/NoteItem';

class NoteList extends React.Component {
  renderList = () => {
      return (
         <NoteItem
             notes={this.props.notes}
             handleRemoveNote={this.props.handleRemoveNote}
             handleUpdateNote={this.props.handleUpdateNote}
         />
      )
  };

  render() {
    return (
        <section>
            <p>Here is a list of all your notes so far:</p>
            {this.renderList()}
        </section>
    );
  }
}

NoteList.propTypes = {
    notes: PropTypes.array,
    handleRemoveNote: PropTypes.func,
    handleUpdateNote: PropTypes.func,
};

export default NoteList;
