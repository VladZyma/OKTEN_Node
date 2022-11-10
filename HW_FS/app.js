const fs = require('fs');

// fs.mkdir('./boys', (error) => {
//     if (error) {
//         console.log(error);
//     }
// });
//
// fs.mkdir('./girls', (error) => {
//     if (error) {
//         console.log(error);
//     }
// });

// fs.writeFile('./boys/max.json', JSON.stringify({name: 'Max', gender: 'male',}), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });
// fs.writeFile('./boys/bob.json', JSON.stringify({name: 'Bob', gender: 'male'}), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });
// fs.writeFile('./boys/anna.json', JSON.stringify({name: 'Anna', gender: 'female'}), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });

// fs.writeFile('./girls/inna.json', JSON.stringify({name: 'Inna', gender: 'female'}), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });
// fs.writeFile('./girls/alla.json', JSON.stringify({name: 'Alla', gender: 'female'}), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });
// fs.writeFile('./girls/bill.json', JSON.stringify({name: 'Bill', gender: 'male'}), (error) => {
//     if (error) {
//         console.log(error);
//     }
// });

// fs.readdir('./boys', (error, files) => {
//     if (error) {
//
//         console.log(error);
//
//     }
//     else {
//
//         files.forEach(file => {
//
//             fs.stat(`./boys/${file}`, (error, stats) => {
//
//                 if (error) {
//
//                     console.log(error);
//
//                 } else if (stats.isFile()) {
//
//                     fs.readFile(`./boys/${file}`, (error, data) => {
//
//                         let user = JSON.parse(data.toString());
//
//                         if (user.gender === 'female') {
//
//                             fs.rename(`./boys/${file}`, `./girls/${file}`, (error) => {
//
//                                 if (error) {
//
//                                     console.log(error);
//
//                                 }
//                             });
//                         }
//                     });
//                 }
//
//             });
//         });
//     }
// });

// fs.readdir('./girls', (error, files) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         files.forEach(file => {
//             fs.stat(`./girls/${file}`, (error, stats) => {
//                 if (error) {
//
//                     console.log(error);
//
//                 }
//                 else {
//
//                     if (stats.isFile()) {
//
//                         fs.readFile(`./girls/${file}`, (error, data) => {
//
//                             let user = JSON.parse(data.toString());
//
//                             if (user.gender === 'male') {
//
//                                 fs.rename(`./girls/${file}`, `./boys/${file}`, (error) => {
//
//                                     if (error) {
//
//                                         console.log(error);
//
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 }
//             });
//         });
//     }
// });


























