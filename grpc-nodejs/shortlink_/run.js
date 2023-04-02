const client = require('./client');

// read data
// client.getAll({}, (error, mahasiswa) => {
//   if (!error) {
//     console.log('getAll');
//     console.log(mahasiswa);
//   } else {
//     console.error(error);
//   }
// });

client.getLink({ id: 1 }, (error, link) => {
  if (!error) {
    console.log('getlink');
    console.log(link);
  } else {
    console.error(error);
  }
});

// // add mahasiswa
// client.addMahasiswa(
//   {
//     id: "3",
//     nama: "Rudi",
//     nrp: "5119",
//     nilai: 90
//   },
//   (error, mahasiswa) => {
//     if (!error) {
//       console.log('successfully create data')
//       console.log(mahasiswa)
//     } else {
//       console.error(error)
//     }
//   }
// )

// // edit mahasiswa
// client.editMahasiswa(
//   {
//     id: "2",
//     nama: "Budi edited",
//     nrp: "5118 edited",
//     nilai: 100
//   },
//   (error, mahasiswa) => {
//     if (!error) {
//       console.log('successfully edit data')
//       console.log(mahasiswa)
//     } else {
//       console.error(error)
//     }
//   }
// )

// // delete mahasiswa
// client.deleteMahasiswa(
//   {
//     id: "2"
//   },
//   (error, mahasiswa) => {
//     if (!error) {
//       console.log('successfully delete data')
//       console.log(mahasiswa)
//     } else {
//       console.error(error)
//     }
//   }
// )
