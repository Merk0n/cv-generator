import '../styles/CVPreview.css';
export default function CVPreview({ personal, experience, education }) {
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('us-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div id='preview'>
      <div id='personal-preview'>
        <h1>{personal[0].name}</h1>
        <p>{personal[0].email}</p>
        <p>{personal[0].phoneNumber}</p>
        <p>{personal[0].address}</p>

        <em>
          {'"'}
          {personal[0].bio}
          {'"'}
        </em>
      </div>

      <div id='experience-preview'>
        <h2 className='section-title'>Experience</h2>
        {experience.map((item, index) => {
          return (
            <div key={index} className='experience'>
              <h3 className='job-title'>
                {experience[index].companyName}-
                {experience[index].positionTitle}
              </h3>
              <h4 className='location'>
                <em>{experience[index].location}</em>
              </h4>

              <p className='date'>
                {formatDate(experience[index].startDate)} -
              </p>
              <p className='date'>{formatDate(experience[index].endDate)}</p>

              <p className='description'>{experience[index].description}</p>
            </div>
          );
        })}
      </div>
      <div id='education-preview'>
        <h2 className='section-title'>Education</h2>
        {education.map((item, index) => {
          return (
            <div key={index} className='experience'>
              <h3 className='job-title'>
                {education[index].degree}-{education[index].school}
              </h3>
              <p className='date'>{formatDate(education[index].startDate)} -</p>
              <p className='date'>{formatDate(education[index].endDate)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
