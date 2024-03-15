import '../styles/CVPreview.css';
export default function CVPreview({ personal, experience, education }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-UK', {
      year: 'numeric',
      month: 'long',
      // day: 'numeric'
    });
  };

  return (
    <div id='preview'>
      <div id='personalPreview'>
        <div>
          <h1>{personal[0].name}</h1>
          <p>{personal[0].email}</p>
          <p>{personal[0].phoneNumber}</p>
          <p>{personal[0].address}</p>
        </div>
        <div id='bioPreview'>
          <em>
            {'"'}
            {personal[0].bio}
            {'"'}
          </em>
        </div>
      </div>
      <div id='experiencePreview'>
        <h2 className='sectionTitle'>Experience</h2>
        {experience.map((item, index) => {
          return (
            <div key={index} className='experience'>
              <h3 className='jobTitle'>
                🚀 {experience[index].job} @{experience[index].employer}
              </h3>
              <div className='datesWrapper'>
                <p className='date'>
                  {formatDate(experience[index].startDate)} -
                </p>
                <p className='date'>{formatDate(experience[index].endDate)}</p>
              </div>
              <p className='description'>{experience[index].description}</p>
            </div>
          );
        })}
      </div>
      <div id='educationPreview'>
        <h2 className='sectionTitle'>Education</h2>
        {education.map((item, index) => {
          return (
            <div key={index} className='experience'>
              <h3 className='jobTitle'>
                🔬 {education[index].degree} @{education[index].school}
              </h3>
              <div className='datesWrapper'>
                <p className='date'>
                  {formatDate(education[index].startDate)} -
                </p>
                <p className='date'>{formatDate(education[index].endDate)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
