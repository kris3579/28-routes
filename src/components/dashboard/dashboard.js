import React from 'react';
import NoteCreateForm from "../NoteCreateForm/NoteCreateForm";
import uuid from 'uuid/v4';


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

  render() {
    return (
     <section>
       <h2>Dashboard</h2>
       <p>Add new Note</p>
       <NoteCreateForm handleAddNote={this.handleAddNote}/>
     </section>
    );
  }
}

export default Dashboard;
