import React from 'react';
import { useState } from 'react';
import Card from '../components/card';
import '../styles/home.css';

function Home() {
	var obj = {index:'',title:'',description:''};
	var title, description;
	const handleChange = (event) => {obj[event.target.name]=event.target.value;};
	//var User = [{'title':"User 1",'description':"User 1 description"}, {'title':"User 2",'description':"User 2 description"}];
	const [User, setUser] = useState([{'title':"User 1",'description':"User 1 description"}, {'title':"User 2",'description':"User 2 description"}]);
	const edit = (event) => {User[obj.index].title=obj.title;User[obj.index].description=obj.description;
	document.getElementsByClassName('card')[obj.index].getElementsByTagName('h2')[0].innerHTML=obj.title;
	document.getElementsByClassName('card')[obj.index].getElementsByTagName('p')[0].innerHTML=obj.description;
	document.getElementsByClassName('inputForm')[0].style['display']='none';};
	const showInput = (event) => {obj.index = event.target.name;obj.title = User[event.target.name].title;obj.description = User[event.target.name].description;
	document.getElementsByClassName('inputForm')[0].getElementsByTagName('input')[0].value=event.target.name;
	document.getElementsByClassName('inputForm')[0].getElementsByTagName('input')[1].value=obj.title;
	document.getElementsByClassName('inputForm')[0].getElementsByTagName('input')[2].value=obj.description;
	document.getElementsByClassName('inputForm')[0].style['display']='block';
	};
	const showInput1 = (event) => {obj.index = '';obj.title = '';obj.description = '';
	document.getElementsByClassName('inputForm1')[0].getElementsByTagName('input')[0].value='';
	document.getElementsByClassName('inputForm1')[0].getElementsByTagName('input')[1].value=obj.title;
	document.getElementsByClassName('inputForm1')[0].getElementsByTagName('input')[2].value=obj.description;
	document.getElementsByClassName('inputForm1')[0].style['display']='block';
	};
	const input = (event) => {setUser(prev => [...prev, {'title':obj.title,'description':obj.description}]);
	document.getElementsByClassName('inputForm1')[0].style['display']='none';};
	const dlt = (event) => {User.splice(event.target.name,1);
	setUser(prev => [...prev]);
	var l = document.getElementsByClassName('card_').length;
	for(var i = 0;i<l;i++){
  	document.getElementsByClassName('card_')[i].getElementsByTagName('a')[0].name = i;
  	document.getElementsByClassName('card_')[i].getElementsByTagName('a')[1].name = i;
	}
	};
	const generateList = (event) => {
  	return User.map((user, index) => (
    <div class="card_" style={{border: 'solid black 1px','background-color': '#ffffff','border-radius': '10px','box-shadow': '0 4px 12px rgba(0, 0, 0, 0.1)',transition: 'transform 0.2s ease','padding-bottom':'1.5rem',margin:'0.5rem'}}>
	<Card title={user.title} description={user.description} />
	<a href="#" name={index} onClick={showInput}>Edit</a>
	<a href="#" name={index} onClick={dlt}>Delete</a>
	</div>
    ));
	};
  	return (
    	<div className="home-container">
      		<h1>Daftar User</h1>
      		<div style={{padding:'5px'}}><a href="#" onClick={showInput1}>Tambah User</a></div>
      		{generateList()}
    		<div class='inputForm1' style={{display: 'none',position: 'fixed',top: '0px',bottom: '0px',left: '0px',right: '0px','align-content': 'center'}}>
    			<div style={{'background-color': 'white','border': 'solid black 1px','border-radius': '10px',width: '400px',height: '400px','margin-left': 'auto','margin-right': 'auto','align-content': 'center'}}>
    				<input type="hidden" name="index" />
    				<div style={{color:'black'}}>
    					Name
    				</div>
    				<div>
    					<input type="text" name="title" value={title} onChange={handleChange} />
    				</div>
    				<div style={{color:'black'}}>
    					Description
    				</div>
    				<div>
    					<input type="text" name="description" value={description} onChange={handleChange} />
    				</div>
    				<div>
    					<input type="submit" value="Input" onClick={input}/>
    				</div>
    			</div>
    		</div>
    		<div class='inputForm' style={{display: 'none',position: 'fixed',top: '0px',bottom: '0px',left: '0px',right: '0px','align-content': 'center'}}>
    			<div style={{'background-color': 'white','border': 'solid black 1px','border-radius': '10px',width: '400px',height: '400px','margin-left': 'auto','margin-right': 'auto','align-content': 'center'}}>
    				<input type="hidden" name="index" />
    				<div style={{color:'black'}}>
    					Name
    				</div>
    				<div>
    					<input type="text" name="title" value={title} onChange={handleChange} />
    				</div>
    				<div style={{color:'black'}}>
    					Description
    				</div>
    				<div>
    					<input type="text" name="description" value={description} onChange={handleChange} />
    				</div>
    				<div>
    					<input type="submit" value="Edit" onClick={edit} />
    				</div>
    			</div>
    		</div>
    	</div>
  	);
}

export default Home;
