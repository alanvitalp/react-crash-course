import React from 'react';

import { connect } from 'react-redux';

function Video({ activeLesson, activeModule }) {
  console.log(activeLesson);
  console.log(activeModule);
  return (
    <div>
      <strong>Modulo </strong>
      <span>Aula</span>
    </div>
  );
}

export default connect(state => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video)