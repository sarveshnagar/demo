import React from 'react';
import './Resume.css';

function Resume() {
	return (
		<div className='main1' id='resume'>
			<div className="section" id="one">
				<div className="heading">
					<span className="number">01</span>
					<span className="title">Education</span>
				</div>
				<div className="sub-heading">
					<h4 className="sub-title">2017-2020</h4>
					<h2 className="sub-title">Master of Computer Applications</h2>
					<h3 className="sub-title ">NIT Allahabad</h3>
				</div>
				<div className="innercontent">
					<hr className='hr1' />
				</div>
				<div className="sub-heading">
					<h4 className="sub-title">2014-2017</h4>
					<h2 className="sub-title">Bachelor of Computer Applications</h2>
					<h3 className="sub-title">DAVV Indore</h3>
				</div>
				<div className="innercontent">
					<hr className='hr1' />
				</div>
			</div>
			<div className="section skill" id="two">
				<div className="heading">
					<span className="number">02</span>
					<span className="title" style={{ color: "gray" }}>Skills</span>
				</div>
				<div className="innercontent">
					<div className="align">
						<div className="skill-bars">
							<div className="bar">
								<div className="info">
									<span>C</span>
								</div>
								<div className="progress-line c">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>C++</span>
								</div>
								<div className="progress-line cpp">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>Springboot</span>
								</div>
								<div className="progress-line android">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>JAVA</span>
								</div>
								<div className="progress-line java">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>SQL</span>
								</div>
								<div className="progress-line sql">
									<span></span>
								</div>
							</div>
						</div>

						<div className="skill-bars skill2">
							<div className="bar">
								<div className="info">
									<span>HTML</span>
								</div>
								<div className="progress-line html">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>CSS</span>
								</div>
								<div className="progress-line css">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>React JS</span>
								</div>
								<div className="progress-line react">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>Javascript</span>
								</div>
								<div className="progress-line javascript">
									<span></span>
								</div>
							</div>
							<div className="bar">
								<div className="info">
									<span>Angular 8</span>
								</div>
								<div className="progress-line angular">
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section" id="three">
				<div className="heading">
					<span className="number">03</span>
					<span className="title">Projects</span>
				</div>
				<div className="innercontent">
					<section className="card-list">
						<article className="card">
							{/* <a href="https://reactcloudy.netlify.app/" style={{ textDecoration: "none", color: "grey" }}> */}
							<header className="card-header">
								<p>December 2021</p>
								<h2>Cloudy.</h2>
							</header>
							<div className="card-author">
								<div className="author-name">
									<div className="author-name-prefix"></div>
									<br /> React JS <br />
								</div>
							</div>
							{/* </a> */}
						</article>
						<article className="card">
							{/* <a href="https://github.com/sarveshnagar/Image-Processing" style={{ textDecoration: "none", color: "grey" }}> */}
							<header className="card-header">
								<p>April 2019</p>
								<h2>Image Processing Portal.</h2>
							</header>
							<div className="card-author">
								<div className="author-name">
									<div className="author-name-prefix"></div>
									<br /> Python <br /> OpenCV
								</div>
							</div>
							{/* </a> */}
						</article>
						<article className="card">
							{/* <a href="https://github.com/sarveshnagar/CMS" style={{ textDecoration: "none", color: "grey" }}> */}
							<header className="card-header">
								<p>November 2018</p>
								<h2>Complaint Management System.</h2>
							</header>
							<div className="card-author">
								<div className="author-name size">
									<div className="author-name-prefix "></div>
									<br /> PHP <br /> HTML <br /> CSS
								</div>
							</div>
							{/* </a> */}
						</article>
						<article className="card">
							{/* <a href="https://github.com/sarveshnagar/RailApp" style={{ textDecoration: "none", color: "grey" }}> */}
							<header className="card-header">
								<p>April 2018</p>
								<h2>RailApp.</h2>
							</header>
							<div className="card-author">
								<div className="author-name">
									<div className="author-name-prefix"></div>
									<br /> Android <br /> JAVA
								</div>
							</div>
							{/* </a> */}
						</article>
					</section>
				</div>
			</div>
			<div className="section" id="four">
				<div className="heading">
					<span className="number">04</span>
					<span className="title">Experience</span>
				</div>
				<div className="sub-heading">
					<h4 className="sub-title">Sept 2020 - Present</h4>
					<h2 className="sub-title">Oracle</h2>
					<h3 className="sub-title">Application Developer</h3>
				</div>
				<div className="innercontent">
					<hr className='hr1' />
				</div>
				<div className="sub-heading">
					<h4 className="sub-title">Dec 2020 - May 2020</h4>
					<h2 className="sub-title">Star India Container Line Pvt Ltd</h2>
					<h3 className="sub-title">Trainee Engineer - Software Development</h3>
				</div>
				<div className="innercontent">
					<hr className='hr1' />
				</div>
			</div>
			<div className="section" id="five">
				<div className="heading">
					<span className="number">05</span>
					<span className="title">Artwork</span>
				</div>
				{/* <div className="innercontent"> */}

					<div className="container">
					<h2 className="sub-title" style={{marginBottom:"50px"}}>Award winning photographs</h2>
					<div className='outer' style={{marginBottom:"50px"}}>
						<div className='inner'><a href='/artwork'><button className='button'>More</button></a></div>
						<div className='inner'><a href='/achieve'><button className='button'>Achievements</button></a></div>
					</div>
					<div className="box">

						<div className="dream">
							<img src="/artwork/3.jpg" style={{ height: "70%", objectFit: "contain" }} />
						</div>

						<div className="dream">
							<img src="/artwork/1.jpg" style={{ height: "70%", objectFit: "contain" }} />
						</div>

						<div className="dream">
							<img src="/artwork/2.jpg" style={{ height: "70%", objectFit: "contain" }} />
						</div>
					</div>
						

					{/* </div> */}
					

				</div>
			</div>
		</div>

	)
}

export default Resume;