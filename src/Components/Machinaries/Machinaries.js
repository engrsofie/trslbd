import React from 'react';
import Footer from '../Footer/Footer';
import NavbarSection from '../NavbarSection/NavbarSection';
import './Machinaries.css';
import {FaHome, FaChevronRight } from "react-icons/fa";
import Table from 'react-bootstrap/Table'
const Machinaries = () => {
    return (
        <div>
           <div className="Product">
           <NavbarSection/>
           <div className="Item">
           <h6> <FaHome/> <FaChevronRight/> <span>Machinaries</span> </h6> 
            </div>
            <div className="ProductHeading">
                <h1>Machinaries</h1>
                <p>Constantly upgrading in machineries to make production more efficient and deliver the best quality in shortest possible lead-time. Currently having 525 Jacquard Machine from 3gg to 12 gg.</p>
                <h3>Production Capacity : 2, 80,000 – 3, 00,000 Pcs / Month</h3>
            </div>
           </div>
           <div className="container">
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>Machines</th>
      <th>Sets</th>
      <th>COO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Shima Seiki Jaquard Double System 5GG & 7GG	</td>
      <td>20 Sets	</td>
      <td>Japanese</td>
    </tr>
    <tr>
      <td>Shima Seiki Jaquard Double System 12GG/14GG	</td>
      <td>45 Sets	</td>
      <td>Japanese</td>
    </tr>
    <tr>
      <td >Jaquard Double System- 3GG	</td>
      <td >45 Sets	</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Jaquard Double System- 5, 7 GG		</td>
      <td >120 Sets		</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Jaquard Single System 12GG		</td>
      <td >325 Sets	</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Linking Machine	</td>
      <td >	625 Sets	</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Over lock Machine	</td>
      <td >20 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Label sewing Machine	</td>
      <td >26 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Bar Tacking	</td>
      <td >04 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Loop Machine	</td>
      <td >06 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Auto Placket Machine	</td>
      <td >20 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Flat Lock Machine	</td>
      <td >04 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Zip Sewing Machine	</td>
      <td >46 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Lock stitch button Machine	</td>
      <td >06 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Button hole computerized Machine	</td>
      <td >06 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Eyelet Machine	</td>
      <td >08 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Iron	</td>
      <td >50 Sets		</td>
      <td>Juki-Japan</td>
    </tr>
    <tr>
      <td >Winding		</td>
      <td >36 Sets		</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Dryer		</td>
      <td >08 Sets		</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Hydro Extractor	</td>
      <td >06 Sets		</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Washing Machine	</td>
      <td >06 Sets		</td>
      <td>China/Taiwan</td>
    </tr>
    <tr>
      <td >Boiler Fulton- 470kg	</td>
      <td >04 Sets		</td>
      <td>USA</td>
    </tr>
    <tr>
      <td >Generator	</td>
      <td >04 Sets		</td>
      <td>USA</td>
    </tr>

    



  </tbody>
</Table>
           </div>
           <Footer/>
        </div>
    );
};

export default Machinaries;