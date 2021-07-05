import React from 'react';

const Event = ({ dispatch, event }) => {
      const id = event.id;
      const handelClickDeleteButton = () => {
        dispatch( { type: 'DELETE_EVENT', id })
      }

      return (
        <tr key={index}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
          <td><button type="button" className="btn-danger" onClick={handelClickDeleteButton}>削除</button></td>
        </tr>)
}

export default Event;
// {

// }
