import React from 'react';
import { useState } from 'react';
import Card from '../components/card';
import '../styles/about.css';

function About() {
  	var obj = {index:'',nama:'',alamat:''};
	var nama, alamat;
  	//var Siswa = [{'nama':"Siswa 1",'alamat':"Alamat 1"}, {'nama':"Siswa 2",'alamat':"Alamat 2"}];
  	const [Siswa, setSiswa] = useState([{'nama':"Siswa 1",'alamat':"Alamat 1"}, {'nama':"Siswa 2",'alamat':"Alamat 2"}]);
  	const generateList = (event) => {
  	return Siswa.map((siswa, index) => (
	    <div class="card_" style={{border: 'solid black 1px','background-color': '#ffffff','border-radius': '10px','box-shadow': '0 4px 12px rgba(0, 0, 0, 0.1)',transition: 'transform 0.2s ease','padding-bottom':'1.5rem',margin:'0.5rem'}}>
		<Card title={siswa.nama} description={siswa.alamat} />
		<a href="#" name={index} onClick={showInput}>Edit</a>
		<a href="#" name={index} onClick={dlt}>Delete</a>
		</div>
    ));
	};
	const dlt = (event) => {Siswa.splice(event.target.name,1);
	setSiswa(prev => [...prev]);
	var l = document.getElementsByClassName('card_').length;
	for(var i = 0;i<l;i++){
  	document.getElementsByClassName('card_')[i].getElementsByTagName('a')[0].name = i;
  	document.getElementsByClassName('card_')[i].getElementsByTagName('a')[1].name = i;
	}
	};
	const showInput = (event) => {obj.index = event.target.name;obj.nama = Siswa[event.target.name].nama;obj.alamat = Siswa[event.target.name].alamat;
	document.getElementsByClassName('inputForm')[0].getElementsByTagName('input')[0].value=event.target.name;
	document.getElementsByClassName('inputForm')[0].getElementsByTagName('input')[1].value=obj.nama;
	document.getElementsByClassName('inputForm')[0].getElementsByTagName('input')[2].value=obj.alamat;
	document.getElementsByClassName('inputForm')[0].style['display']='block';
	};
	const showInput1 = (event) => {obj.index = '';obj.nama = '';obj.alamat = '';
	document.getElementsByClassName('inputForm1')[0].getElementsByTagName('input')[0].value='';
	document.getElementsByClassName('inputForm1')[0].getElementsByTagName('input')[1].value=obj.nama;
	document.getElementsByClassName('inputForm1')[0].getElementsByTagName('input')[2].value=obj.alamat;
	document.getElementsByClassName('inputForm1')[0].style['display']='block';
	};
	const input = (event) => {setSiswa(prev => [...prev, {'nama':obj.nama,'alamat':obj.alamat}]);
	document.getElementsByClassName('inputForm1')[0].style['display']='none';};
	const handleChange = (event) => {obj[event.target.name]=event.target.value;};
	const edit = (event) => {Siswa[obj.index].nama=obj.nama;Siswa[obj.index].alamat=obj.alamat;
	document.getElementsByClassName('card')[obj.index].getElementsByTagName('h2')[0].innerHTML=obj.nama;
	document.getElementsByClassName('card')[obj.index].getElementsByTagName('p')[0].innerHTML=obj.alamat;
	document.getElementsByClassName('inputForm')[0].style['display']='none';};
  	return (
    	<div className="about-container">
          	<h1>Daftar Siswa</h1>
      		<div style={{padding:'5px'}}><a href="#" onClick={showInput1}>Tambah Siswa</a></div>
          	{generateList()}
    		<div class='inputForm1' style={{display: 'none',position: 'fixed',top: '0px',bottom: '0px',left: '0px',right: '0px','align-content': 'center'}}>
    			<div style={{'background-color': 'white','border': 'solid black 1px','border-radius': '10px',width: '400px',height: '400px','margin-left': 'auto','margin-right': 'auto','align-content': 'center'}}>
    				<input type="hidden" name="index" />
    				<div style={{color:'black'}}>
    					Nama
    				</div>
    				<div>
    					<input type="text" name="nama" value={nama} onChange={handleChange} />
    				</div>
    				<div style={{color:'black'}}>
    					Alamat
    				</div>
    				<div>
    					<input type="text" name="alamat" value={alamat} onChange={handleChange} />
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
    					Nama
    				</div>
    				<div>
    					<input type="text" name="nama" value={nama} onChange={handleChange} />
    				</div>
    				<div style={{color:'black'}}>
    					Alamat
    				</div>
    				<div>
    					<input type="text" name="alamat" value={alamat} onChange={handleChange} />
    				</div>
    				<div>
    					<input type="submit" value="Edit" onClick={edit} />
    				</div>
    			</div>
    		</div>
    	</div>
  	);
}

export default About;