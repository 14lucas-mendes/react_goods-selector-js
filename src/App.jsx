import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [message, setMessage] = useState('No goods selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">{message}</h1>

      <h1 className="title is-flex is-align-items-center">
        {message}
        <button data-cy="ClearButton" type="button" className="delete ml-3" />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr key={good} data-cy="Good">
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setMessage(`${good} is selectde`)}
                >
                  +
                </button>
                ;
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
