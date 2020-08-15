var firebaseConfig = {
  apiKey: "AIzaSyAnw2TbKVlVrDkaklNhdmt79ApaH6lxQ0U",
  authDomain: "agendamento-34e94.firebaseapp.com",
  databaseURL: "https://agendamento-34e94.firebaseio.com",
  projectId: "agendamento-34e94",
  storageBucket: "agendamento-34e94.appspot.com",
  messagingSenderId: "695350218010",
  appId: "1:695350218010:web:ecdd5ab2bd320fca0d70a3",
  measurementId: "G-YDX5QTX7CX"
};
firebase.initializeApp(firebaseConfig);

function create(data, table) {
  return firebase.database().ref().child(table).push(data, () => {
      console.info('Opa, passou aqui. Então deu Certo')
  })
}
