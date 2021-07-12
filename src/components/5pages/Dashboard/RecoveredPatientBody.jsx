import React from 'react';
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { toast } from 'react-toastify';
const RecoveredPatientBody = (props) => {
  useEffect(() => {
    // _______________________AUTOCOMPLETE start
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
    // _______________________AUTOCOMPLETE end
    //?fetch hospital ph no from insitalDetailSetupCluster using hospital code of props.loggedinhospitaldetails

    axios
      .post('http://localhost:5000/api/fetchhospitalno', {
        data: {
          code: props.loggedInHospitalDetail.loggedInHospitalCode,
        },
      })
      .then((res) => {
        console.log(
          'START fetch ph no by sending hospital code -fetchHospitalPhNo route🛕 '
        );
        props.setLoggedInHotpitalPhNo(res.data.message);
        console.log(
          'END fetch ph no by sending hospital code -fetchHospitalPhNo route🛕 '
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //?======================== form handler start

  // patientId: patientId,
  // patientName: patientName,
  // patientDoge: patientDoge,
  // patientAddress: patientAddress,
  // hotpitalPhNo: hotpitalPhNo,
  // hospitalDistrict: hospitalDistrict,
  // hospitalEmail: hospitalEmail,
  // hospitalName: hospitalName,

  // global form handler
  let globalPatientRecoveredFormHandler = (e) => {
    e.preventDefault();
    let patientIdVal = document.getElementById('patient-id').value;
    let patientNameVal = document.getElementById('patient-name').value;
    let patientDogeVal = document.getElementById('patient-doge').value;
    let patientAddressVal = document.getElementById('myInput').value;
    let hospitalPhNoVal = props.loggedInHospitalDetail.loggedInHotpitalPhNo;
    let hospitalDistrictVal =
      props.loggedInHospitalDetail.loggedInHospitalDistrict;
    let hospitalEmailVal = props.loggedInHospitalDetail.loggedInHospitalEmail;
    let hospitalName = props.loggedInHospitalDetail.loggedInHospitalName;

    // ______________SEND RECOVERED PATIENT TO SERVER TO SAVE

    axios
      .post('http://localhost:5000/api/patient/recovered', {
        data: {
          patientId: patientIdVal,
          patientName: patientNameVal,
          patientDoge: patientDogeVal,
          patientAddress: patientAddressVal,
          hotpitalPhNo: hospitalPhNoVal,
          hospitalDistrict: hospitalDistrictVal,
          hospitalEmail: hospitalEmailVal,
          hospitalName: hospitalName,
        },
      })
      .then((res) => {
        console.log(res.data.message);
        // Patient already added
        // patient Data Saved Successfully
        if (res.data.message === 'patient Data Saved Successfully') {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //?======================== form handler end

  return (
    <>
      <main id="recoveredPatientBody">
        <div className="containerCenter">
          <div className="contentBlock">
            <Form onSubmit={globalPatientRecoveredFormHandler}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Patient Name</Form.Label>
                  <Form.Control
                    id="patient-name"
                    required
                    type="text"
                    placeholder="Enter Patient Name"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Total Vaccine Doge He Took</Form.Label>
                  <Form.Control
                    id="patient-doge"
                    required
                    type="text"
                    placeholder="Enter no of vaccine doge"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Patient HomeTown District</Form.Label>

                  <form autocomplete="off">
                    <div
                      id="optionBox"
                      class="autocomplete"
                      style={{ width: '300px' }}
                    />
                    <Form.Control
                      required
                      id="myInput"
                      type="text"
                      placeholder="Enter Patient HomeTown District"
                    />
                  </form>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Patient ID </Form.Label>
                  <Form.Control
                    id="patient-id"
                    required
                    type="text"
                    placeholder=" Patient ID"
                  />
                </Form.Group>
              </Form.Row>

              <Button id="recoveredSubmitBtn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecoveredPatientBody;
