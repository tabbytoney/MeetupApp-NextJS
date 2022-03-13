import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://static.photocdn.pt/images/articles/2018/05/18/articles/2017_8/landscape_photography_tips.webp',
    address: '541 Who Knows Street, A City, State',
    description: 'The first meetup'
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: 'https://as1.ftcdn.net/v2/jpg/03/15/34/90/1000_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg',
    address: 'Mountains, Somewhere',
    description: 'The second meetup'
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:
      'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?b=1&k=20&m=517188688&s=170667a&w=0&h=AF2jDsSkcse_G3a9BCQA22LDhezmxIUZKx5vRh3aFDI=',
    address: 'Clouds, Not A City Address',
    description: 'The third meetup'
  }
];

function Homepage() {
  // Need to return the list of meetups from the meetups property in MeetupList
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default Homepage;
