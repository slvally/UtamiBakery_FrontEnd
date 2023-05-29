import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material/';
import { Avatar } from '@mui/material';
import { testi } from '../utils/DataTestimonial';
import './MainStyle.css';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  );
};

const Testimonial = () => (
  <div
    className="testimonial"
    style={{
      display: 'flex', justifyContent: 'center', marginTop: '75px', marginBottom: '75px',
    }}
  >
    <div style={{ width: '50%', textAlign: 'center' }}>
      <h2 style={{ marginBottom: 20 }}>TESTIMONIALS</h2>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
        {testi.map((testimonial) => (
          <Card img={testimonial.imageUrl} p={testimonial.text} />
        ))}
      </Slider>
    </div>
  </div>
);

const Card = ({ img, p }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      color: 'gray',
    }}
  >
    <Avatar
      imgProps={{ style: { borderRadius: '50%' } }}
      src={img}
      style={{
        width: 120,
        height: 120,
        border: '1px solid lightgray',
        padding: 7,
        marginBottom: 20,
      }}
    />
    <p>
      {p}
    </p>
    <p style={{ fontStyle: 'italic', marginTop: 25 }}>
      <span style={{ fontWeight: 500, color: 'green' }}>PAULA WILSON</span>
      {' '}
      ,
      Media Analyst
    </p>
  </div>
);

export default Testimonial;
