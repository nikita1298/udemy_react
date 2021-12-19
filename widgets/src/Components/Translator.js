// //AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


// import React, { useState } from 'react';
// import Dropdown from './Dropdown';
// import Convert from './Convert';

// const options = [
//     {
//         label: 'German',
//         value:'gr'
//     },
//     {
//         label: 'Arabic',
//         value:'ar'
//     },
//     {
//         label: 'Hindi',
//         value:'hi'
//     },
// ]

// const Translate = () => {
//     const [language, setLanguage] = useState(options[0])
//     const [text, setText] = useState('');
//     return (
//         <div>
//             <div className="ui form">
//                 <div className="field">
//                     <label>Enter Text</label>
//             <input value={text} onChange={(e)=>{setText(e.target.value)}}  />
//                 </div>
//                 </div>
//             <Dropdown options={options}
//                 label="Select a  language   "
//                 selected={language}
//                 onSelectedChange={setLanguage}
//             />
//             <hr />
//             <h3 className="ui header">Output</h3>
//             <Convert text={text} language={language} />
//         </div>
//     );
// }

// export default Translate;


import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        // Add code here to fetch some users with axios and the URL variable
        // then update the 'users' piece of state
        const getUserData = async ()=>{
        const data = await axios.get(URL);
            setUsers(data.data);
        }
        getUserData();
    }, []);
     
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    
    return (
        <ul>
            {users.length ? renderedUsers :null}
        </ul>
    );
}

export default App;
