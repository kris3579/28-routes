import React from 'react';
import uuid from 'uuid/v4';
import NoteCreateForm from '../note-create-form/note-create-form';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

  // handleAddNote = (note) => {
  //     note.createdOn = new Date();
  //     note.id = uuid();
  //     return this.setState((previousState) => {
  //         return {
  //             notes: [...previousState.notes, note],
  //         }
  //     });
  // };

  render() {
    return (
            <section>
                <h2>Dashboard</h2>
                <p>Add new note</p>
                <p>Your notes:</p>
            </section>
    );
  }
}

export default Dashboard;
