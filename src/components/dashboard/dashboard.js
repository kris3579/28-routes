import React from 'react';
import NoteCreateForm from "../NoteCreateForm/NoteCreateForm";
import uuid from 'uuid/v4';
import NoteList from "../NoteList/NoteList";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

    renderNotes = () => {
        return (
            <ul>
                {
                    this.state.notes.map((currentNote) => {
                        return <li key={currentNote.id}>
                            {currentNote.title}: {currentNote.content}
                        </li>
                    })
                }
            </ul>
        );
    };

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
       <p>Here is a list of all your notes so far:</p>
       {this.renderNotes()}
     </section>
    );
  }
}

export default Dashboard;
