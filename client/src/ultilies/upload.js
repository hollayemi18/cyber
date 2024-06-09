import axios from 'axios';

const upload = async (file) => {
  let data = new FormData();
  // Append files into formData object
  data.append('file', file);
  data.append('upload_preset', 'easetech');
  try {
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/techtailor/image/upload',
      data
    );
    const url = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default upload;
