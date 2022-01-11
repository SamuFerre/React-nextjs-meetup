import Head from 'next/head';
import { MongoClient } from 'mongodb';
// import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         tittle: 'A First Meetup',
//         image: 'https://cdn.pixabay.com/photo/2014/01/13/04/17/meetup-243206_960_720.jpg',
//         address: 'tsurumi koen 123, osaka',
//         description: 'This is a first meetup'
//     },
//     {
//         id: 'm2',
//         tittle: 'A Second Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_960_720.jpg',
//         address: 'honmachi 123, osaka',
//         description: 'This is a second meetup'
//     },
//     {
//         id: 'm3',
//         tittle: 'A Third Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg',
//         address: 'amemura 123, osaka',
//         description: 'This is a third meetup'
//     }
// ]

function HomePage(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     // Send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta 
                    name='description' 
                    content='Browse a huge list of highly active React meetups!'>
                </meta>
            </Head>
            <MeetupList meetups={props.meetups} /> 
        </Fragment>
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API (Runs only at the server never at the user)
//     return {
//         props: 
//         {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps() {
    // fetch data from an API (Users in production or servver would neve see this code)
    const client = await MongoClient.connect('mongodb+srv://Samu666:import Head from 'next/head';
import { MongoClient } from 'mongodb';
// import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         tittle: 'A First Meetup',
//         image: 'https://cdn.pixabay.com/photo/2014/01/13/04/17/meetup-243206_960_720.jpg',
//         address: 'tsurumi koen 123, osaka',
//         description: 'This is a first meetup'
//     },
//     {
//         id: 'm2',
//         tittle: 'A Second Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_960_720.jpg',
//         address: 'honmachi 123, osaka',
//         description: 'This is a second meetup'
//     },
//     {
//         id: 'm3',
//         tittle: 'A Third Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg',
//         address: 'amemura 123, osaka',
//         description: 'This is a third meetup'
//     }
// ]

function HomePage(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     // Send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta 
                    name='description' 
                    content='Browse a huge list of highly active React meetups!'>
                </meta>
            </Head>
            <MeetupList meetups={props.meetups} /> 
        </Fragment>
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API (Runs only at the server never at the user)
//     return {
//         props: 
//         {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps() {
    // fetch data from an API (Users in production or servver would neve see this code)
    const client = await MongoClient.connect('mongodb+srv://Samu666:import Head from 'next/head';
import { MongoClient } from 'mongodb';
// import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         tittle: 'A First Meetup',
//         image: 'https://cdn.pixabay.com/photo/2014/01/13/04/17/meetup-243206_960_720.jpg',
//         address: 'tsurumi koen 123, osaka',
//         description: 'This is a first meetup'
//     },
//     {
//         id: 'm2',
//         tittle: 'A Second Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_960_720.jpg',
//         address: 'honmachi 123, osaka',
//         description: 'This is a second meetup'
//     },
//     {
//         id: 'm3',
//         tittle: 'A Third Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg',
//         address: 'amemura 123, osaka',
//         description: 'This is a third meetup'
//     }
// ]

function HomePage(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     // Send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta 
                    name='description' 
                    content='Browse a huge list of highly active React meetups!'>
                </meta>
            </Head>
            <MeetupList meetups={props.meetups} /> 
        </Fragment>
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API (Runs only at the server never at the user)
//     return {
//         props: 
//         {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps() {
    // fetch data from an API (Users in production or servver would neve see this code)
    const client = await MongoClient.connect('mongodb+srv://Samu666:import Head from 'next/head';
import { MongoClient } from 'mongodb';
// import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         tittle: 'A First Meetup',
//         image: 'https://cdn.pixabay.com/photo/2014/01/13/04/17/meetup-243206_960_720.jpg',
//         address: 'tsurumi koen 123, osaka',
//         description: 'This is a first meetup'
//     },
//     {
//         id: 'm2',
//         tittle: 'A Second Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_960_720.jpg',
//         address: 'honmachi 123, osaka',
//         description: 'This is a second meetup'
//     },
//     {
//         id: 'm3',
//         tittle: 'A Third Meetup',
//         image: 'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg',
//         address: 'amemura 123, osaka',
//         description: 'This is a third meetup'
//     }
// ]

function HomePage(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     // Send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta 
                    name='description' 
                    content='Browse a huge list of highly active React meetups!'>
                </meta>
            </Head>
            <MeetupList meetups={props.meetups} /> 
        </Fragment>
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     //fetch data from an API (Runs only at the server never at the user)
//     return {
//         props: 
//         {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }
export async function getStaticProps() {
    // fetch data from an API (Users in production or servver would neve see this code)
    const client = await MongoClient.connect('mongodb+srv://Samu666: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@cluster0.trica.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
}

export default HomePage;@cluster0.trica.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
}

export default HomePage;@cluster0.trica.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
}

export default HomePage;@cluster0.trica.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    };
}

export default HomePage;
