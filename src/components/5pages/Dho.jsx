import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Dho = () => {
  //?district of dho from props
  const dhoDistrict = 'Dhaka';

  // ____STATE
  const [todaySingleVacUsed, setTodaySingleVacUsed] = useState(0);
  const [todayDoubleVacUsed, setTodayDoubleVacUsed] = useState(0);
  const [totalSingleVacUsed, setTotalSingleVacUsed] = useState(0);
  const [totalDoubleVacUsed, setTotalDoubleVacUsed] = useState(0);

  let formhandler = (e) => {
    e.preventDefault();
    alert(`form submitted
    
    
   today single vac used = ${todaySingleVacUsed}
 today double vac used =    ${todayDoubleVacUsed}
    total single vac used = ${totalSingleVacUsed}
total double vac used =     ${totalDoubleVacUsed}
    `);

    const todayTotalVacUsed = todaySingleVacUsed + todayDoubleVacUsed;
    const totalVacUsedTillToday = totalSingleVacUsed + totalDoubleVacUsed;

    axios
      .post('/api/v1/dho/', {
        data: {
          dhodistrict: dhoDistrict,
          todaySingleVacUsed: todaySingleVacUsed,
          todayDoubleVacUsed: todayDoubleVacUsed,
          totalSingleVacUsed: totalSingleVacUsed,
          totalDoubleVacUsed: totalDoubleVacUsed,
          todayTotalVacUsed: todayTotalVacUsed,
          totaVacUsedTillToday: totalVacUsedTillToday,
        },
      })

      .then((response) => {
        console.log(response);

        alert('Data Recorded');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const globalFieldHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //! today single vac
    if (name === 'today-single-vac') {
      console.log(`today-single-vac ${value}`);

      setTodaySingleVacUsed(value);
      console.log(todaySingleVacUsed);
      //! today double vac
    } else if (name === 'today-double-vac') {
      console.log(`today-double-vac ${value}`);
      setTodayDoubleVacUsed(value);
      console.log(todayDoubleVacUsed);
      //! total single vac
    } else if (name === 'total-single-vac') {
      console.log(`total-single-vac ${value}`);
      setTotalSingleVacUsed(value);
      console.log(totalSingleVacUsed);
      //! total double vac
    } else if (name === 'total-double-vac') {
      console.log(`total-double-vac ${value}`);
      setTotalDoubleVacUsed(value);
      console.log(totalDoubleVacUsed);
    }
  };

  // !district dropdown input field
  //   useEffect(() => {
  //     // _______________________AUTOCOMPLETE start
  //     function autocomplete(inp, arr) {
  //       /*the autocomplete function takes two arguments,
  // the text field element and an array of possible autocompleted values:*/
  //       var currentFocus;
  //       /*execute a function when someone writes in the text field:*/
  //       inp.addEventListener('input', function (e) {
  //         var a,
  //           b,
  //           i,
  //           val = this.value;
  //         /*close any already open lists of autocompleted values*/
  //         closeAllLists();
  //         if (!val) {
  //           return false;
  //         }
  //         currentFocus = -1;
  //         /*create a DIV element that will contain the items (values):*/
  //         a = document.createElement('DIV');
  //         a.setAttribute('id', this.id + 'autocomplete-list');
  //         a.setAttribute('class', 'autocomplete-items');
  //         /*append the DIV element as a child of the autocomplete container:*/
  //         this.parentNode.appendChild(a);
  //         /*for each item in the array...*/
  //         for (i = 0; i < arr.length; i++) {
  //           var pos = arr[i].toUpperCase().indexOf(val.toUpperCase());
  //           /*check if the item starts with the same letters as the text field value:*/
  //           if (pos > -1) {
  //             /*create a DIV element for each matching element:*/
  //             b = document.createElement('DIV');
  //             /*make the matching letters bold:*/
  //             b.innerHTML = arr[i].substr(0, pos);
  //             b.innerHTML +=
  //               '<strong>' + arr[i].substr(pos, val.length) + '</strong>';
  //             b.innerHTML += arr[i].substr(pos + val.length);
  //             /*insert a input field that will hold the current array item's value:*/
  //             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
  //             /*execute a function when someone clicks on the item value (DIV element):*/
  //             b.addEventListener('click', function (e) {
  //               /*insert the value for the autocomplete text field:*/
  //               inp.value = this.getElementsByTagName('input')[0].value;
  //               /*close the list of autocompleted values,
  //           (or any other open lists of autocompleted values:*/
  //               closeAllLists();
  //             });

  //             a.appendChild(b);
  //           }
  //         }
  //       });
  //       /*execute a function presses a key on the keyboard:*/
  //       inp.addEventListener('keydown', function (e) {
  //         var x = document.getElementById(this.id + 'autocomplete-list');
  //         if (x) x = x.getElementsByTagName('div');
  //         if (e.keyCode == 40) {
  //           /*If the arrow DOWN key is pressed,
  //     increase the currentFocus variable:*/
  //           currentFocus++;
  //           /*and and make the current item more visible:*/
  //           addActive(x);
  //         } else if (e.keyCode == 38) {
  //           //up
  //           /*If the arrow UP key is pressed,
  //     decrease the currentFocus variable:*/
  //           currentFocus--;
  //           /*and and make the current item more visible:*/
  //           addActive(x);
  //         } else if (e.keyCode == 13) {
  //           /*If the ENTER key is pressed, prevent the form from being submitted,*/
  //           e.preventDefault();
  //           if (currentFocus > -1) {
  //             /*and simulate a click on the "active" item:*/
  //             if (x) x[currentFocus].click();
  //           }
  //         }
  //       });
  //       function addActive(x) {
  //         /*a function to classify an item as "active":*/
  //         if (!x) return false;
  //         /*start by removing the "active" class on all items:*/
  //         removeActive(x);
  //         if (currentFocus >= x.length) currentFocus = 0;
  //         if (currentFocus < 0) currentFocus = x.length - 1;
  //         /*add class "autocomplete-active":*/
  //         x[currentFocus].classList.add('autocomplete-active');
  //       }
  //       function removeActive(x) {
  //         /*a function to remove the "active" class from all autocomplete items:*/
  //         for (var i = 0; i < x.length; i++) {
  //           x[i].classList.remove('autocomplete-active');
  //         }
  //       }
  //       function closeAllLists(elmnt) {
  //         /*close all autocomplete lists in the document,
  // except the one passed as an argument:*/
  //         var x = document.getElementsByClassName('autocomplete-items');
  //         for (var i = 0; i < x.length; i++) {
  //           if (elmnt != x[i] && elmnt != inp) {
  //             x[i].parentNode.removeChild(x[i]);
  //           }
  //         }
  //       }
  //       /*execute a function when someone clicks in the document:*/
  //       document.addEventListener('click', function (e) {
  //         closeAllLists(e.target);
  //       });
  //     }

  //     /*An array containing all the country names in the world:*/
  //     var countries = [
  //       'Achham',
  //       'Arghakhanchi',
  //       'Baglung',
  //       'Baitadi',
  //       'Bajhang',
  //       'Bajura',
  //       'Banke',
  //       'Bara',
  //       'Bardiya',
  //       'Bhaktapur',
  //       'Bhojpur',
  //       'Chitwan',
  //       'Dadeldhura',
  //       'Dailekh',
  //       'Dang',
  //       'Darchula',
  //       'Dhading',
  //       'Dhankuta',
  //       'Dhanusha',
  //       'Dolakha',
  //       'Dolpa',
  //       'Doti',
  //       'Eastern Rukum',
  //       'Gorkha',
  //       'Gulmi',
  //       'Humla',
  //       'Ilam',
  //       'Jajarkot',
  //       'Jhapa',
  //       'Jumla',
  //       'Kailali',
  //       'Kalikot',
  //       'Kanchanpur',
  //       'Kapilvastu',
  //       'Kaski',
  //       'Kathmandu',
  //       'Kavrepalanchok',
  //       'Khotang',
  //       'Lalitpur',
  //       'Lamjung',
  //       'Mahottari',
  //       'Makwanpur',
  //       'Manang',
  //       'Morang',
  //       'Mugu',
  //       'Mustang',
  //       'Myagdi',
  //       'Nawalpur',
  //       'Nuwakot',
  //       'Okhaldhunga',
  //       'Palpa',
  //       'Panchthar',
  //       'Parasi',
  //       'Parbat',
  //       'Parsa',
  //       'Pyuthan',
  //       'Ramechhap',
  //       'Rasuwa',
  //       'Rautahat',
  //       'Rolpa',
  //       'Rupandehi',
  //       'Salyan',
  //       'Sankhuwasabha',
  //       'Saptari',
  //       'Sarlahi',
  //       'Sindhuli',
  //       'Sindhupalchowk',
  //       'Siraha',
  //       'Solukhumbu',
  //       'Sunsari',
  //       'Surkhet',
  //       'Syangja',
  //       'Tanahun',
  //       'Taplejung',
  //       'Tehrathum',
  //       'Udayapur',
  //       'Western Rukum',
  //     ];

  //     /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  //     autocomplete(document.getElementById('myInput'), countries);
  //     // _______________________AUTOCOMPLETE end
  //   });

  return (
    <div id="dho-portal">
      <div className="containerCenter">
        <div className="contentBlock">
          <Form
            onSubmit={formhandler}
            className="outerForm"
            id="patient-recovered-form"
          >
            {/* //!long input field covering whole row */}
            {/* <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Total Double Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  placeholder="Enter Patient Name"
                />
              </Form.Group>
            </Form.Row> */}
            <Form.Row>
              {/* //!district dropdown */}
              {/* <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="poppins_regular_400">
                  Patient HomeTown District
                </Form.Label>

                <form autocomplete="off">
                  <div
                    id="optionBox"
                    class="autocomplete"
                    style={{ width: '300px' }}
                  />
                  <Form.Control
                    className="poppins_regular_400"
                    required
                    id="myInput"
                    type="text"
                    placeholder="Enter Patient HomeTown District"
                  />
                </form>
              </Form.Group> */}
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Today Single Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="today-single-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Today Double Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="today-double-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Total Double Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="total-double-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="poppins_regular_400">
                  Total Single Vaccine Used
                </Form.Label>
                <Form.Control
                  className="poppins_regular_400"
                  id="patient-name"
                  required
                  type="text"
                  name="total-single-vac"
                  onChange={globalFieldHandler}
                  placeholder="Enter Patient Name"
                />
              </Form.Group>
            </Form.Row>
            <Button
              id="recoveredSubmitBtn"
              className="poppins_regular_400"
              variant="primary"
              type="submit"
            >
              Record
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Dho;
