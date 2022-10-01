const note = {
    id: 1,
    title: 'My first note',
    date: '25/04/1977',
  };

  
  // Using forEach
Object.entries(note).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  // Using a for loop
  for (let [key, value] of Object.entries(note)) {
    console.log(`${key}: ${value}`);
  }