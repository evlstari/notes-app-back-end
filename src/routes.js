const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    // untuk mendapatkan data notes dari yang diinputkan user
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    // menggunakan tanda * pada nilai origin untuk memperbolehkan
    // data dikonsumsi oleh seluruh origin
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    // ini untuk menyimpan data yg diinputkan user
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    // ini untuk menampilkan data yang sudah diinputkan user tadi berdasarkan id
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    // ini untuk mengedit notes
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    // ini untuk menghapus notes berdasarkan id
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
