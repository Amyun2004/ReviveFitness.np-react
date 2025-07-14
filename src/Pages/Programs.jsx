
import ProgramGallery from '../components/ProgramPage/ProgramsGallery.jsx';
import ProgramBox from '../components/ProgramPage/ProgramBox.jsx';
import '../CSS/programs.css'
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import EmptySpace from '../components/common/EmptySpace.jsx';

export default function Programs() {
  return (
    
    <div>
      <EmptySpace/>
      <Navbar/>
      <div className="empty-space"></div>
      <section id="Programs">
        <div className="Programs-container">
          <h2 className="heading">
            Our <span>Services</span>
          </h2>
          <h3 className="reg-texts">
            We offer a variety of services for our customers including regular gym membership and other exciting offers. Some of our popular programs are below.
          </h3>
          <ProgramGallery />
        </div>
      </section>

      <section id="programs" className="programs-section">
        <h2 className="heading">Our Programs & Pricing</h2>
        <div className="programs-container">

          {/* Admission Fee */}
          <ProgramBox title="Admission Fee">
            <p>Rs. 1,000</p>
          </ProgramBox>

          {/* Regular Membership */}
          <ProgramBox title="Regular Membership">
            <table>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>1 Month</th>
                  <th>3 Months</th>
                  <th>6 Months</th>
                  <th>1 Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GYM</td>
                  <td>4,000</td>
                  <td>10,500</td>
                  <td>18,000</td>
                  <td>30,000</td>
                </tr>
                <tr>
                  <td>GYM & Cardio</td>
                  <td>5,000</td>
                  <td>12,000</td>
                  <td>21,000</td>
                  <td>36,000</td>
                </tr>
              </tbody>
            </table>
          </ProgramBox>

          {/* Daytime Membership */}
          <ProgramBox title="Daytime Membership (10AM - 4PM)">
            <table>
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>1 Month</th>
                  <th>3 Months</th>
                  <th>6 Months</th>
                  <th>1 Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GYM & Cardio</td>
                  <td>4,000</td>
                  <td>10,500</td>
                  <td>18,000</td>
                  <td>30,000</td>
                </tr>
              </tbody>
            </table>
          </ProgramBox>

          {/* Personal Training */}
          <ProgramBox title="Personal Training">
            <table>
              <thead>
                <tr>
                  <th>Sessions</th>
                  <th>Price (Rs)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1 Session</td><td>2,500</td></tr>
                <tr><td>12 Sessions</td><td>15,000</td></tr>
                <tr><td>16 Sessions</td><td>20,000</td></tr>
                <tr><td>20 Sessions</td><td>25,000</td></tr>
              </tbody>
            </table>
          </ProgramBox>

          {/* Locker Charge */}
          <ProgramBox title="Locker Charges">
            <table>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Price (Rs)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1 Month</td><td>500</td></tr>
                <tr><td>3 Months</td><td>1,200</td></tr>
                <tr><td>6 Months</td><td>1,800</td></tr>
                <tr><td>1 Year</td><td>2,500</td></tr>
              </tbody>
            </table>
          </ProgramBox>

          {/* One Day Pass */}
          <ProgramBox title="One Day Pass">
            <p>Rs. 500</p>
          </ProgramBox>

        </div>
      </section>
      <Footer/>
    </div>
  );
}
