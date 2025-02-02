import Grid from '@/components/Grid/Grid'
import Product from '@/components/Product/Product'
import Article from '@/components/Article/Article'
import Member from '@/components/Member/Member'

const Course = async ({ content, instructor = {}, ...rest }) => (
  <Product
    {...rest}
    instructor={instructor.name}
    tabs={{
      buttons: ['Description', 'Instructor'],
      tabs: [
        <>
          <Article key="article">
            <p>
              This course is a detailed and easy tutorial to get you all setup
              and going with the use of LearnPress LMS Plugin. It is a free and
              simple plugin to help you create an Online Courses Website step by
              step. The tutorial guides you through the configuration of the
              plugin, creation of Courses, Lessons, Quizzes, and finally guides
              you on how to boost up your Website with Premium LearnPress
              Add-ons brought to you by ThimPress (creator of LearnPress). It
              also shows how you could configure additional items like the
              course layouts and featured images …
            </p>

            <p>
              Master Adobe Photoshop CC 2024 without any previous knowledge.
              Learn the newest AI tricks to get fast results like a pro
            </p>

            <h3>What you&apos;ll learn</h3>

            <ul>
              <li>
                Automate tasks on their computer by writing simple Python
                programs.
              </li>

              <li>Programmatically generate and update Excel spreadsheets.</li>

              <li>Crawl web sites and pull information from online sources.</li>

              <li>
                Use Python&apos;s debugging tools to quickly figure out bugs in
                your code.
              </li>

              <li>
                Write programs that can do text pattern recognition with
                &quot;regular expressions&quot;
              </li>

              <li>Parse PDFs and Word documents.</li>

              <li>Write programs that send out email notifications.</li>

              <li>
                Programmatically control the mouse and keyboard to click and
                type for you.
              </li>
            </ul>

            <h3>Location</h3>

            <p>
              23 Al Qafal Street, Um Seqeim, Sharjah{' '}
              <a href="#">
                <strong>View map</strong>
              </a>
            </p>

            <h3>Schedule</h3>

            <table>
              <thead>
                <tr>
                  <th>Day</th>

                  <th>Time</th>

                  <th>Price</th>

                  <th>Instructor</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Mon – Wed</td>

                  <td>8:00 – 10:00</td>

                  <td>$5/hrs</td>

                  <td>Jordyn Dorwart</td>
                </tr>

                <tr>
                  <td>Tue – Thu</td>

                  <td>18:00 – 19:00</td>

                  <td>$5/hrs</td>

                  <td>Cooper Saris</td>
                </tr>

                <tr>
                  <td>Wed – Fri</td>

                  <td>20:00 – 21:00</td>

                  <td>$5/hrs</td>

                  <td>Angel Aminoff</td>
                </tr>

                <tr>
                  <td>Sat – Sun</td>

                  <td>
                    18:00 – 19:00
                    <br />
                    20:00 – 21:00
                  </td>

                  <td>$8/hrs</td>

                  <td>
                    Jordyn Dorwart
                    <br />
                    Angel Aminoff
                  </td>
                </tr>
              </tbody>
            </table>

            <Grid cols={2}>
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Tuition over time</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>30min:</td>

                    <th>$5</th>
                  </tr>

                  <tr>
                    <td>60min:</td>

                    <th>$9</th>
                  </tr>

                  <tr>
                    <td>90min:</td>

                    <th>$14</th>
                  </tr>

                  <tr>
                    <td>120min:</td>

                    <th>$18</th>
                  </tr>
                </tbody>
              </table>

              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Tuition by package</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>5 lessons:</td>

                    <th>$5</th>
                  </tr>

                  <tr>
                    <td>10 lessons:</td>

                    <th>$9</th>
                  </tr>

                  <tr>
                    <td>Semester:</td>

                    <th>$14</th>
                  </tr>

                  <tr>
                    <td>Buy 2 course package:</td>

                    <th>-10%</th>
                  </tr>
                </tbody>
              </table>
            </Grid>

            <h3>Cancellation policy</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>

            <hr />

            <h3>Classes starting soon</h3>

            <table>
              <thead>
                <tr>
                  <th>Courses</th>

                  <th>Time</th>

                  <th>Instructor</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Python Masterclass 2024: Build 24 Real World Python Projects
                  </td>

                  <td>8:00 – 10:00 July 25, 2024</td>

                  <td>Jordyn Dorwart</td>

                  <td>Join Waitlist</td>
                </tr>

                <tr>
                  <td>
                    Python 3: Deep Dive (Part 3 – Dictionaries, Sets, JSON)
                  </td>

                  <td>8:00 – 10:00 July 25, 2024</td>

                  <td>Jordyn Dorwart</td>

                  <td>Join Waitlist</td>
                </tr>

                <tr>
                  <td>Automate Everything with Python</td>

                  <td>8:00 – 10:00 July 25, 2024</td>

                  <td>Jordyn Dorwart</td>

                  <td>Join Waitlist</td>
                </tr>
              </tbody>
            </table>

            <h3>Certificate</h3>

            <img src="../certificate1.webp" width={386} height={271} alt="" />
          </Article>
        </>,
        <div key="instructor">
          <Member {...instructor} />
        </div>
      ]
    }}
  />
)

export default Course
