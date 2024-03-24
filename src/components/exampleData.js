import examplePhoto from '../assets/empty_avatar.png';
const exampleData = {
  personalInfo: {
    photo: examplePhoto,
    name: 'John Doe',
    email: 'john@doe.com',
    phoneNumber: '123-456-7890',
    address: '1234 Elm St, Springfield, IL 62701',
    bio: 'I am a software developer with a passion for web development.',
  },

  experience: {
    companyName: 'Random Company',
    positionTitle: 'Software Developer',
    location: 'Poland, Warsaw',
    startDate: '2020-06-01',
    endDate: '2024-06-01',
    description: 'I develop software for the company.',
  },

  education: {
    school: 'Warsaw University of Technology',
    degree: 'B.Sc. Computer Science',
    startDate: '2021-09-01',
    endDate: '2025-06-01',
  },

  techStack: {
    languages: 'JavaScript,',
    frameworks: 'React',
    databases: '-',
    tools: 'Git',
  },
};

export default exampleData;
