// https://openweathermap.org/current => api documentation
// For use add :
// lat=${encodedLocation}long${}
// where encodedLocation = `lat=${location.lat}&lon=${location.lon}`

import axios from 'axios';

const API_KEY = '2eb65f721e5f7e4a643f767a6da5dc7f';

export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`,
});
