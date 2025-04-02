import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
// import { doc, getDocs, collection, deleteDoc } from 'firebase/firestore';
// import { db, UserData } from './firebase';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type AdminScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Admin'>;

interface Props {
  navigation: AdminScreenNavigationProp;
}

interface FirestoreUser extends UserData {
  id: string;
}

const AdminScreen: React.FC<Props> = ({ navigation }) => {
  const [users, setUsers] = useState<FirestoreUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData: FirestoreUser[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as UserData
      }));
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const deleteUser = async (userId: string) => {
    await deleteDoc(doc(db, 'users', userId));
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Admin Panel</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
            <Text>{item.email}</Text>
            <Button title="Delete" onPress={() => deleteUser(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default AdminScreen;