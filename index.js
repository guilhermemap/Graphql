const https = require('https');

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
}`,
});

const options = {
    hostname: '40.74.246.212',
    path: '/graphql',
    port: 443,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'User-Agent': 'Node',
    },
};

const req = https.request(options, (res) => {
    let data = '';
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
        data += d;
    });
    res.on('end', () => {
        console.log(JSON.parse(data).data);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();