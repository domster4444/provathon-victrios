import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// react bstrp
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { toast } from 'react-toastify';
const DistrictStatsPage = () => {
  //* __________________________STATE

  const [isAllDistrictStatDataLoaded, setAllDistrictStatDataLoadedState] =
    useState(false);
  const [allDistrictStatData, setAllDistrictStatData] = useState([]);
  const [detailedCovidInfo, setDetailedCovidInfo] = useState('');
  const [districtFetchedData, setDistrictFetchedData] = useState('');

  useEffect(() => {});

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
      'Ilam',
      'Jhapa',
      'Morang',
      'Sunsari',
      'Terhathum',
      'Bhojpur',
      'Sankhuwasabha',
      'Solukhumbu',
      'Khotang',
      'Okhaldhunga',
      'Udayapur',
      'Saptari',
      'Sindhuli',
      'Dolakha',
      'Rasuwa',
      'Nuwakot',
      'Lalitpur',
      'Makwanpur',
      'Bara',
      'Parsa',
      'Kapilbastu',
      'Arghakhanchi',
      'Syangja',
      'Gorkha',
      'Kaski',
      'Manang',
      'Baglung',
      'Dang',
      'Rolpa',
      'Mugu',
      'Jumla',
      'Dailekh',
      'Surkhet',
      'Banke',
      'Doti',
      'Bajura',
      'Baitadi',
      'Kanchanpur',
      'Rukum',
      'Taplejung',
      'Dhankuta',
      'Siraha',
      'Dhanusa',
    ];

    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById('myInput'), countries);
  }, []);
  // ============AUTO COMPLETE END

  // _______________________________________District ID handler

  let plasmaFormHandler = (e) => {
    e.preventDefault();

    //?__districtid
    let districtIdVal;
    //?

    let myInput = document.getElementById('myInput');
    let myDistrict = myInput.value.toLowerCase();

    // alert(myDistrict);

    // !__

    if (myDistrict === 'panchthar') {
      districtIdVal = '2';
    } else if (myDistrict === 'ilam') {
      districtIdVal = '3';
    } else if (myDistrict === 'jhapa') {
      districtIdVal = '4';
    } else if (myDistrict === 'morang') {
      districtIdVal = '5';
    } else if (myDistrict === 'sunsari') {
      districtIdVal = '6';
    } else if (myDistrict === 'terhathum') {
      districtIdVal = '8';
    } else if (myDistrict === 'bhojpur') {
      districtIdVal = '9';
    } else if (myDistrict === 'sankhuwasabha') {
      districtIdVal = '10';
    } else if (myDistrict === 'solukhumbu') {
      districtIdVal = '11';
    } else if (myDistrict === 'khotang') {
      districtIdVal = '12';
    } else if (myDistrict === 'okhaldhunga') {
      districtIdVal = '13';
    } else if (myDistrict === 'udayapur') {
      districtIdVal = '14';
    } else if (myDistrict === 'saptari') {
      districtIdVal = '16';
    } else if (myDistrict === 'sindhuli') {
      districtIdVal = '20';
    } else if (myDistrict === 'dolakha') {
      districtIdVal = '22';
    } else if (myDistrict === 'rasuwa') {
      districtIdVal = '23';
    } else if (myDistrict === 'nuwakot') {
      districtIdVal = '25';
    } else if (myDistrict === 'lalitpur') {
      districtIdVal = '28';
    } else if (myDistrict === 'makwanpur') {
      districtIdVal = '31';
    } else if (myDistrict === 'bara') {
      districtIdVal = '33';
    } else if (myDistrict === 'parsa') {
      districtIdVal = '34';
    } else if (myDistrict === 'kapilbastu') {
      districtIdVal = '38';
    } else if (myDistrict === 'arghakhanchi') {
      districtIdVal = '40';
    } else if (myDistrict === 'syangja') {
      districtIdVal = '42';
    } else if (myDistrict === 'gorkha') {
      districtIdVal = '44';
    } else if (myDistrict === 'kaski') {
      districtIdVal = '46';
    } else if (myDistrict === 'manang') {
      districtIdVal = '47';
    } else if (myDistrict === 'baglung') {
      districtIdVal = '50';
    } else if (myDistrict === 'dang') {
      districtIdVal = '52';
    } else if (myDistrict === 'rolpa') {
      districtIdVal = '54';
    } else if (myDistrict === 'mugu') {
      districtIdVal = '58';
    } else if (myDistrict === 'jumla') {
      districtIdVal = '60';
    } else if (myDistrict === 'dailekh') {
      districtIdVal = '63';
    } else if (myDistrict === 'surkhet') {
      districtIdVal = '64';
    } else if (myDistrict === 'banke') {
      districtIdVal = '66';
    } else if (myDistrict === 'doti') {
      districtIdVal = '68';
    } else if (myDistrict === 'bajura') {
      districtIdVal = '70';
    } else if (myDistrict === 'baitadi') {
      districtIdVal = '73';
    } else if (myDistrict === 'kanchanpur') {
      districtIdVal = '75';
    } else if (myDistrict === 'rukum east') {
      districtIdVal = '41';
    } else if (myDistrict === 'taplejung') {
      districtIdVal = ' 1';
    } else if (myDistrict === 'dhankuta') {
      districtIdVal = ' 7';
    } else if (myDistrict === 'siraha') {
      districtIdVal = '15';
    } else if (myDistrict === 'dhanusa') {
      districtIdVal = '17';
    } else {
      toast('district data not available');
    }
    const districtDataStatInstance = axios.create({
      baseURL: 'https://data.askbhunte.com/api/v1/districts',
    });
    function getDistrictStat() {
      districtDataStatInstance.get(`/${districtIdVal}`).then((res) => {
        setAllDistrictStatData(res.data.covid_summary);
        setDistrictFetchedData(res.data.title);
        setDetailedCovidInfo(res.data.covid_cases);
        setAllDistrictStatDataLoadedState(true);
        console.log('owu 🍉🍉🍉🍉🍉');
        console.log(res);
      });
    }

    getDistrictStat();

    // !__

    // ______GETT "district" key to server to get message:[{},{}]
  };
  return (
    <>
      <main id="DistrictStatsPage">
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
          </div>
        </div>

        <div className="containerCenter">
          <div className="contentBlock">
            {(() => {
              let noOfFemaleCase = 0;
              let noOfMaleCase = 0;

              if (isAllDistrictStatDataLoaded === true) {
                console.log('**all districtstats data loaded is  below***');
                console.log(detailedCovidInfo.length);
                console.log(detailedCovidInfo[0]);

                for (let i of detailedCovidInfo) {
                  if (i.gender === 'male') {
                    noOfMaleCase += 1;
                  } else if (i.gender === 'female') {
                    noOfFemaleCase += 1;
                  }
                }

                return (
                  <>
                    {(() => {
                      let newArr = [];
                      newArr.push(
                        <>
                          <div>
                            <p></p>
                          </div>
                          <br />
                          <ListGroup
                            id="plasmaList-listContainer"
                            key="1"
                            style={{ width: '100%' }}
                          >
                            <ListGroup.Item id="plasmaList">
                              <Table hover>
                                <thead></thead>
                                <tbody>
                                  <tr>
                                    <td className="poppins_semibold_600">
                                      Total Case
                                    </td>
                                    <td>{allDistrictStatData.cases}</td>
                                  </tr>
                                  <tr>
                                    <td className="poppins_semibold_600">
                                      Active Case
                                    </td>
                                    <td>{allDistrictStatData.active}</td>
                                  </tr>
                                  <tr>
                                    <td className="poppins_semibold_600">
                                      Male Case
                                    </td>
                                    <td>{noOfMaleCase}</td>
                                  </tr>
                                  <tr>
                                    <td className="poppins_semibold_600">
                                      Female Case
                                    </td>
                                    <td>{noOfFemaleCase}</td>
                                  </tr>
                                  <tr>
                                    <td className="poppins_semibold_600">
                                      Death Case
                                    </td>
                                    <td>{allDistrictStatData.death}</td>
                                  </tr>
                                  <tr>
                                    <td className="poppins_semibold_600">
                                      District
                                    </td>
                                    <td>{districtFetchedData}</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </ListGroup.Item>
                          </ListGroup>
                        </>
                      );

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

export default DistrictStatsPage;
