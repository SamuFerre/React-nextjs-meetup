import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description } = data; // It isn't necessary

        const client = await MongoClient.connect('mongodb+srv://Samu666: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@cluster0.trica.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!' });
    }
};

export default handler;
