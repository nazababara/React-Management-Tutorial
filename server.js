const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image':'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birth': '811217',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image':'https://placeimg.com/64/64/2',
            'name': '나동빈',
            'birth': '811217',
            'gender': '남자',
            'job': '선생님'
        },
        {
            'id': 3,
            'image':'https://placeimg.com/64/64/3',
            'name': '신민수',
            'birth': '811217',
            'gender': '여자',
            'job': '학생'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));