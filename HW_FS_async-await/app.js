const fs = require('fs/promises');
const path = require('path');
//====== fs = require('fs') ======
// fs.mkdir('./boys', (error) => {
//     if (error) console.log(error);
// });
// fs.mkdir('./girls', (error) => {
//     if (error) console.log(error);
// });

// fs.writeFile('./boys/max.json', JSON.stringify({name: 'Max', gender: 'male'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./boys/bob.json', JSON.stringify({name: 'Bob', gender: 'male'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./boys/bill.json', JSON.stringify({name: 'Bill', gender: 'male'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./boys/anna.json', JSON.stringify({name: 'Anna', gender: 'female'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./boys/inna.json', JSON.stringify({name: 'Inna', gender: 'female'}), (error) => {
//     if (error) console.log(error);
// });

// fs.writeFile('./girls/alla.json', JSON.stringify({name: 'Alla', gender: 'female'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./girls/sveta.json', JSON.stringify({name: 'Sveta', gender: 'female'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./girls/elena.json', JSON.stringify({name: 'Elena', gender: 'female'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./girls/vlad.json', JSON.stringify({name: 'Vlad', gender: 'male'}), (error) => {
//     if (error) console.log(error);
// });
// fs.writeFile('./girls/viktor.json', JSON.stringify({name: 'Viktor', gender: 'male'}), (error) => {
//     if (error) console.log(error);
// });
//============================================

// async function checkBoys() {
//     const boysFolderPath = path.join(__dirname, 'boys');
//
//     try {
//         const boysFiles = await fs.readdir(boysFolderPath, {withFileTypes: true});
//         // console.log(boysFiles);
//         for (const file of boysFiles) {
//
//             if (file.isFile()) {
//                 const filePath = path.join(boysFolderPath, file.name)
//                 const data = await fs.readFile(filePath);
//                 const user = JSON.parse(data.toString());
//
//                 if (user.gender === 'female') {
//                     await fs.rename(filePath,  path.join(__dirname, 'girls', file.name));
//                 }
//
//             }
//         }
//     } catch (e) {
//         console.log(e);
//     }
//
//
// }

// async function checkGirls() {
//     const girlsFolderPath = path.join(__dirname, 'girls');
//
//     try {
//         const files = await fs.readdir(girlsFolderPath, {withFileTypes: true});
//         for (const file of files) {
//             if (file.isFile()) {
//                 const filePath = path.join(girlsFolderPath, file.name);
//                 const data = await fs.readFile(filePath);
//                 const user = JSON.parse(data.toString());
//                 if (user.gender === 'male') {
//                     await fs.rename(filePath, path.join(__dirname, 'boys', file.name));
//                 }
//             }
//         }
//     } catch (e) {
//         console.log(e);
//     }
//
// }

// checkBoys();
// checkGirls();

//==== Обьеденяем эти две ф-ии =======

async function sortGender(folder, writeFolder, gender) {
    const folderPath = path.join(__dirname, folder);

    const files = await fs.readdir(folderPath, {withFileTypes: true});

    try {
        for (const file of files) {
            if (file.isFile()) {
                const filePath = path.join(folderPath, file.name);
                const data = await fs.readFile(filePath);
                const user = JSON.parse(data.toString());

                if (user.gender === gender) {
                    await fs.rename(filePath, path.join(__dirname, writeFolder, file.name));
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
}
// sortGender('boys', 'girls', 'female');
// sortGender('girls', 'boys', 'male');