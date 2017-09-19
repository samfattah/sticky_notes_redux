import React from 'react';
import { connect } from 'react-redux';

const NoteForm = ({ dispatch }) => {
let input;

  return(
    <div>
      <h3>Add A Note</h3>
      <form
        onSubmit={ e => {
          e.preventDefault();
          dispatch({ type: 'ADD_NOTE', note: input.value })
          input.value = null;
        }}
      >
        <input ref={ n => input = n } />
      </form>
    </div>
  )
}

export default connect()(NoteForm);