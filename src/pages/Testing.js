import { React } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Testing() {

    return (
        <div>
        
        <div><Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/06/12/20/27/macro-1452987_960_720.jpg"
                        alt="Mechanical Department"
                    />
                    <Carousel.Caption>
                        <h3>Mechanical Department</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2020/03/09/11/59/engineer-4915442_960_720.jpg"
                        alt="Chemical Department"
                    />
                    <Carousel.Caption>
                        <h3 style={{
                            color: 'black'
                        }}>Chemical Department</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2018/05/27/18/02/metallurgy-3434079_960_720.jpg"
                        alt="Metullarical Department"
                    />
                    <Carousel.Caption>
                        <h3>Metullarical Department</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3825572/pexels-photo-3825572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Polymer Department"
                    />
                    <Carousel.Caption>
                        <h3>Polymer Department</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

        <h1 id="mechanicalpg">Mechanical Department</h1>
        <p>Mechanical Department is supported by not only calibrated and adequate equipments but also good supporting instruments.
        Laboratory is equipped with Universal Testing Machine as well as Tensometer and also has Impact Tester, Rockwell cum Brinell & Vickers Hardness Tester and Cupping Machine.
        Laboratory also houses calibrated digital vernier callipers & digital micrometer gauges to reduce the testing errors.
        Extensometer is also available for determining proof stress at any given strain point.
        Laboratory has an exhaustive list reference material for Hardness blocks procured from Westport & Instron USA for its traceability to NIST and also Impact machine is calibrated using Certified reference Material (as per ISO 148-2 indirect verification).
        </p>
        <h1>Chemical Department*</h1>

        <p>Chemical Department is supported by wet as well as instrumental techniques. Laboratory uses Vacuum Emission Spectrometer, Flame Atomic Absorption Spectrophotometer as well as Carbon- Sulphur Analyser for its Instrumental Analysis.
        Wet laboratory is used as a support for the instrumental techniques as well as verification of results by independent methods.
        Laboratory has an exhaustive list reference material for Iron Base, Copper Base, Aluminium base, Zinc base, Lead base and Nickel Base in both wet as well as instrumental techniques.
        </p>
        <h1>Metallurgical Department*</h1>
        <p>Metallurgical Department is supported by not only calibrated and adequate equipments but also good measurement techniques. 
        Laboratory is equipped with Metallurgical Microscope attached with camera having a facility of not only picture grabbing but also quantitative measurements to make the results more accurate. The Lab also has Micro Hardness Tester for lower loads impression and also profile projector for dimensional measurements.
        Laboratory is also equipped with good in house sample preparation facility for preparation of micro specimens as well as macro specimens.
        Laboratory has metallurgical software for phase evaluation and reporting for quantitive values which will be more precise than the manual measurements.
        Laboratory also has required reference blocks for its microhardness tester and the same are traceable to National/ International Standards.</p>
        <br></br>
        <p>*Latest relevant Test methods are maintained by lab.</p>
            
        </div>
    )
}

export default Testing
