import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// ___________OVERALL CHART
import OverallPieChart from '../../2molecules/OverallPieChart';
// react bstrp
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
const DashboardBody = () => {
  const [noOf0DogePatient, setNoOf0DogePatient] = useState(0);
  const [noOf1DogePatient, setNoOf1DogePatient] = useState(0);
  const [noOf2DogePatient, setNoOf2DogePatient] = useState(0);
  const [noOf3DogePatient, setNoOf3DogePatient] = useState(0);
  //* __________________________STATE

  const [isAllRecoveredPatientDataLoaded, setRecoveredPatientDataLoadedState] =
    useState(false);
  const [allRecoveredPatientData, setAllRecoveredPaitentData] = useState([]);

  useEffect(() => {
    if (isAllRecoveredPatientDataLoaded === true) {
      console.log('**Changed** ALlRecoveredPatientData');
      console.log(allRecoveredPatientData);
      let patientThatTook0Doge = 0;
      let patientThatTook1Doge = 0;
      let patientThatTook2Doge = 0;
      let patientThatTook3Doge = 0;
      for (let i of allRecoveredPatientData) {
        if (i.patientDoge === '0') {
          patientThatTook0Doge += 1;
        } else if (i.patientDoge === '1') {
          patientThatTook1Doge += 1;
        } else if (i.patientDoge === '2') {
          patientThatTook2Doge += 1;
        } else if (i.patientDoge === '3') {
          patientThatTook3Doge += 1;
        }
      }
      console.log('patientThatTook0Doge' + patientThatTook0Doge);
      console.log('patientThatTook1Doge' + patientThatTook1Doge);
      console.log('patientThatTook2Doge' + patientThatTook2Doge);
      console.log('patientThatTook3Doge' + patientThatTook3Doge);

      setNoOf0DogePatient(patientThatTook0Doge);
      setNoOf1DogePatient(patientThatTook1Doge);
      setNoOf2DogePatient(patientThatTook2Doge);
      setNoOf3DogePatient(patientThatTook3Doge);
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

    axios
      .post('http://localhost:5000/api/patient/recovered/district', {
        data: {
          district: myDistrict,
        },
      })
      .then((res) => {
        console.log(res.data.message);
        setAllRecoveredPaitentData(res.data.message);
        setRecoveredPatientDataLoadedState(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <main id="dashboardBody">
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
                placeholder="Search Plasma Donors By District"
              />
            </form>

            <button
              id="findPlasmaPatientBtn"
              onClick={plasmaFormHandler}
              class="btn btn-primary"
            >
              Find
            </button>
            <OverallPieChart
              noOf0DogePatient={noOf0DogePatient}
              noOf1DogePatient={noOf1DogePatient}
              noOf2DogePatient={noOf2DogePatient}
              noOf3DogePatient={noOf3DogePatient}
            />
            {(() => {
              if (isAllRecoveredPatientDataLoaded === true) {
                console.log('**all recovered data loaded is  below***');
                {
                  /* console.log(allRecoveredPatientData[0].hospitalDistrict);
                console.log(allRecoveredPatientData[0].hospitalEmail);
                console.log(allRecoveredPatientData[0].hospitalName);
                console.log(allRecoveredPatientData[0].hotpitalPhNo);
                console.log(allRecoveredPatientData[0].patientAddress);
                console.log(allRecoveredPatientData[0].patientDoge);
                console.log(allRecoveredPatientData[0].patientId);
                console.log(allRecoveredPatientData[0].patientName); */
                }
                return (
                  <>
                    {(() => {
                      let newArr = [];
                      for (let i = 0; i < allRecoveredPatientData.length; i++) {
                        newArr.push(
                          <>
                            <div>
                              <p></p>
                            </div>
                            <br />
                            <ListGroup id="plasmaList-listContainer">
                              <ListGroup.Item id="plasmaList">
                                <Table hover>
                                  <thead></thead>
                                  <tbody>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        Recovered At:
                                      </td>
                                      <td>
                                        {
                                          allRecoveredPatientData[i]
                                            .hospitalName
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        Patient Id:
                                      </td>
                                      <td>
                                        {allRecoveredPatientData[i].patientId}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        Patient Name:
                                      </td>
                                      <td>
                                        {allRecoveredPatientData[i].patientName}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        Patient Address:
                                      </td>
                                      <td>
                                        {
                                          allRecoveredPatientData[i]
                                            .patientAddress
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        No of doge Patient Took:
                                      </td>
                                      <td>
                                        {allRecoveredPatientData[i].patientDoge}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        Hospital Email:
                                      </td>
                                      <td>
                                        <a
                                          href={
                                            'mailto:' +
                                            allRecoveredPatientData[i]
                                              .hospitalEmail
                                          }
                                        >
                                          {
                                            allRecoveredPatientData[i]
                                              .hospitalEmail
                                          }
                                        </a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        Hospital Contact No:
                                      </td>
                                      <td>
                                        {
                                          allRecoveredPatientData[i]
                                            .hotpitalPhNo
                                        }
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="poppins_semibold_600">
                                        Hospital District:
                                      </td>
                                      <td>
                                        {
                                          allRecoveredPatientData[i]
                                            .hospitalDistrict
                                        }
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                                This Patient Agreed to Donate His Plasma 🟢
                              </ListGroup.Item>
                            </ListGroup>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardBody;
