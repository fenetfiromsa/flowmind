import { useState } from "react";
import { Plus, Trash2, Edit2 } from "lucide-react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState("");

  // Add Note
  function addNote() {
    if (!newNote.trim()) return;
    const note = {
      id: Date.now(),
      text: newNote,
      createdAt: new Date().toLocaleString(),
    };
    setNotes([note, ...notes]);
    setNewNote("");
  }

  // Delete Note
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  // Update Note
  function saveUpdatedNote(id) {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: editText } : note
      )
    );
    setEditing(null);
  }

  // Filter Notes
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Notes</h1>

      {/* Add + Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a new note..."
          className="flex-1 p-3 border rounded-lg"
        />

        <button
          onClick={addNote}
          className="bg-indigo-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
        >
          <Plus size={18} />
          Add Note
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg mb-6"
      />

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length === 0 ? (
          <p className="text-gray-500">No notes found.</p>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-5 rounded-xl shadow border relative"
            >
              {/* Editing Mode */}
              {editing === note.id ? (
                <>
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    rows={4}
                  />
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => saveUpdatedNote(note.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditing(null)}
                      className="px-4 py-2 bg-gray-300 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Note Text */}
                  <p className="text-gray-800 mb-4">{note.text}</p>

                  {/* Footer */}
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{note.createdAt}</span>

                    <div className="flex items-center gap-3">
                      <Edit2
                        size={18}
                        className="cursor-pointer hover:text-blue-500"
                        onClick={() => {
                          setEditing(note.id);
                          setEditText(note.text);
                        }}
                      />
                      <Trash2
                        size={18}
                        className="cursor-pointer hover:text-red-600"
                        onClick={() => deleteNote(note.id)}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
