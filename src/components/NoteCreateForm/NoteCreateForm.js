import React from 'react';
import PropTypes from 'prop-types';
// import NoteList from '../NoteList/NoteList';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
  }

  // renderNotes = () => {
  //   return (
  //     <ul>
  //       {
  //         this.state.notes.map((currentNote) => {
  //           return <li key={currentNote.id}>
  //             {currentNote.title}: {currentNote.content}
  //           </li>
  //         })
  //       }
  //     </ul>
  //   );
  // };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Create Note</button>
        {/*<p>Here is a list of all your notes so far:</p>*/}
        {/*<NoteList NoteList={this.renderNotes}/>*/}
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  handleAddNote : PropTypes.func,
};

export default NoteCreateForm;
