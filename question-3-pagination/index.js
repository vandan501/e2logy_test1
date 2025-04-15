const express = require('express');
const app = express();


// LETS SUPPOSE THIS DATA COMES FORM DATABASE
const users = [
    { name: 'John' }, { name: 'Jane' }, { name: 'Jim' }, { name: 'Jake' },
    { name: 'Jill' }, { name: 'Jack' }, { name: 'Jason' }
];

app.get('/users', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    const startIndex = (page - 1) * limit;
    const paginatedUsers = users.slice(startIndex, startIndex + limit);
    res.json({
        page: page,
        limit: limit,
        users: paginatedUsers
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
