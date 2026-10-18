
import React, { useState } from 'react';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  function createTicket(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const ticket = {
      id: Date.now(),
      title,
      description,
      priority,
      category,
      status: 'Open'
    };

    setTickets([ticket, ...tickets]);
    setTitle('');
    setDescription('');
  }

  function updateStatus(id, status) {
    setTickets(tickets.map(ticket =>
      ticket.id === id ? { ...ticket, status } : ticket
    ));
  }

  return (
    <main className="container">
      <header>
        <h1>Support Ticketing Tool</h1>
        <p>Create and manage support tickets in one place.</p>
      </header>

      <section className="panel">
        <h2>Create a Ticket</h2>
        <form onSubmit={createTicket}>
          <label>Ticket Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter ticket title"
            required
          />

          <label>Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Describe your issue"
            required
          />

          <label>Priority</label>
          <select value={priority} onChange={e => setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <label>Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>General</option>
            <option>Technical</option>
            <option>Billing</option>
            <option>Account</option>
          </select>

          <button type="submit">Create Ticket</button>
        </form>
      </section>

      <section className="panel">
        <h2>Ticket List ({tickets.length})</h2>
        {tickets.length === 0 && <p>No tickets yet. Create your first ticket above.</p>}

        {tickets.map(ticket => (
          <article className="ticket" key={ticket.id}>
            <h3>#{ticket.id} — {ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority} | Category: {ticket.category}</p>
            <label>Status</label>
            <select
              value={ticket.status}
              onChange={e => updateStatus(ticket.id, e.target.value)}
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </article>
        ))}
      </section>
    </main>
  );
}
