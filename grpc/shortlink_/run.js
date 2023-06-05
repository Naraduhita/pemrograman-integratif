const client = require('./client');

// read data
client.getAll({}, (error, links) => {
  if (!error) {
    console.log('Successfully fetch data (Get All)');
    console.log(links);
  } else {
    console.error(error);
  }
});

client.getLink({ id: 1 }, (error, link) => {
  if (!error) {
    console.log('Successfully fetch data (Get Link By Id)');
    console.log(link);
  } else {
    console.error(error);
  }
});

// add link
client.addLink(
  {
    title: 'Coba2',
    destination: 'Youtube.com',
    shortlink: 'coba2',
  },
  (error, link) => {
    if (!error) {
      console.log('Successfully Create Data');
      console.log(`Title: ${link.title} Berhasil DISIMPAN`);
    } else {
      console.error(error);
    }
  }
);

// edit link
client.editLink(
  {
    id: '1',
    title: 'Coba3new',
    destination: 'newdestination.com',
    shortlink: 'coba3new',
  },
  (error, link) => {
    if (!error) {
      console.log('Successfully Edit Data');
      console.log(link);
    } else {
      console.error(error);
    }
  }
);

// delete link;
client.deleteLink(
  {
    id: 3,
  },
  (error, link) => {
    if (!error) {
      console.log('Successfully Delete Data');
    } else {
      console.error(error);
    }
  }
);

//open link

client.openLink(
  {
    id: 1,
  },
  (error, idLink) => {
    if (!error) {
      console.log(idLink);
      console.log(`Successfully Update Count Data`);
    } else {
      console.error(error);
    }
  }
);
