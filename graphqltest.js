//import fetch from 'node-fetch';
const fetch = require('node-fetch');

async function getData() {
    const data = JSON.stringify({
        query: `{
  categoryList(filters: {ids: {in: ["3","3607","3610","3679","3710"]}}) {
    name
    url_path
    children_count
    children {
        name      
        url_path
    }
  }
}`});

    const response = await fetch(
        'http://40.74.246.212/graphql',
        {
            method: 'post',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length,
                'User-Agent': 'Node',
            },
        }
    );
    const json = await response.json();
    console.log(json.data);
}
module.exports = { getData };