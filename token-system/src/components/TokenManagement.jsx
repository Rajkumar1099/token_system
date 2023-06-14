import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const TokenManagement = () => {
  const [mode, setMode] = useState('online');
  const [meetingDuration, setMeetingDuration] = useState(30);
  const [bufferDuration, setBufferDuration] = useState(15);

  // Add your component logic here

  return (
    <div className="container">
        <h1>Token Management System</h1>
        <div className="row">
            <div className='card m-10 col-6'>        
                <div className='card-body'>
                    <label>
                        <input
                        type="radio"
                        value="online"
                        checked={mode === 'online'}
                        onChange={() => setMode('online')}
                        />{' '}
                        Online Mode
                    </label>
                </div>
            </div>
            <div className="card m-10 col-6">
                <div className='card-body'>
                    <label>
                        <input
                        type="radio"
                        value="offline"
                        checked={mode === 'offline'}
                        onChange={() => setMode('offline')}
                        />{' '}
                        Offline Mode
                    </label>
                </div>
            </div>
        </div>
        <div>
            <label>
                Meeting Duration (minutes):
                <input
                type="number"
                value={meetingDuration}
                onChange={(e) => setMeetingDuration(Number(e.target.value))}
                />
            </label>
            <label>
                Buffer Duration (minutes):
                <input
                type="number"
                value={bufferDuration}
                onChange={(e) => setBufferDuration(Number(e.target.value))}
                />
            </label>
        </div>
        {/* Add other components and logic based on the selected mode */}
    </div>
  );
};

export default TokenManagement;


