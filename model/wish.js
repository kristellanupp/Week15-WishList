const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'wishes.json');

module.exports = class Wish {

    constructor(wish) {
        this.description = wish;
    }

    saveWish() {
        fs.readFile(filePath, (error, fileContent)=> {
            let wishes = [];

            if(!error){
                wishes = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            wishes.push(this);

            fs.writeFile(filePath, JSON.stringify(wishes), (error) => {
                if(!error){
                    console.log('wish saved');
                }else {
                    console.log(error);
                }
            })
        });
    }
    static fetchAllWishes(callback){
        fs.readFile(filePath,(error, fileContent) => {
            if(error){
                callback([]);
            };

            callback(JSON.parse(fileContent));
        })
    }

    static deleteWish(i) {
        fs.readFile(filePath, (error, fileContent) => {
            let wishes = [];

            if(!error){
                wishes = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            wishes.splice(i, 1);

            fs.writeFile(filePath, JSON.stringify(wishes), (error) => {
                if(!error){
                    console.log('wish saved');
                }else {
                    console.log(error);
                }
            })
            
        })
    }
    
}