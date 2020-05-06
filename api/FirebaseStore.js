import * as firebase from 'firebase';
import 'firebase/firestore';

const getList = async () => {
	var list = [];
	const { uid } = firebase.auth().currentUser.uid;
	const shoes = await firebase.firestore().collection('Shoes').doc(uid);

	console.log(uid);
};

const addList = async (name, price) => {
	
};

export default { getList, addList };
