import React from 'react';
import uuid from 'uuid/v4';
import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';
import NoteList from '../NoteList/NoteList';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

  handleAddNote = (note) => {
    note.createdOn = new Date();
    note.id = uuid();
    return this.setState((previousState) => {
     return {
       notes: [...previousState.notes, note],
     }
    });
  };

  handleRemoveNote = (noteToRemove) => {
      this.setState((previousState) => {
          notes: previousState.notes.filter(currentNote => currentNote.id !== noteToRemove.id);
      })
  };

  handleUpdateNote = (noteToUpdate, UpdatedNote) => {
      for (let i = 0; i < this.state.notes.length; i++) {
          if (noteToUpdate === this.state.notes[i]) {
              this.setState((previousState) => {
                  previousState.notes[i].title = UpdatedNote.title;
                  previousState.notes[i].content = UpdatedNote.content;
              })
          }
      }
  };

  render() {
    return (
     <section>
       <h2>Dashboard</h2>
       <p>Add new Note</p>
       <NoteCreateForm
           handleAddNote = {this.handleAddNote}
       />
       <NoteList
           notes={this.state.notes}
           handleRemoveNote={this.handleRemoveNote}
           handleUpdateNote={this.handleUpdateNote}
       />
     </section>
    );
  }
}

export default Dashboard;
