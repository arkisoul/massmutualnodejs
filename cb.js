// const fs = require('fs');
// fs.readFile('./test.txt', (err, data) => {
//   if (err) {
//     console.error('Error! reading data', err);
//     return;
//   }
//   fs.writeFile('./test-copy.txt', data, (err) => {
//     console.error('Error! writing data', err)
//     // async/sync
//   })
// })

// getUser(useId, (userData) => {

//   try {
//     // code block
//     getUserProfile(userData, (profileData) => {
  
//       getUserTweets(profileData, (tweetsData) => {
  
//       })
//     })
    
//   } catch (error) {
    
//   }
// })

// getUser(useId, (userData) => {
// })
// getUserTweets(profileData, (tweetsData) => {  
// })
// getUserProfile(userData, (profileData) => {
// })

const add = (a, b, cb) => {
  setTimeout(() => {
    const c = a + b;
    cb(c);
  }, 1000);
  return 'hey';
}
const addPromisify = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const c = a + b;
      resolve(c);
    }, 1000);
  })
}

const total = add(10, 20, (res) => {
  console.log(res);
})
addPromisify(20, 30)
  .then((res) => {
    return addPromisify(res, 100)
  })
  .then(res2 => console.log(res2))
  .catch(err => {
    console.error(err)
  })
console.log(total);