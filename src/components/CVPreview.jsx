import '../styles/CVPreview.css';
export default function CVPreview({
  personal,
  experience,
  education,
  layout,
  techStack,
  bgcolor,
  textcolor,
  font,
}) {
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('us-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const styles = {
    backgroundColor: bgcolor,
    color: textcolor,
  };

  const fontStyle = {
    fontFamily: font,
  };

  return (
    <div style={fontStyle} className={layout}>
      <div style={styles} className='personal-preview'>
        <img
          className={`${
            personal[0].photo === '' && 'hide-image'
          } preview-image`}
          src={personal[0].photo}
        />
        <div>
          <h1>{personal[0].name}</h1>
          <em>
            {'"'}
            {personal[0].bio}
            {'"'}
          </em>
        </div>

        <div className='personal-info'>
          <div>
            <h4>Address</h4>
            <p>{personal[0].address}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{personal[0].email}</p>
          </div>
          <div>
            <h4>Phone Number</h4>
            <p>{personal[0].phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className='experience-preview'>
        <h2 className='section-title'>Experience</h2>
        {experience.map((item, index) => {
          return (
            <div key={index} className='experience'>
              <h3 className='job-title'>
                {experience[index].companyName} -{' '}
                {experience[index].positionTitle}
              </h3>
              <h4 className='location'>
                <em>{experience[index].location}</em>
              </h4>

              <p className='date'>
                {formatDate(experience[index].startDate)} -{' '}
                {formatDate(experience[index].endDate)}
              </p>

              <p className='description'>{experience[index].description}</p>
            </div>
          );
        })}
      </div>
      <div className='education-preview'>
        <h2 className='section-title'>Education</h2>
        {education.map((item, index) => {
          return (
            <div key={index} className='experience'>
              <h3 className='job-title'>
                {education[index].degree} - {education[index].school}
              </h3>
              <p className='date'>
                {formatDate(education[index].startDate)} -{' '}
                {formatDate(education[index].endDate)}
              </p>
            </div>
          );
        })}
      </div>
      <div style={styles} className='techstack-preview'>
        <h2 className='section-title'>Tech Stack</h2>
        {techStack.map((item, index) => {
          return (
            <div key={index} className='tech-stack'>
              <h4 className='languages'>Languages</h4>
              <div className='tech-info'>{techStack[index].languages}</div>
              <h4 className='frameworks'>Frameworks</h4>
              <div className='tech-info'>{techStack[index].frameworks}</div>
              <h4 className='databases'>Databases</h4>
              <div className='tech-info'>{techStack[index].databases}</div>
              <h4 className='tools'>Tools</h4>
              <div className='tech-info'>{techStack[index].tools}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
