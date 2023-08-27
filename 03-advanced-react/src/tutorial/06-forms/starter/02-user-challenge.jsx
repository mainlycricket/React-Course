import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [persons, setPersons] = useState(data);
  const [name, setName] = useState('');

  function addPerson(e) {
    e.preventDefault();
    if (!name?.trim()) {
      alert('name is required!');
    }
    persons.push({ id: Date.now(), name });
    setPersons(persons);
    setName('');
  }

  function removePerson(id) {
    const updatedPersons = persons.filter((person) => person.id != id);
    setPersons(updatedPersons);
  }

  return (
    <div>
      <form className="form" onSubmit={addPerson}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3>Users</h3>
      {persons.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              className="btn"
              onClick={() => {
                removePerson(person.id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
