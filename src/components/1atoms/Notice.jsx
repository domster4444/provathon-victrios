import React from 'react';
import { useEffect } from 'react';
import { AlertList, Alert, AlertContainer } from 'react-bs-notifier';
function Notice() {
  const [position, setPosition] = React.useState('top-left');
  const [alerts, setAlerts] = React.useState([]);
  const [alertTimeout, setAlertTimeout] = React.useState(3000);

  const generate = React.useCallback((type) => {
    var myArray = [
      'Clean your hands often',
      'Cough or sneeze in your bent elbow - not your hands!',
      'Avoid touching your eyes, nose and mouth',
      'Limit social gatherings and time spent in crowded places',
      'Maintain distance with covid positive patients',
      'Avoid close contact with someone who is sick',
      'Clean and disinfect frequently touched objects and surfaces',
    ];

    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

    setAlerts((alerts) => [
      ...alerts,
      {
        id: new Date().getTime(),
        type: type,
        headline: `Tips & Suggestions`,
        message: randomItem,
      },
    ]);
  }, []);

  const onDismissed = React.useCallback((alert) => {
    setAlerts((alerts) => {
      const idx = alerts.indexOf(alert);
      if (idx < 0) return alerts;
      return [...alerts.slice(0, idx), ...alerts.slice(idx + 1)];
    });
  }, []);

  const clearAlerts = React.useCallback(() => setAlerts([]), []);

  const onTimeoutChange = React.useCallback(
    ({ target: { value } }) => setAlertTimeout(+value * 1000),
    []
  );

  const onPositionChange = React.useCallback(
    ({ target: { value } }) => setPosition(value),
    []
  );

  const clearAllButton = alerts.length ? (
    <button className="btn btn-link" onClick={clearAlerts}>
      Clear all alerts
    </button>
  ) : null;

  //   _______________Generate random item from given array
  // / program to get a random item from an array

  useEffect(() => {
    generate('info');
    setInterval(() => {
      generate('info');
    }, 10000);
  }, []);

  return (
    <>
      <h4>
        <AlertList
          position={position}
          alerts={alerts}
          timeout={alertTimeout}
          dismissTitle="Begone!"
          onDismiss={onDismissed}
        />
      </h4>
    </>
  );
}

export default Notice;
