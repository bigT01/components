import React from 'react';
import './App.css';
import BasicButton from "./components/buttons/BasicButton";

function App() {
    return (
        <div className="w-screen p-10">
            {/*tags*/}
            <div className='flex gap-2 mb-4'>
                <button className='px-4 py-2 rounded-full bg-blue-700 text-white'>Buttons</button>
            </div>
            {/*components*/}
          <div className='flex flex-wrap gap-4'>
            {/*<BasicButton label={'press me'} bgColor={'#ededed'}/>*/}
          </div>
        </div>
    );
}

export default App;
