import { useState } from 'react';

export default function BookForm ({initialData, onSave, onCancel}) {
    const [form, setForm] = useState({...initialData});

    const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

    return (
        <form className="form-container"
        onSubmit={(e) => {
            e.preventDefault();
            onSave(form);
        }}>
            <input name="title" type="text" value={form.title} onChange={handleChange} placeholder="Title" />
            <input name="author" type="text" value={form.author} onChange={handleChange} placeholder="Author" />
            <input name="alreadyRead" type="checkbox" checked={form.alreadyRead} onChange={handleChange} />
            <label>Already Read</label>
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    )
}