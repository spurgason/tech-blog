const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
    body: 'Here is some body text',        post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 10
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'Here is some body text',        post_url: 'https://nasa.gov/donec.json',
        user_id: 8
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        body: 'Here is some body text',
        post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        body: 'Here is some body text',
        post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
        user_id: 4
    },
    {
        title: 'Pellentesque eget nunc.',
        body: 'Here is some body text',
        post_url: 'http://google.ca/nam/nulla/integer.aspx',
        user_id: 7
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        body: 'Here is some body text',
        post_url: 'https://stanford.edu/consequat.png',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        body: 'Here is some body text',
        post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        body: 'Here is some body text',
        post_url: 'http://ucla.edu/consequat/nulla.html',
        user_id: 1
    },
    {
        title: 'Duis ac nibh.',
        body: 'Here is some body text',
        post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
        user_id: 9
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        body: 'Here is some body text',
        post_url: 'https://reverbnation.com/ligula/sit.jpg',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        body: 'Here is some body text',
        post_url: 'http://china.com.cn/lectus/vestibulum.json',
        user_id: 3
    },
    {
        title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        body: 'Here is some body text',
        post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
        user_id: 10
    },
    {
        title: 'Donec dapibus.',
        body: 'Here is some body text',
        post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
        user_id: 8
    },
    {
        title: 'Nulla tellus.',
        body: 'Here is some body text',
        post_url: 'https://lycos.com/natoque/penatibus/et.html',
        user_id: 3
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        body: 'Here is some body text',
        post_url: 'https://gmpg.org/lorem.jpg',
        user_id: 3
    },
    {
        title:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        body: 'Here is some body text',
        post_url: 'https://paginegialle.it/mattis/egestas.jsp',
        user_id: 7
    },
    {
        title: 'In hac habitasse platea dictumst.',
        body: 'Here is some body text',
        post_url: 'http://wikia.com/turpis/eget.jpg',
        user_id: 6
    },
    {
        title: 'Etiam justo.',
        body: 'Here is some body text',
        post_url: 'https://shareasale.com/quis.json',
        user_id: 4
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        body: 'Here is some body text',
        post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
        user_id: 6
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        body: 'Here is some body text',
        post_url: 'https://java.com/at/nibh/in.png',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
