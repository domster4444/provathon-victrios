import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// ___________OVERALL CHART
// react bstrp
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
// _____ICONS
import oneVacIco from '../../img/serviceLogo/oneVacIco.png';
import twoVacIco from '../../img/serviceLogo/twoVacIco.png';
import threeVacIco from '../../img/serviceLogo/threeVacIco.png';
import hospitalIco from '../../img/serviceLogo/hospitalIco.png';
import hospitalAddress from '../../img/serviceLogo/hospitalAddress.png';
import hospitalPhone from '../../img/serviceLogo/hospitalPhone.png';
import bedAvailable from '../../img/serviceLogo/bedAvailable.png';
import oxygenCylinder from '../../img/serviceLogo/oxygenCylinder.png';

// ______FONT AWESOME
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DhoService = () => {
  //* __________________________STATE
  const [allHospitalResourceData, setAllHospitalResourceData] = useState([]);

  const [
    isAllHospitalResourceDataLoaded,
    setAllHospitalResourceDataLoadedState,
  ] = useState(false);

  useEffect(() => {
    if (isAllHospitalResourceDataLoaded === true) {
    }
  });

  //todo:option dropdown js
  // _______________________AUTOCOMPLETE
  useEffect(() => {
    function autocomplete(inp, arr) {
      /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
      var currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener('input', function (e) {
        var a,
          b,
          i,
          val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement('DIV');
        a.setAttribute('id', this.id + 'autocomplete-list');
        a.setAttribute('class', 'autocomplete-items');
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          var pos = arr[i].toUpperCase().indexOf(val.toUpperCase());
          /*check if the item starts with the same letters as the text field value:*/
          if (pos > -1) {
            /*create a DIV element for each matching element:*/
            b = document.createElement('DIV');
            /*make the matching letters bold:*/
            b.innerHTML = arr[i].substr(0, pos);
            b.innerHTML +=
              '<strong>' + arr[i].substr(pos, val.length) + '</strong>';
            b.innerHTML += arr[i].substr(pos + val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener('click', function (e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName('input')[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
            });

            a.appendChild(b);
          }
        }
      });
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener('keydown', function (e) {
        var x = document.getElementById(this.id + 'autocomplete-list');
        if (x) x = x.getElementsByTagName('div');
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) {
          //up
          /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
      });
      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = x.length - 1;
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add('autocomplete-active');
      }
      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove('autocomplete-active');
        }
      }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
        var x = document.getElementsByClassName('autocomplete-items');
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener('click', function (e) {
        closeAllLists(e.target);
      });
    }

    /*An array containing all the country names in the world:*/
    var countries = [
      'Achham',
      'Arghakhanchi',
      'Baglung',
      'Baitadi',
      'Bajhang',
      'Bajura',
      'Banke',
      'Bara',
      'Bardiya',
      'Bhaktapur',
      'Bhojpur',
      'Chitwan',
      'Dadeldhura',
      'Dailekh',
      'Dang',
      'Darchula',
      'Dhading',
      'Dhankuta',
      'Dhanusha',
      'Dolakha',
      'Dolpa',
      'Doti',
      'Eastern Rukum',
      'Gorkha',
      'Gulmi',
      'Humla',
      'Ilam',
      'Jajarkot',
      'Jhapa',
      'Jumla',
      'Kailali',
      'Kalikot',
      'Kanchanpur',
      'Kapilvastu',
      'Kaski',
      'Kathmandu',
      'Kavrepalanchok',
      'Khotang',
      'Lalitpur',
      'Lamjung',
      'Mahottari',
      'Makwanpur',
      'Manang',
      'Morang',
      'Mugu',
      'Mustang',
      'Myagdi',
      'Nawalpur',
      'Nuwakot',
      'Okhaldhunga',
      'Palpa',
      'Panchthar',
      'Parasi',
      'Parbat',
      'Parsa',
      'Pyuthan',
      'Ramechhap',
      'Rasuwa',
      'Rautahat',
      'Rolpa',
      'Rupandehi',
      'Salyan',
      'Sankhuwasabha',
      'Saptari',
      'Sarlahi',
      'Sindhuli',
      'Sindhupalchowk',
      'Siraha',
      'Solukhumbu',
      'Sunsari',
      'Surkhet',
      'Syangja',
      'Tanahun',
      'Taplejung',
      'Tehrathum',
      'Udayapur',
      'Western Rukum',
    ];

    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById('myInput'), countries);
  }, []);
  // ============AUTO COMPLETE END

  // _______________________________________District ID handler

  let plasmaFormHandler = (e) => {
    e.preventDefault();
    let myInput = document.getElementById('myInput');
    let myDistrict = myInput.value;

    // ______POST "district" key to server to get message:[{},{}]

    //*end point->
    //??? http://localhost:5000/api/hospitalresourcedetail/district

    /*
    "_id": "610ec7afa5d8eb475802f882",
    "dhodistrict": "Jhapa",
    "todaySingleVacUsed": "96",
    "todayDoubleVacUsed": "50",
    "totalSingleVacUsed": "300",
    "totalDoubleVacUsed": "147",
    "todayTotalVacUsed": "502",
    "totalVacUsedTillToday": "915",
    "date": "2021-08-07T17:49:35.379Z",
    "__v": 0

*/
    setInterval(function () {
      axios
        .post('http://localhost:5000/api/dhoDataGet', {
          data: {
            dhodistrict: myDistrict,
          },
        })
        .then((res) => {
          console.log(res.data.message);
          setAllHospitalResourceData(res.data.message);

          setAllHospitalResourceDataLoadedState(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  };
  return (
    <>
      <h1 id="hospital-service-page_heading" className="title_fontI">
        Search Used Vaccine Quantity By District
      </h1>
      <main id="DhoService">
        <div className="containerCenter">
          <div className="contentBlock">
            {/* <!--Make sure the form has the autocomplete function switched off:--> */}
            <form autocomplete="off">
              <div
                id="optionBox"
                class="autocomplete"
                style={{ width: '300px' }}
              />
              <Form.Control
                required
                className="plasmaFieldSearchInput poppins_regular_400"
                id="myInput"
                type="text"
                placeholder="Enter District"
              />
            </form>

            <button id="findPlasmaPatientBtn" onClick={plasmaFormHandler}>
              <i id="hospitalService-searchIco" class="fas fa-search"></i>
            </button>
            <div className="contentBlock">
              <Accordion
                id="hospital_detail_accordion"
                defaultActiveKey="0"
                style={{ width: '100%' }}
              >
                {(() => {
                  if (isAllHospitalResourceDataLoaded === true) {
                    console.log('**all recovered data loaded is  below***');

                    return (
                      <>
                        {(() => {
                          let newArr = [];
                          for (
                            let i = 0;
                            i < allHospitalResourceData.length;
                            i++
                          ) {
                            newArr.push(
                              <>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey={i + 1}
                                    key={i + 1}
                                  >
                                    <h1 className="poppins_regular_400">
                                      <img src={hospitalIco} alt="" />
                                      {/* //!district */}
                                      {allHospitalResourceData[i].dhodistrict}
                                    </h1>
                                    <h1 className="poppins_regular_400">
                                      <img src={hospitalPhone} alt="" />
                                      Ph No.
                                      {/* //!today single */}
                                      {
                                        allHospitalResourceData[i]
                                          .todaySingleVacUsed
                                      }
                                    </h1>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey={i + 1}>
                                    <Card.Body>
                                      <ListGroup id="plasmaList-listContainer">
                                        <ListGroup.Item id="plasmaList">
                                          <Table hover>
                                            <thead></thead>
                                            <tbody>
                                              <tr>
                                                <td className="poppins_semibold_600">
                                                  Hospital Address
                                                </td>
                                                <td>
                                                  {/* //!today double */}
                                                  {
                                                    allHospitalResourceData[i]
                                                      .todayDoubleVacUsed
                                                  }
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="poppins_semibold_600">
                                                  No of Oxygen Cylinder
                                                  Available
                                                </td>
                                                <td>
                                                  {/* //!total single  */}
                                                  {
                                                    allHospitalResourceData[i]
                                                      .totalSingleVacUsed
                                                  }
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="poppins_semibold_600">
                                                  No Of Bed Available Admitted
                                                </td>
                                                <td>
                                                  {/* //!total double */}
                                                  {
                                                    allHospitalResourceData[i]
                                                      .totalDoubleVacUsed
                                                  }
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="poppins_semibold_600">
                                                  No Of Single Vaccined Patient
                                                  Admitted
                                                </td>
                                                <td>
                                                  {/* //!todayTotalVacUsed */}
                                                  {
                                                    allHospitalResourceData[i]
                                                      .todayTotalVacUsed
                                                  }
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="poppins_semibold_600">
                                                  No of Double Vaccined Patient
                                                  Admitted
                                                </td>
                                                <td>
                                                  {/* //!totalVacUsedTillToday */}
                                                  {
                                                    allHospitalResourceData[i]
                                                      .totalVacUsedTillToday
                                                  }
                                                </td>
                                              </tr>

                                              <tr>
                                                <td className="poppins_semibold_600">
                                                  Date of last report
                                                </td>
                                                <td>
                                                  {
                                                    allHospitalResourceData[i]
                                                      .date
                                                  }
                                                </td>
                                              </tr>
                                            </tbody>
                                          </Table>
                                        </ListGroup.Item>
                                      </ListGroup>
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              </>
                            );
                          }

                          return newArr;
                        })()}
                      </>
                    );
                  }
                  return <></>;
                })()}
              </Accordion>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DhoService;
