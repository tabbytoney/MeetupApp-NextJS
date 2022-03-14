import { Fragment } from 'react/cjs/react.production.min';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://static.photocdn.pt/images/articles/2018/05/18/articles/2017_8/landscape_photography_tips.webp'
      title='First Meetup'
      address='42 Wallaby Way'
      description='First Meetup Stuffs'
    ></MeetupDetail>
  );
}

export default MeetupDetails;
