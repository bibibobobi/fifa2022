import React from 'react';
import QAList from './list/qa-list';

export default function QaList(props) {
  return (
    <div>
      <QAList questions={props.questions} />
    </div>
  );
}
