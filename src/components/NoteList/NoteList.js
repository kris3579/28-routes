import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../NoteItem/NoteItem';

class NoteList extends React.Component {
  renderList = () => {
      return (
         <NoteItem notes={this.props.notes}/>
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
};

export default NoteList;
