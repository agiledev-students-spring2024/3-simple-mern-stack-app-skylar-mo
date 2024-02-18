function AboutUs() {
  const apiUrl = "http://localhost:5002/about_us";

  function fetchData() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(dataPhoto => {
        document.getElementById("profile_pic").src = dataPhoto.image;
        document.getElementById("student-description").innerText = dataPhoto.content;
      });
  }
  return (
    <div className="student-profile">
        <img id="profile-pic" alt="Student Profile" className="profile-pic" />
        <p id="student-description" className="student-description"></p>
    </div>
  );
}

export default AboutUs